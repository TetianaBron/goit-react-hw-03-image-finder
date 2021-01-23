let page = 1;

function fetchImg(query) {
    const BASE_URL = 'https://pixabay.com/api';
    const KEY = '19207978-b8cc5d5178f1c84e5ac39b1c7';
    const perPage = 12;
    
    return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`${query} нет, введите что-то другое.`));
  });
}

const api = {
  fetchImg,
};

export default api;

function incrementPage() {
    page += 1;
  }

export default incrementPage;
      
function resetPage() {
    page = 1;
}
  
export default resetPage;