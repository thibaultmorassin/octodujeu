import { CreateGameArguments } from "@/components/game/create-game-dialog";
import { DatabaseCollection, db, gameCollection } from "@/lib/firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";
import useSWRMutation from "swr/mutation";
import QRCode from "qrcode";

const useCreateGameMutation = (optimisticData?: any) => {
  const mutation = useSWRMutation(
    DatabaseCollection.game,
    async (_url: string, { arg }: { arg: CreateGameArguments }) => {
      try {
        const storageRef = doc(db, DatabaseCollection.storage, arg.storage);
        const gameInput = {
          ...arg,
          storage: storageRef,
          nameLowercase: arg.name.toLowerCase(),
        };

        const docRef = await addDoc(gameCollection, arg);
        const generatedQRCode = await QRCode.toDataURL(docRef.id);

        await setDoc(doc(db, DatabaseCollection.game, docRef.id), {
          ...gameInput,
          qrCode: generatedQRCode,
        });

        return {
          id: docRef.id,
          ...gameInput,
          qrCode: generatedQRCode,
        };
      } catch (error) {
        console.log(error);
      }
    },
    { optimisticData },
  );

  return mutation;
};

export default useCreateGameMutation;
