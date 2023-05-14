// services
import * as tokenService from './tokenService'

//const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/articles`

const BASE_URL = `https://www.dictionaryapi.com/api/v3/references/spanish/json/`

const API_KEY = `?key=d1324e2a-6635-4b3a-8ad3-ecb3042b3277`

async function getTranslationFromAPI(query) {
  try {
    const res = await fetch(`${BASE_URL}/${query}${API_KEY}`)
    return res.json()
  } catch (err) {
    console.log(err);
  }
}

export {
  getTranslationFromAPI,
}