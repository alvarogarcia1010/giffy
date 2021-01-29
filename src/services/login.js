const ENDPOINT = 'http://localhost:8000'

export default function login({ username, password }) 
{
  setTimeout(() => {
    return `jwtquemado-${username}`
  }, 300);
  
  // return fetch(`${ENDPOINT}/login`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({username, password})
  // })
  // .then(res => {
  //   if(!res.ok) throw new Error('Response is not OK')
  //   res.json()
  // })
  // .then(res => {
  //   const { jwt } = res
  //   return jwt
  // })
}