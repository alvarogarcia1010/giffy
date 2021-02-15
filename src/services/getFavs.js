const ENDPOINT = 'http://localhost:8000'

export default function getFavs({ jwt}) 
{
  return new Promise(function(resolve, reject) { 
    setTimeout(resolve, 500); 
  })
  .then(function() { 
      return ["PpeGK6edBWAxi", "YzU8NQXqtIKqc"]
  }); 
  
  // return fetch(`${ENDPOINT}/fav/${id}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({jwt})
  // })
  // .then(res => {
  //   if(!res.ok) throw new Error('Response is not OK')
  //   res.json()
  // })
  // .then(res => {
  //   const { favs } = res
  //   return favs
  // })
}