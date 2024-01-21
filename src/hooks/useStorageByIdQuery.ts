import { DatabaseCollection, db, gameCollection } from "@/lib/firebase";
import { StorageBox } from "@/lib/storage.type";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import useSWR from "swr";

const useStorageByIdQuery = (storageId: string) => {
  const queryResult = useSWR(
    `${DatabaseCollection.storage}/${storageId}`,
    async () => {
      const docRef = doc(db, DatabaseCollection.storage, storageId);

      const docSnap = await getDoc(docRef);
      const storageData = docSnap.data() as Omit<StorageBox, "id">;

      const relativeGamesSnapshot = await getDocs(
        query(gameCollection, where("storage", "==", docRef)),
      );

      const relativeGamesData: any[] = [];
      relativeGamesSnapshot.forEach((doc) =>
        relativeGamesData.push({
          id: doc.id,
          ...doc.data(),
        }),
      );
      return {
        id: storageId,
        ...storageData,
        games: relativeGamesData,
      };
    },
  );

  return queryResult;
};

export default useStorageByIdQuery;
