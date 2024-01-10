import { DatabaseCollection, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import useSWR from "swr";

const useGameByIdQuery = (gameId: string) => {
  const query = useSWR(`${DatabaseCollection.game}/${gameId}`, async () => {
    const docRef = doc(db, DatabaseCollection.game, gameId);
    const docSnap = await getDoc(docRef);
    const gameData = docSnap.data();

    if (gameData?.storage) {
      const storage = await getDoc(gameData.storage);
      const storageData = storage.data() as Object;
      return {
        ...docSnap.data(),
        storage: { id: storage.id, ...storageData },
      };
    }

    return docSnap.data();
  });

  return query;
};

export default useGameByIdQuery;
