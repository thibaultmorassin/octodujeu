"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useGameByIdQuery from "@/hooks/useGameByIdQuery";
import {
  CalendarCheck2,
  ChevronRightIcon,
  PackageOpen,
  PrinterIcon,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

export default function Game() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id") as string;

  const { data, isLoading } = useGameByIdQuery(gameId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Liste des jeux
        </div>
        <ChevronRightIcon className="h-4 w-4" />
        <div className="font-medium text-foreground">{data?.name}</div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="space-y-4">
          <Card className="mx-auto md:mx-0 aspect-square max-w-xs">
            <div className="relative h-full md:min-w-[300px]">
              <Image
                className="p-2"
                src={data?.qrCode ?? ""}
                alt="QR Code"
                fill
                sizes="100vw"
              />
            </div>
            <div className="text-xl font-bold text-center uppercase m-4 mt-0">
              {data?.name}
            </div>
          </Card>
          <Button className="w-full" disabled>
            <PrinterIcon size={18} />
            Imprimer le QR Code
          </Button>
        </div>
        <div className="flex-1">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">{data?.name}</h2>
            <p className="text-muted-foreground">ID: {gameId}</p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <div className="items-center grid grid-cols-2 gap-4">
              <span className="flex items-center text-muted-foreground">
                <UsersRound className="mr-1 h-3 w-3" /> Nombre de joueurs
              </span>
              <span className="grid-span-3">
                {data?.minPlayer} à {data?.maxPlayer}
              </span>
            </div>

            <div className="items-center grid grid-cols-2 gap-4">
              <span className="flex items-center text-muted-foreground">
                <CalendarCheck2 className="mr-1 h-3 w-3" /> {"Tranche d'âge"}
              </span>
              <span className="grid-span-3">
                {data?.minAge} à {data?.maxAge}
              </span>
            </div>
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
    </div>
  );
}
