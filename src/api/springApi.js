
const springApi = {
    getAccountByEmail: (email) => {
        return fetch('https://movie-group8.up.railway.app/api/login/getByEmail/' + email)
            .then(response => response.json())
    },
    getAll: () => {
        return fetch('https://movie-group8.up.railway.app/api/movie/getAll')
            .then(response => response.json())
    },
    getMovieByGenre: (genre) => {
       return fetch('https://movie-group8.up.railway.app/api/movie/getMovieByGenres/' + genre)
            .then(response => response.json())
    },
    getMovieByCategory: (category) => {
        return fetch('https://movie-group8.up.railway.app/api/movie/getMovieByCategory/' + category)
            .then(response => response.json())
    },
    getDetail: (id) => {
        return fetch('https://movie-group8.up.railway.app/api/movie/getMovie/' + id)
            .then(response => response.json())
    },
    getMovieByKeyword: (keyword) => {
        return fetch('https://movie-group8.up.railway.app/api/movie/getMovieByKeyword/' + keyword)
            .then(response => response.json())
    },
    getAllCategory: () => {
        return fetch('https://movie-group8.up.railway.app/api/category/getAll')
            .then(response => response.json())
    },
    getCastByMovie: (id) =>{
        return fetch('https://movie-group8.up.railway.app/api/cast/byMovie/' + id).then(response => response.json())
    },
    getCategoryByMovie: (id) =>{
        return fetch('https://movie-group8.up.railway.app/api/category/byMovie/' + id).then(response => response.json())
    },
    getCommentsByMovie: (id) => {
        return fetch('https://movie-group8.up.railway.app/api/comment/byMovieDtoOrderByTime/' + id).then(response => response.json())
    }
    
}

export default springApi;