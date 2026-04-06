// This URL fetches all matches scheduled for today
const API_URL = 'https://api.football-data.org/v4/matches';

export const getLiveMatches = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        // This is the "X-Auth-Token" header mentioned in your email
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY,
      },
    });

    if (!response.ok) {
      // If you get a 429 error, it means you're clicking refresh too fast!
      // The free tier allows 10 calls per minute.
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Football-Data.org returns an object with a "matches" array inside
    // We return data.matches so your Home.jsx can map through it easily
    return data.matches || []; 
    
  } catch (error) {
    console.error("MatchFlash Fetch Error:", error);
    return []; // Return empty array so the app doesn't crash
  }
};
