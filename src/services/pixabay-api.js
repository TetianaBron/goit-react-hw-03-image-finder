function fetchImg(query, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '19207978-b8cc5d5178f1c84e5ac39b1c7';
  const perPage = 12;
  
    return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(response => response.json());
}

const api = {
  fetchImg,
};

export default api;

// function incrementPage(page) {
//     page += 1;
//     fetchImg()
//   }

// export default incrementPage;
      
// function resetPage() {
//     page = 1;
// }
  
// export default resetPage;