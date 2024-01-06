import { Dices } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const geist = localFont({ src: "../lib/GeistVariableVF.woff2" });

export const metadata: Metadata = {
  title: "Octodujeux | Gestion de jeux de société",
  description:
    "Application de gestions des jeux de société de l'association Octodujeux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={geist.className}>
      <body className={"min-h-screen bg-white flex flex-col items-center"}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col text-foreground">
              <p className="flex font-medium text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
                <Dices className="mr-2 h-10 w-10" />
                Octodujeux
              </p>
            </div>
            <div className="mx-[10vw] space-y-4">{children}</div>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
