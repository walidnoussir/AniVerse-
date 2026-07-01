import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { getAnimeById } from "../features/animes/animeSlice";
import { useParams } from "react-router-dom";

function AnimeDetailsPage() {
  const { isLoading, error, selectedAnime } = useSelector(
    (state) => state.anime,
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAnimeById(id));
  }, []);

  console.log(isLoading);
  console.log(selectedAnime);
  console.log(error);

  if (isLoading) return <Spinner />;
  return <div>Details</div>;
}

export default AnimeDetailsPage;
