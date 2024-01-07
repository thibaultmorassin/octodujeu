import { DatabaseCollection, gameCollection } from "@/lib/firebase";
import { QueryConstraint, getDocs, query } from "firebase/firestore";
import useSWR from "swr";

const useGamesQuery = (whereFilter?: QueryConstraint[]) => {
  const queryResult = useSWR(DatabaseCollection.game, async () => {
    const querySnapshot = await getDocs(
      query(gameCollection, ...(whereFilter ? [...whereFilter] : [])),
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

export default useGamesQuery;
