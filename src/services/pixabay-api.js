function fetchImg(query, page, perPage) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '19207978-b8cc5d5178f1c84e5ac39b1c7';
  
    return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    .then(response => response.json())
}

const api = {
  fetchImg,
};

export default api;