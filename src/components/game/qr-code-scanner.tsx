import jsQR, { QRCode } from "jsQR";
import React, { useEffect, useRef, useState } from "react";

const drawLine = (
  canvas: CanvasRenderingContext2D | null | undefined,
  begin: { x: number; y: number },
  end: { x: number; y: number },
) => {
  if (canvas) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = "#FF3B58";
    canvas.stroke();
  }
};

const drawSquare = (
  canvas: CanvasRenderingContext2D | null | undefined,
  code: QRCode,
) => {
  drawLine(canvas, code.location.topLeftCorner, code.location.topRightCorner);
  drawLine(
    canvas,
    code.location.topRightCorner,
    code.location.bottomRightCorner,
  );
  drawLine(
    canvas,
    code.location.bottomRightCorner,
    code.location.bottomLeftCorner,
  );
  drawLine(canvas, code.location.bottomLeftCorner, code.location.topLeftCorner);
};

type QrCodeScannerProps = {
  onScan: (gameId: string) => void | Promise<void>;
};

const QrCodeScanner: React.FC<QrCodeScannerProps> = ({ onScan }) => {
  const streamRef = useRef<MediaStream>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scannedData, setScannedData] = useState<string | undefined>(undefined);

  useEffect(() => {
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
              drawSquare(canvasRef.current?.getContext("2d"), code);
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
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "environment",
          frameRate: {
            ideal: 30,
          },
          width: 400,
          height: 400,
        },
      })
      .then((stream) => {
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", "true");
          videoRef.current.play();
          requestAnimationFrame(detectCodeTick);
        }
      });

    const videoStream = videoRef.current?.srcObject as MediaStream | null;

    return () => {
      if (videoStream) {
        const tracks = videoStream.getTracks();
        tracks.forEach((track) => {
          track.stop();
          videoStream.removeTrack(track);
        });
      }
      handleStopStream();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStopStream = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => {
        track.stop();
        streamRef.current?.removeTrack(track);
      });
    }
  };

  useEffect(() => {
    if (scannedData) {
      onScan(scannedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scannedData]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="w-full max-w-sm max-h-[50svh] m-auto mb-4 -scale-x-100"
      ></canvas>
      <video
        ref={videoRef}
        id="video"
        playsInline={true}
        hidden
        autoPlay
      ></video>
    </div>
  );
};

export default QrCodeScanner;
