import React, { Component } from "react";
import {Home} from './Home';

class App extends Component {
	render() {
		return (
			<div>
				<Home init={75}/>
			</div>
		);
	}
}

export default App;
