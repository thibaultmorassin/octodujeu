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
        const docRef = await addDoc(gameCollection, arg);
        const generatedQRCode = await QRCode.toDataURL(docRef.id);
        await setDoc(doc(db, DatabaseCollection.game, docRef.id), {
          ...arg,
          qrCode: generatedQRCode,
        });

        return {
          id: docRef.id,
          ...arg,
          nameLowercase: arg.name.toLowerCase(),
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
