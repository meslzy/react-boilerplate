import React from "react";
import ReactDOM from "react-dom/client";

import Api from "@/api";
import Config from "@/config";

import App from "@/app";

const defineGlobal = () => {
	window.config = new Config();
	window.api = new Api();
};

const renderDom = () => {
	ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
		<App/>
	);
};

defineGlobal();
renderDom();
