import React, {ReactNode} from "react";

import ThemeProvider from "@context/theme";
import UserProvider from "@context/user";

type Props = {
	children: ReactNode
}

class Context extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				<UserProvider>
					<ThemeProvider>
						{this.props.children}
					</ThemeProvider>
				</UserProvider>
			</React.Fragment>
		);
	}
}

export default Context;
