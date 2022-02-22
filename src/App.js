import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<Nav />
			<div className="container">
				<Switch>
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
