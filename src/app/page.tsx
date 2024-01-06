"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import useGamesQuery from "@/hooks/useGamesQuery";
import { SmartphoneNfc } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data } = useGamesQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <SmartphoneNfc className="h-24 w-24" />
      {data?.map((game) => (
        <Link href={`/game/${game.id}`} key={game.id}>
          <Card>
            <CardHeader>{game.name}</CardHeader>
          </Card>
        </Link>
      ))}
      <Button size={"lg"}>Scan</Button>
    </main>
  );
}
