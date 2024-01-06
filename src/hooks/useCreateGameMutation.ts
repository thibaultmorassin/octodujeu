import { DatabaseCollection, gameCollection } from "@/lib/firebase";
import { addDoc } from "firebase/firestore";
import useSWRMutation from "swr/mutation";

const useCreateGameMutation = (optimisticData?: any) => {
  const mutation = useSWRMutation(
    DatabaseCollection.game,
    async (_url: string, { arg }: { arg: any }) => {
      const docRef = await addDoc(gameCollection, arg);
      return { id: docRef.id, ...arg };
    },
    { optimisticData },
  );

  return mutation;
};

export default useCreateGameMutation;
