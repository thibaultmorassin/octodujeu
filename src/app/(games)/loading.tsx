"use client";

import CreateGameDialog from "@/components/game/create-game-dialog";
import { SearchBar } from "@/components/game/searchbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="animate-in space-y-4">
      <h1 className="text-lg font-medium">Liste des jeux</h1>
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <SearchBar />
        <CreateGameDialog />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(5)]?.map((_, index) => (
          <Skeleton className="h-[102px]" key={index} />
        ))}
      </div>
    </main>
  );
}
