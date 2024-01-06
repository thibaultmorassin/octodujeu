import { CreateGameArguments } from "@/components/game/create-game-dialog";
import { DatabaseCollection, gameCollection } from "@/lib/firebase";
import { addDoc } from "firebase/firestore";
import useSWRMutation from "swr/mutation";

const useCreateGameMutation = (optimisticData?: any) => {
  const mutation = useSWRMutation(
    DatabaseCollection.game,
    async (_url: string, { arg }: { arg: CreateGameArguments }) => {
      const docRef = await addDoc(gameCollection, arg);
      return { id: docRef.id, ...arg, nameLowercase: arg.name.toLowerCase() };
    },
    { optimisticData },
  );

  return mutation;
};

export default useCreateGameMutation;
