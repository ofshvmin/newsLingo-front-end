import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/words`

async function getTranslationFromAPI(query) {
  try {
    const res = await fetch(`${BASE_URL}/wordLookup?query=${query}`)
    return res.json()
  } catch (err) {
    console.log(err);
  }
}

async function createWord(translationCardFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(translationCardFormData)
          })
      return res.json()
  } catch(err) {
    console.log(err)
  }
}

async function indexDictionary() {
  try {
    const profileId = tokenService.getUserFromToken().profile
    console.log(profileId);
    const res = await fetch(`${BASE_URL}/${profileId}/dictionary`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteWord(wordId) {
  try {
    const res = await fetch(`${BASE_URL}/${wordId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
// template
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
  getTranslationFromAPI,
  createWord,
  indexDictionary,
  deleteWord
}