import { DatabaseCollection, storageCollection } from "@/lib/firebase";
import { QueryConstraint, getDocs, query } from "firebase/firestore";
import useSWR from "swr";

const useStorageQuery = (whereFilter?: QueryConstraint[]) => {
  const queryResult = useSWR(DatabaseCollection.storage, async () => {
    const querySnapshot = await getDocs(
      query(storageCollection, ...(whereFilter ? [...whereFilter] : [])),
    );
    const data: any[] = [];
    querySnapshot.forEach((doc) =>
      data.push({
        id: doc.id,
        ...doc.data(),
      }),
    );
    return data;
  });

  return queryResult;
};

export default useStorageQuery;
