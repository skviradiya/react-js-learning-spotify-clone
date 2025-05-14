import { useAppDispatch } from "@src/store/store";
import { fetchCategoriesDetails } from "@src/store/thunk/spotifyThunk";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function ViewCategories() {
  const dispatch = useAppDispatch();
  const { catId } = useParams();
  const fetchData = async () => {
    try {
      const res = await dispatch(
        fetchCategoriesDetails({ id: catId })
      ).unwrap();
      console.log("🚀 ~ fetchData ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{catId}</div>;
}
