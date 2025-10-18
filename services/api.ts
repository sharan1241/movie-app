export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:"application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}



export const fetchPopularMovies = async ({query}:{query:string})=>{
    const endpoint = 
    query?'':
    '/discover/movie?sort_by=popularity.desc'

    const response = await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.headers
    })

    if(!response.ok){
        // @ts-ignore
        throw new Error('failed to fetch movies',response.statusText)
    }

    const data = await response.json()
    return data.results
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTJiNzlmOWYyNjUxNDcxZDdiNjY4OGVlODRkYTI4ZCIsIm5iZiI6MTc2MDc1ODQwMS4yNDMsInN1YiI6IjY4ZjMwYTgxZWNhMTQzYTU3OGU0MjAyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_TK6U6w0lLiOC7j6hY1c0rAqrOuT7VQLOfMmU5TEO8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));