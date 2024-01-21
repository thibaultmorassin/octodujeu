import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="animate-in">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        {
          "Sélectionnez d'abord une boîte, puis scannez ensuite chacun des jeux au moment de le ranger à l'intérieur."
        }
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      {[...Array(3)]?.map((_, index) => (
        <Skeleton className="w-full md:w-[360px] h-[164px]" key={index} />
      ))}
    </main>
  );
}
