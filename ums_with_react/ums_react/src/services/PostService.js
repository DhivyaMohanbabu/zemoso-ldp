import http from "./http_common";

const getAll = () => {
  return http.get("/post");
};

const get = id => {
  return http.get(`/post/${id}`);
};

const create = data => {
  return http.post("/post", data);
};

const update = (id, data) => {
  return http.put(`/post/${id}`, data);
};

const remove = id => {
  return http.delete(`/post/${id}`);
};

const findByTitle = title => {
  return http.get(`/post/getByTitle?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};