import { FolderPlus, Printer, PrinterIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Content = () => {
  const options = [
    {
      icon: <Printer />,
      label: "Celui-ci uniquement",
      value: "only",
    },
    {
      icon: <FolderPlus />,
      label: "Sélectionner d'autres",
      value: "more",
    },
  ];

  return (
    <RadioGroup defaultValue="only" className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <div key={option.label}>
          <RadioGroupItem
            value={option.value}
            id={option.value}
            className="peer sr-only"
            aria-label={option.label}
          />
          <Label
            htmlFor={option.value}
            className="flex gap-4 flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary"
          >
            {option.icon}
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
export function PrintCodeDrawer() {
  const [open, setOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const title = "Mode impression";
  const description = "Sélectionnez les codes à imprimer.";

  const triggerButton = (
    <Button className="w-full" disabled>
      <PrinterIcon size={18} />
      Imprimer le QR Code
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{triggerButton}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <Content />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <Content />
      </DrawerContent>
    </Drawer>
  );
}
