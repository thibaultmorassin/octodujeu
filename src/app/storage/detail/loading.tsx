import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRightIcon } from "lucide-react";

export default function Loading() {
  return (
    <main className="animate-in space-y-4">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Boîtes de rangement
        </div>
        <ChevronRightIcon className="h-4 w-4" />
        <Skeleton className="w-32 h-4" />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)]?.map((_, index) => (
          <Skeleton className="w-full h-[102px]" key={index} />
        ))}
      </div>
    </main>
  );
}
