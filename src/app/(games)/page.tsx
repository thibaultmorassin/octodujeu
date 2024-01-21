"use client";

import CreateGameDialog from "@/components/game/create-game-dialog";
import { SearchBar } from "@/components/game/searchbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import useGamesQuery from "@/hooks/useGamesQuery";
import { endAt, orderBy, startAt } from "firebase/firestore";
import {
  AlertTriangle,
  ArrowRightToLine,
  CalendarCheck2,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";
import { Button } from "@/components/ui/button";

export default function Home() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");

  const { data, isLoading, error, mutate } = useGamesQuery(
    searchValue?.length
      ? [
          orderBy("nameLowercase"),
          startAt(searchValue),
          endAt(searchValue + "\uf8ff"),
        ]
      : undefined,
  );

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>
          Une errur est survenue, veuillez réessayer.
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <main className="animate-in space-y-4">
      <h1 className="text-lg font-medium">Liste des jeux</h1>
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <SearchBar />
        <CreateGameDialog />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.length ? (
          data?.map((game) => (
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
          <EmptyState />
        )}
      </div>
    </main>
  );
}
