import { DatabaseCollection, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import useSWRMutation from "swr/mutation";

type AddGameToStorageArgs = {
  gameId: string;
  storageId: string;
};

const useAddGameToStorageMutation = () => {
  const mutation = useSWRMutation(
    `${DatabaseCollection.game}/add-to-storage`,
    async (_url: string, { arg }: { arg: AddGameToStorageArgs }) => {
      try {
        const gameRef = doc(db, DatabaseCollection.game, arg.gameId);
        const storageRef = doc(db, DatabaseCollection.storage, arg.storageId);

        const docSnap = await getDoc(gameRef);
        const gameData = docSnap.data();

        return await setDoc(gameRef, {
          ...gameData,
          storage: storageRef,
        });
      } catch (error) {
        console.log(error);
      }
    },
  );

  return mutation;
};

export default useAddGameToStorageMutation;
