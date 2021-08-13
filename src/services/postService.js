import tokenService from "./tokenService";
const BASE_URL = "/api/posts";

function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

function create(post) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
}
function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

function update(post) {
  return fetch(`${BASE_URL}/${post._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
}

export default {
  getAll,
  create,
  deleteOne,
  update,
};
