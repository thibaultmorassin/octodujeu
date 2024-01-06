"use client";

import CreateGameDialog from "@/components/game/create-game-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useGamesQuery from "@/hooks/useGamesQuery";
import { AlertTriangle, CalendarCheck2, UsersRound } from "lucide-react";
import Link from "next/link";
import Loading from "./loading";

export default function Home() {
  const { data, isLoading, error } = useGamesQuery();

  if (isLoading || !data.length) {
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
      <CreateGameDialog />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((game) => (
          <Link
            href={`/game?id=${game.id}`}
            key={game.id}
            style={{ width: "100%" }}
          >
            <Card>
              <CardHeader className="pb-2">{game.name}</CardHeader>
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
        ))}
      </div>
    </main>
  );
}
