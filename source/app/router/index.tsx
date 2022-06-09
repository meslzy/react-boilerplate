import React from "react";

import {BrowserRouter, Redirect, Route} from "react-router-dom";

import SwitchRouter from "@router/helper/SwitchRouter";

import Main from "@router/routes/main";
import Login from "@router/routes/login";

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<SwitchRouter>
					<Route exact={true} path={"/"} component={Main}/>
					<Route exact={true} path={"/login/"} component={Login}/>

					<Route>
						<Redirect to={"/"}/>
					</Route>
				</SwitchRouter>
			</BrowserRouter>
		);
	}
}

export default Router;
