import api from "../libs/axios";

export const getFavorites = async () => {
  const { data } = await api.get("/favorites");
  return data;
};

export const addFavorite = async (anime) => {
  const { data } = await api.post("/favorites", anime);
  return data;
};

export const deleteFavorite = async (id) => {
  await api.delete(`/favorites/${id}`);
};
