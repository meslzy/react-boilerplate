import React from "react";
import {Link} from "react-router-dom";

import {UserContext, User} from "@context/user";

class Main extends React.Component {
	state = {};

	consumer = (user: User) => {
		if (user.isLogged) return (
			<div id={"main"}>
				<h4>welcome {user.username}</h4>
			</div>
		);

		return (
			<div id={"main"}>
				<Link to={"/login/"}>Login</Link>
			</div>
		);
	};

	render() {
		return (
			<UserContext.Consumer children={this.consumer}/>
		);
	}
}

export default Main;
