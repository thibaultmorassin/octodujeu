"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CalendarCheck2,
  ChevronRightIcon,
  PackageOpen,
  PrinterIcon,
  UsersRound,
} from "lucide-react";

export default function Loading() {
  return (
    <div>
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Liste des jeux
        </div>
        <ChevronRightIcon className="h-4 w-4" />
        <Skeleton className="w-32 h-4" />
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="space-y-4">
          <Card className="mx-auto md:mx-0 aspect-square max-w-xs">
            <div className="relative h-full">
              <Skeleton className="w-full md:w-[300px] h-[300px]" />
            </div>
            <Skeleton className="w-[90%] h-5 mt-2 mb-4 mx-auto" />
          </Card>
          <Button className="w-full" disabled>
            <PrinterIcon size={18} />
            Imprimer le QR Code
          </Button>
        </div>
        <div className="flex-1">
          <div className="space-y-0.5">
            <Skeleton className="w-64 h-8 mb-2" />
            <Skeleton className="w-32 h-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <div className="items-center grid grid-cols-2 gap-4">
              <span className="flex items-center text-muted-foreground">
                <UsersRound className="mr-1 h-3 w-3" /> Nombre de joueurs
              </span>
              <span className="grid-span-3">
                <Skeleton className="w-12 h-4" />
              </span>
            </div>
            <div className="items-center grid grid-cols-2 gap-4">
              <span className="flex items-center text-muted-foreground">
                <CalendarCheck2 className="mr-1 h-3 w-3" /> {"Tranche d'âge"}
              </span>
              <span className="grid-span-3">
                <Skeleton className="w-16 h-4" />
              </span>
            </div>
          </div>
          <Alert className="my-4 bg-foreground text-background flex gap-2 items-center">
            <div>
              <PackageOpen className="h-6 w-6 text-slate-50" />
            </div>
            <AlertTitle className="text-lg m-0">...</AlertTitle>
          </Alert>
        </div>
      </div>
    </div>
  );
}
