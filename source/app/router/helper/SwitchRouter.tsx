import React from "react";
import TopBarProgress, {TopBarConfig} from "react-topbar-progress-indicator";
import {Switch, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

interface Props extends RouteComponentProps {
	children: React.ReactNode;
}

class SwitchRouter extends React.Component<Props> {
	config: TopBarConfig = {
		shadowColor: "#111111",
		barColors: {
			"0.0": "#fdcb24",
			"0.25": "#46c9ff",
			"0.50": "#877bfe",
			"0.75": "#b73afe",
			"1.0": "#fdcb24"
		},
		barThickness: 4,
		shadowBlur: 0,
	};

	state = {
		showTopBarProgress: false,
		pathname: "",
	};

	renderBarProgress = () => {
		if (this.state.showTopBarProgress) return (
			<TopBarProgress/>
		);

		return null;
	};

	renderSwitch = () => {
		return (
			<Switch>{this.props.children}</Switch>
		);
	};

	render() {
		return (
			<React.Fragment>
				<this.renderBarProgress/>
				<this.renderSwitch/>
			</React.Fragment>
		);
	}

	componentDidUpdate(prevProps: any, prevState: any) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.setState({
				showTopBarProgress: true,
				pathname: this.props.location.pathname === this.state.pathname ? "" : this.props.location.pathname,
			});
		}

		if (prevState.pathname !== this.state.pathname) {
			this.setState({
				showTopBarProgress: false,
			});
		}
	}

	componentDidMount() {
		TopBarProgress.config(this.config);

		this.setState({
			pathname: this.props.location.pathname,
			showTopBarProgress: true,
		});
	}
}

export default withRouter(SwitchRouter);
