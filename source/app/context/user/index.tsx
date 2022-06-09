import React, {ReactNode} from "react";

export interface User {
	isLogged: boolean;
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
}

export const UserContext = React.createContext<User>({
	isLogged: false,
	id: 0,
	username: "",
	email: "",
	firstName: "",
	lastName: "",
	gender: "",
	image: "",
	token: "",
});

class UserProvider extends React.Component<{ children: ReactNode }> {
	state: User = {
		isLogged: false,
		id: 0,
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		gender: "",
		image: "",
		token: "",
	};

	render() {
		return (
			<UserContext.Provider value={this.state} children={this.props.children}/>
		);
	}

	componentDidMount() {
		window.addEventListener<any>("set-user-state", (event: CustomEvent) => {
			return this.setState(event.detail);
		});
	}

	static setUser = (user: Partial<User>, isLogged: boolean) => {
		const detail = Object.assign({}, user, {
			isLogged,
		});

		const event = new CustomEvent("set-user-state", {detail});

		return window.dispatchEvent(event);
	};
}

export default UserProvider;
