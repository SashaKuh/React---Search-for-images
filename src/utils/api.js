import axios from 'axios';

const MAIN_DOMEN = 'https://pixabay.com/api/'
const DEFAULT_PARAMS = {
    key: '38508904-d7c593c5c9487e629ee3cdcfc',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12
}

axios.defaults.params = DEFAULT_PARAMS;
axios.defaults.baseURL = `${MAIN_DOMEN}`;

export const getImages = async (q, page) => {
    const resp = await axios.get('', {
        params: {
            q,
            page
        }
    })
    return resp.data
}