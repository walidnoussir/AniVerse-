import api from "../libs/axios";

export const getLibrary = async () => {
  const { data } = await api.get("/library");
  return data;
};

export const addToLibrary = async (anime) => {
  const { data } = await api.post("/library", anime);
  return data;
};

export const deleteFromLibrary = async (id) => {
  await api.delete(`/library/${id}`);
};
