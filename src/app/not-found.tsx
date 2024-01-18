import { Button, buttonVariants } from "@/components/ui/button";
import { Compass } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center py-[20%] gap-4 items-center">
      <Compass size={64} />
      <h2>Vous êtes perdus ?</h2>

      <Button asChild>
        <Link href="/">{"Retour à l'acceuil"}</Link>
      </Button>
    </div>
  );
}
