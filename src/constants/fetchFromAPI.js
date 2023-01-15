import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'df70040db1msh78d805b45968092p1fee93jsn971e3e74e456',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
