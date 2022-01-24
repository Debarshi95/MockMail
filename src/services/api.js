import generateClient from '../utils/generateClient';

const mailApi = generateClient(process.env.REACT_APP_BASE_URL);

export const getMails = () => mailApi.get('/');
