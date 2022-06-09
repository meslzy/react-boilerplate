import React from "react";

import Router from "@app/router";
import Context from "@app/context";

import "@styles/index.scss";

class App extends React.Component {
	render() {
		return (
			<Context>
				<Router/>
			</Context>
		);
	}
}

export default App;
