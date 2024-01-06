import { DatabaseCollection, gameCollection } from "@/lib/firebase";
import {
  QueryFieldFilterConstraint,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import useSWR from "swr";

const useGamesQuery = (whereFilter?: QueryFieldFilterConstraint) => {
  const { data, isLoading, error } = useSWR(
    DatabaseCollection.game,
    async () => {
      const querySnapshot = await getDocs(query(gameCollection));
      const data: any[] = [];
      querySnapshot.forEach((doc) =>
        data.push({
          id: doc.id,
          ...doc.data(),
        }),
      );
      return data;
    },
  );

  return { data, isLoading, error };
};

export default useGamesQuery;
