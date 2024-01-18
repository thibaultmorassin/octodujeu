"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useGameByIdQuery from "@/hooks/useGameByIdQuery";
import {
  CalendarCheck2,
  PackageOpen,
  PrinterIcon,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Game() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id") as string;

  const { data, isLoading } = useGameByIdQuery(gameId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="space-y-4">
        <Card className="mx-auto md:mx-0 aspect-square max-w-xs">
          <div className="relative h-full">
            <Image
              className="p-2"
              src={data?.qrCode ?? ""}
              alt="QR Code"
              fill
              sizes="100vw"
            />
          </div>
        </Card>
        <Button disabled>
          <PrinterIcon size={18} />
          Imprimer le QR Code
        </Button>
      </div>
      <div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">{data?.name}</h2>
          <p className="text-muted-foreground">ID: {gameId}</p>
        </div>
        <Separator className="my-4" />
        <div className="items-center grid grid-cols-4">
          <span className="flex items-center text-muted-foreground">
            <UsersRound className="mr-1 h-3 w-3" /> Nombre de joueurs
          </span>
          <span className="grid-span-3">
            {data?.minPlayer} à {data?.maxPlayer}
          </span>
        </div>
        <div className="items-center grid grid-cols-4">
          <span className="flex items-center text-muted-foreground">
            <CalendarCheck2 className="mr-1 h-3 w-3" /> {"Tranche d'âge"}
          </span>
          <span className="grid-span-3">
            {data?.minAge} à {data?.maxAge}
          </span>
        </div>
        <Alert className="my-4 bg-foreground text-background flex gap-2 items-center">
          <div>
            <PackageOpen className="h-6 w-6 text-slate-50" />
          </div>
          <AlertTitle className="text-lg m-0">
            {data?.storage?.name
              ? `Rangement: ${data?.storage?.name}`
              : "Attribué à aucun rangement !"}
          </AlertTitle>
        </Alert>
      </div>
    </div>
  );
}
