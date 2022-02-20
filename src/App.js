import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
	return (
		<div>
			<Nav />
			<About />
			<Contact />
		</div>
	);
}

export default App;
