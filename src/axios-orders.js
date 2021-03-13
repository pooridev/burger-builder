import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-ff829-default-rtdb.firebaseio.com/'
});

export default instance;
