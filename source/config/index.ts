class Config {
	mode: "development" | "production";
	api: string;

	constructor() {
		if (import.meta.env.DEV) this.mode = "development";
		if (import.meta.env.PROD) this.mode = "production";

		if (this.mode === "development") {
			this.api = "https://dummyjson.com/";
		} else {
			this.api = "https://dummyjson.com/";
		}
	}
}

export default Config;
