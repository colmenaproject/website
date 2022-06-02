import React from 'react';
import Head from 'next/head';

// Add dynamic CSS
const addStyleSheet = (path) => {
	if (typeof window === 'object') {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;

		head.appendChild(link);
	}
}

// Layout
const Layout = (props) => {

	// Google web font
	addStyleSheet("https://fonts.googleapis.com/css?family=Mulish:200,300,400,500,700");

	// Color schema
	addStyleSheet(props.colorSchema);

	return (
		<div>
			
			<Head>

				/* Meta */
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				/* Title */
				<title>{props.pageTitle}</title>

				/* Favicon */
				<link rel="icon" href="/images/colmena/favicon.png" type="image/x-icon" />

				/* SEO */	
				<meta property="og:title" content="Colmena - Transformá tus Residuos
en Oportunidades" key="title" />
        <meta name="description" content="Reciclar en Colmena es muy fácil. Descargá la App y comenzá a registrar tu material reciclable. Cuando tu contenedor llega al punto de recolección se pesa y se acredita tu recompensa en la criptomoneda JellyCoin." />
        <meta property="og:image" content="/images/colmena/seo.jpg" />
		
			
			</Head>

			{props.children}

		</div>
	);
}

export default Layout;