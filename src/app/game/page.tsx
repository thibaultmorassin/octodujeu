"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useGameByIdQuery from "@/hooks/useGameByIdQuery";
import { Dices } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Game() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id") as string;

  const { data } = useGameByIdQuery(gameId);

  return (
    <main className="flex flex-col items-center justify-center gap-8 p-24">
      <Dices className="h-24 w-24" />
      <Card>
        <CardHeader>{gameId}</CardHeader>
        <CardContent>{data?.name}</CardContent>
      </Card>
    </main>
  );
}
