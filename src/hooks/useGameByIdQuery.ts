import { DatabaseCollection, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import useSWR from "swr";

const useGameByIdQuery = (gameId: string) => {
  const { data, isLoading, error } = useSWR(
    DatabaseCollection.game,
    async () => {
      const docRef = doc(db, DatabaseCollection.game, gameId);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    },
  );

  return { data, isLoading, error };
};

export default useGameByIdQuery;
