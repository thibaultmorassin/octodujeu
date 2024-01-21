"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import useStorageByIdQuery from "@/hooks/useStorageByIdQuery";
import {
  ArrowRightToLine,
  CalendarCheck2,
  ChevronRightIcon,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

export default function StorageMode() {
  const searchParams = useSearchParams();
  const storageId = searchParams.get("id") as string;

  const { data, isLoading } = useStorageByIdQuery(storageId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="animate-in space-y-4">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <Link href={"/storage"}>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Boîtes de rangement
          </div>
        </Link>
        <ChevronRightIcon className="h-4 w-4" />
        <div className="font-medium text-foreground">{data?.name}</div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.games.length ? (
          data?.games.map((game) => (
            <Link
              href={`/game?id=${game.id}`}
              key={game.id}
              style={{ width: "100%" }}
            >
              <Card className="relative">
                <CardHeader className="pb-2">
                  {game.name}
                  <Button className="absolute top-1/2 -translate-y-1/2 right-4">
                    <ArrowRightToLine />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <UsersRound className="mr-1 h-3 w-3" />
                      {game.minPlayer} à {game.maxPlayer}
                    </div>
                    <div className="flex items-center">
                      <CalendarCheck2 className="mr-1 h-3 w-3" />
                      {game.minAge} à {game.maxAge}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-3 flex items-center justify-center">
            <EmptyState>
              <Button className="mt-3" asChild>
                <Link href={"/storage-mode"}>Ranger un jeu dedans</Link>
              </Button>
            </EmptyState>
          </div>
        )}
      </div>
    </main>
  );
}
