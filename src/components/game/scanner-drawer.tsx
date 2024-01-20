import useAddGameToStorageMutation from "@/hooks/useAddGameToStorageMutation";
import { StorageBox } from "@/lib/storage.type";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import QrCodeScanner from "./qr-code-scanner";

type ScannerDrawerProps = {
  selectedBox: StorageBox | null;
  handleClose: () => void;
};

const ScannerDrawer: React.FC<ScannerDrawerProps> = ({
  selectedBox,
  handleClose,
}) => {
  const { trigger } = useAddGameToStorageMutation();

  const handleScan = async (gameId: string) => {
    if (!selectedBox?.id) {
      toast.error("Une erreur est survenue, veuillez réessayer.");
      return;
    }

    toast.promise(
      trigger({
        gameId,
        storageId: selectedBox.id,
      }),
      {
        loading: "Ajout en cours...",
        success: "Jeux correctement ajouté à la boîte !",
        error: "Une erreur est survenue, veuillez réessayer.",
      },
    );
  };

  return (
    <Drawer open={selectedBox != null} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{selectedBox?.name}</DrawerTitle>
          <DrawerDescription>
            Scannez chaque boîte avant de la ranger dans la boîte{" "}
            {selectedBox?.name}.
          </DrawerDescription>
        </DrawerHeader>
        <div className="min-h-[50svh] p-4">
          <QrCodeScanner onScan={handleScan} />
        </div>
        <DrawerFooter className="pt-2" onClick={handleClose}>
          <Button>{"J'ai terminé"}</Button>
          <Button variant="outline">Annuler</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ScannerDrawer;
