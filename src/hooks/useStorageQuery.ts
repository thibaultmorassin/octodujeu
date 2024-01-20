import {
  DatabaseCollection,
  gameCollection,
  storageCollection,
} from "@/lib/firebase";
import {
  QueryConstraint,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import useSWR from "swr";
import { StorageBox } from "@/lib/storage.type";

const useStorageQuery = (whereFilter?: QueryConstraint[]) => {
  const queryResult = useSWR(DatabaseCollection.storage, async () => {
    const querySnapshot = await getDocs(
      query(storageCollection, ...(whereFilter ? [...whereFilter] : [])),
    );

    const data: any[] = [];
    for (const doc of querySnapshot.docs) {
      const q = query(gameCollection, where("storage", "==", doc.ref));
      const snapshot = await getCountFromServer(q);

      data.push({
        id: doc.id,
        gameCount: snapshot.data().count,
        ...doc.data(),
      });
    }
    return data as StorageBox[];
  });

  return queryResult;
};

export default useStorageQuery;
