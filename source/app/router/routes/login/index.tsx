import React, {ChangeEvent, FormEvent} from "react";
import UserProvider, {UserContext} from "@context/user";
import {Redirect} from "react-router-dom";

class Component extends React.Component {
	declare context: React.ContextType<typeof UserContext>;
}

class Login extends Component {
	static contextType = UserContext;

	state = {
		username: "kminchelle",
		password: "0lelplR",

		submitted: false,
		error: "",
	};

	inputOnChange = (input: ChangeEvent<HTMLInputElement>) => {
		return this.setState({
			[input.target.name]: input.target.value,
		});
	};

	render() {
		if (this.context.isLogged) return (
			<Redirect to={"/"}/>
		);

		return (
			<div id={"login"}>
				<form onSubmit={this.login}>
					<div>
						<label htmlFor="">Username</label>
						<input type="text" id={"username"} name={"username"} placeholder={"Username"} value={this.state.username} onChange={this.inputOnChange}/>
					</div>

					<div>
						<label htmlFor="">Password</label>
						<input type="text" id={"password"} name={"password"} placeholder={"Password"} value={this.state.password} onChange={this.inputOnChange}/>
					</div>

					<button type={"submit"}>{this.state.submitted ? "Logging ..." : "Login"}</button>

					<h5 hidden={this.state.error === ""} className={"error"}>{this.state.error}</h5>
				</form>
			</div>
		);
	}

	login = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (this.state.submitted) return;

		this.setState({
			submitted: true,
		});

		const username = this.state.username;
		const password = this.state.password;

		return api.login(username, password).then((user) => {
			return UserProvider.setUser(user, true);
		}).catch((reason) => {
			const data = reason.response.data;

			this.setState({
				submitted: false,
				error: data.message,
			});
		});
	};
}

export default Login;
