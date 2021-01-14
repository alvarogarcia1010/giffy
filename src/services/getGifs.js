import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse

  if(Array.isArray(data))
  {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const {url} =  images.downsized_medium
      return {title, id, url}
    })

    return gifs
  }

  return []
}

export default function getGifs({keyword = 'morty', rating ,limit = 5, page=0} = {}) 
{
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=es`;
  
  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToGifs)
}