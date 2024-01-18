import { StorageBox } from "@/lib/storage.type";
import React from "react";
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

type Props = {
  selectedBox: StorageBox | null;
  handleClose: () => void;
};

const ScannerDrawer: React.FC<Props> = ({ selectedBox, handleClose }) => {
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
          <QrCodeScanner />
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
