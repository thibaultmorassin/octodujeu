"use client";

import ScannerDrawer from "@/components/game/scanner-drawer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStorageQuery from "@/hooks/useStorageQuery";
import { StorageBox } from "@/lib/storage.type";
import { ArchiveRestore } from "lucide-react";
import { useState } from "react";
import Loading from "./loading";

export default function StorageMode() {
  const { data, isLoading, mutate } = useStorageQuery();
  const [selectedBoxId, setSelectedBoxId] = useState<StorageBox | null>(null);

  const handleDrawerClose = () => {
    mutate();
    setSelectedBoxId(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="animate-in">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        {
          "Sélectionnez d'abord une boîte, puis scannez ensuite chacun des jeux au moment de le ranger à l'intérieur."
        }
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
              <Button onClick={() => setSelectedBoxId(storage)}>
                <ArchiveRestore size={18} />
                Commencer le rangement
              </Button>
            </CardFooter>
          </Card>
        ))}
        <ScannerDrawer
          selectedBox={selectedBoxId}
          handleClose={handleDrawerClose}
        />
      </div>
    </main>
  );
}
