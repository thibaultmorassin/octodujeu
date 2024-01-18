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
import { ArchiveRestore } from "lucide-react";
import Loading from "./loading";

export default function StorageMode() {
  const { data, isLoading } = useStorageQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
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
            <Button>
              <ArchiveRestore size={18} />
              Commencer le rangement
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
