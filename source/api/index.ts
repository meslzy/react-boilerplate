import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from "axios";


namespace Response {
	export interface User {
		"id": number;
		"username": string;
		"email": string;
		"firstName": string;
		"lastName": string;
		"gender": string;
		"image": string;
		"token": string;
	}
}

class Api {
	client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: config.api,
		});
	}

	login = (username: string, password: string): Promise<Response.User> => {
		const config: AxiosRequestConfig = {
			headers: {
				"Content-Type": "application/json"
			},
		};

		const data = {
			"username": username,
			"password": password
		};

		return this.client.post<Response.User>("auth/login", data, config).then((response: AxiosResponse) => {
			return response.data;
		});
	};
}

export default Api;
