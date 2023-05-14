// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/articles`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show (articleId) {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



// async function show() {
//   try {
//     const res = await fetch(BASE_URL, {
//       headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
//     })
//     return res.json()
//   } catch (error) {
//     console.log(error)
//   }
// }


export {
  index,
  show,
}