import { SmartphoneNfc } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SmartphoneNfc className="h-24 w-24" />
    </main>
  );
}
