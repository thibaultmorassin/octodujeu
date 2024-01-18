import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsQR";

const QrCodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scannedData, setScannedData] = useState<string | undefined>(undefined);

  useEffect(() => {
    const drawLine = (
      begin: { x: number; y: number },
      end: { x: number; y: number },
      color: string,
    ) => {
      const canvas = canvasRef.current?.getContext("2d");
      if (canvas) {
        canvas.beginPath();
        canvas.moveTo(begin.x, begin.y);
        canvas.lineTo(end.x, end.y);
        canvas.lineWidth = 4;
        canvas.strokeStyle = color;
        canvas.stroke();
      }
    };

    const detectCodeTick = () => {
      if (!videoRef.current || !canvasRef.current) {
        return;
      }

      const video = videoRef.current;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasRef.current.hidden = false;

        const canvas = canvasRef.current;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        if (canvas) {
          canvas.height = videoHeight;
          canvas.width = videoWidth;
          const canvasContext = canvas.getContext("2d");
          if (canvasContext) {
            canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight);

            const imageData = canvasContext.getImageData(
              0,
              0,
              videoWidth,
              videoHeight,
            );
            const code = jsQR(
              imageData.data,
              imageData.width,
              imageData.height,
              {
                inversionAttempts: "dontInvert",
              },
            );

            if (code) {
              drawLine(
                code.location.topLeftCorner,
                code.location.topRightCorner,
                "#FF3B58",
              );
              drawLine(
                code.location.topRightCorner,
                code.location.bottomRightCorner,
                "#FF3B58",
              );
              drawLine(
                code.location.bottomRightCorner,
                code.location.bottomLeftCorner,
                "#FF3B58",
              );
              drawLine(
                code.location.bottomLeftCorner,
                code.location.topLeftCorner,
                "#FF3B58",
              );
              setScannedData(code.data);
            } else {
              console.log("No QR code detected.");
            }
          }
        }
      }

      requestAnimationFrame(detectCodeTick);
    };

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", "true");
          videoRef.current.play();
          requestAnimationFrame(detectCodeTick);
        }
      });

    const stream = videoRef.current?.srcObject as MediaStream | null;

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full mb-4"></canvas>
      <video
        ref={videoRef}
        id="video"
        playsInline={true}
        hidden
        autoPlay
      ></video>
      <b>Data:</b> <pre>{JSON.stringify(scannedData)}</pre>
    </div>
  );
};

export default QrCodeScanner;
