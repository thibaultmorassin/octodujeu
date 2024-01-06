import CreateGameDialog from "@/components/game/create-game-dialog";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="animate-in space-y-4">
      <h1 className="text-lg font-medium">Liste des jeux</h1>
      <CreateGameDialog />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(9)]?.map((_, index) => (
          <Skeleton className="h-32" key={index} />
        ))}
      </div>
    </main>
  );
}
