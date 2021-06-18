import axios from 'axios';

// base url to make requests to the movie database
// axios.get 하면 자동으로 이 const 변수가 생성되고, baseURL이 생성됨
const instance = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

export default instance;
