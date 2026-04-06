const API_URL = 'https://free-api-live-football-data.p.rapidapi.com/football-live-all';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_FOOTBALL_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_FOOTBALL_API_HOST
  }
};

export const getLiveMatches = async () => {
  try {
    const response = await fetch(API_URL, options);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};
