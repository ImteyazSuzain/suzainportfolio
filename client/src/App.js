import "./App.css";
import 'antd/dist/antd.min.css';
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
import About from "./PortfolioContainer/AboutMe/About";
import { Routes, Route } from "react-router-dom";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<div className="App">
		
			<ToastContainer />
			<Routes>
				<Route exact path="/" element={[<Home />, <About />, <Resume />]}></Route>
				<Route exact path="/contact" element={<ContactMe />} />
	</Routes>
		</div>
	);
}

export default App;
