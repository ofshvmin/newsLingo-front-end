const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/words/wordLookup`

async function getTranslationFromAPI(query) {
  try {
    const res = await fetch(`${BASE_URL}?query=${query}`)
    return res.json()
  } catch (err) {
    console.log(err);
  }
}

export {
  getTranslationFromAPI,
}