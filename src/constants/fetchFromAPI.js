import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '2531a95ba3mshb53ca8f8828d62bp1c1608jsn5f7e4174bed0',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
