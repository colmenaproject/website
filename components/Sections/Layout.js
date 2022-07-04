import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

	const router = useRouter();

	let og_title = 
		router.locale === "en"
			? "Colmena - Transform your Waste into Opportunities"
			: router.locale === "es"
			? "Colmena - Transformá tus Residuos en Oportunidades"
			: router.locale === "pt"
			? "Colmena - Transforme seus Resíduos em Oportunidades"
			: "";
	
	let og_description = 
		router.locale === "en"
			? "Recycling in Colmena is very easy. Download the App and start registering your recyclable material. When your container arrives at the collection point it is weighed and your reward is credited to theJellyCoin cryptocurrency."
			: router.locale === "es"
			? "Reciclar en Colmena es muy fácil. Descargá la App y comenzá a registrar tu material reciclable. Cuando tu contenedor llega al punto de recolección se pesa y se acredita tu recompensa en la criptomoneda JellyCoin."
			: router.locale === "pt"
			? "Reciclar em Colmena é muito fácil. Faça o download do aplicativo e comece a registrar seu material reciclável. Quando seu recipiente chega ao ponto de coleta, ele é pesado e sua recompensa é creditada à moeda criptográfica JellyCoin."
			: "";

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
				<meta property="og:title" content={og_title} key="title" />
        <meta name="description" content={og_description} />
        <meta property="og:image" content="/images/colmena/seo.jpg" />
		
			
			</Head>

			{props.children}

		</div>
	);
}

export default Layout;