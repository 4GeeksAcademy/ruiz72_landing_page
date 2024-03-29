import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ContenedorPrincipal from "./ContenedorPrincipal";
import Navbar from "./Navbar";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
      		<ContenedorPrincipal />
      		<Footer />
		</div>
	);
};

export default Home;
