const KEY = "key=20827583-1f7c3553a3c0826f0532a84e0";
const GENERAL_LINK = "https://pixabay.com/api/";
function imagesFetch(nameImage, page) {
  return fetch(
    `${GENERAL_LINK}?${KEY}&q=${nameImage}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error("Картинки с таким именем отсутсвуют"));
  });
}
const api = {
  imagesFetch,
};

export default api;
