import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
}

export interface Theme {
	mode: "system" | "dark" | "light";
}

export const ThemeContext = React.createContext<Theme>({
	mode: "system"
});

class ThemeProvider extends React.Component<Props> {
	state: Theme = {
		mode: "system",
	};

	render() {
		return (
			<ThemeContext.Provider value={this.state} children={this.props.children}/>
		);
	}

	componentDidUpdate(prevProps: Props, prevState: Theme) {
		document.body.classList.replace(prevState.mode, this.state.mode);
	}

	componentDidMount() {
		window.addEventListener<any>("set-theme-mode", this.setThemeState);
		document.body.classList.add(this.state.mode);
	}

	componentWillUnmount() {
		window.removeEventListener<any>("set-theme-mode", this.setThemeState);
	}

	setThemeState = (event: CustomEvent) => {
		return this.setState({
			theme: event.detail,
		});
	};

	static setThemeState = (theme: Theme) => {
		const event = new CustomEvent("set-theme-mode", {
			detail: theme,
		});

		return window.dispatchEvent(event);
	};
}

export default ThemeProvider;
