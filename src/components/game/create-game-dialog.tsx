"use client";

import useCreateGameMutation from "@/hooks/useCreateGameMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PackagePlus } from "lucide-react";
import { SearchBar } from "./searchbar";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit avoir au minimum 2 caractères.",
  }),
  minAge: z.number().int().positive(),
  maxAge: z.number().int().positive(),
  minPlayer: z.number().int().positive(),
  maxPlayer: z.number().int().positive(),
  picture: z.string().optional(),
  type: z.string().optional(),
});

export type CreateGameArguments = z.infer<typeof formSchema>;

const CreateGameDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { trigger, isMutating } = useCreateGameMutation();

  const form = useForm<CreateGameArguments>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: CreateGameArguments) => {
    const response = await trigger(values);
    if (response.id) {
      setIsOpen(false);
      toast("Le jeu a bien été créé.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PackagePlus size={20} />
          Ajouter un jeu
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Ajouter un jeu</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du jeu</FormLabel>
                  <FormControl>
                    <Input placeholder="Les Aventuriers du Rail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minPlayer"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Joueurs min.</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2"
                        {...field}
                        onChange={(e) => onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxPlayer"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Joueurs max.</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10"
                        min={form.watch("minPlayer")}
                        {...field}
                        onChange={(e) => onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minAge"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Âge min.</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="18"
                        {...field}
                        onChange={(e) => onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxAge"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Âge max.</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="99"
                        min={form.watch("minAge")}
                        {...field}
                        onChange={(e) => onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
          <DialogFooter className="gap-y-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Annuler
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isMutating}>
              Ajouter le jeu
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGameDialog;
