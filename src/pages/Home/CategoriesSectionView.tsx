import { useAppDispatch, useAppSelector } from "@src/store/store";
import { fetchCategories } from "@src/store/thunk/spotifyThunk";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CategoriesSectionView() {
  const navigate = useNavigate();
  const { categoriesData } = useAppSelector((state) => state.spotify);
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    try {
      const res = await dispatch(fetchCategories()).unwrap();
      console.log("🚀 ~ fetchData ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ fetchData  error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <span className="pb-2.5 text-3xl font-semibold">Categories</span>
      <div className="grid grid-cols-4 gap-10 pb-10">
        {categoriesData?.categories?.items.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => navigate("/categories/" + item.id)}
              className="bg-[#181818] w-full  grid gap-6 rounded-md p-5"
            >
              <img src={item.icons[0].url} className="w-full object-cover" />
              <div className="font-semibold text-xl">{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
