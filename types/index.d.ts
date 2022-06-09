import Config from "@/config";
import Api from "@/api";

declare global {
	let config: Config;
	let api: Api;
}

declare global {
	interface Window {
		config: Config;
		api: Api;
	}
}
