"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStorageQuery from "@/hooks/useStorageQuery";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Loading from "./loading";

export default function StorageMode() {
  const { data, isLoading } = useStorageQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="animate-in">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <Link href={"/storage"}>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Boîtes de rangement
          </div>
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((storage) => (
          <Card key={storage.id}>
            <CardHeader>
              <CardTitle>{storage.name}</CardTitle>
              <CardDescription>
                {!storage.gameCount
                  ? "Ne contient actuellement aucun jeu."
                  : storage.gameCount > 1
                    ? `Contient actuellement ${storage.gameCount} jeux.`
                    : "Contient actuellement 1 jeu."}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4 justify-end">
              <Button variant={"link"} asChild>
                <Link href={`/storage/detail?id=${storage.id}`}>
                  Voir les jeux rangés
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
