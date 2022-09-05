import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

const How = (props) => {
	const router = useRouter();

	let title = 
		router.locale === "en"
			? "How it works"
			: router.locale === "es"
			? "¿Cómo funciona?"
			: router.locale === "pt"
			? "Como funciona?"
			: "";


	let subtitle = 
		router.locale === "en"
			? "Recycling in Colmena is very easy. Download the App and start registering your recyclable material. When your container arrives at the collection point it is weighed and your reward is credited to the <em>JellyCoinn</em> cryptocurrency. It benefits waste generators and collectors, while providing good quality material to recycling industries."
			: router.locale === "es"
			? "Reciclar en Colmena es muy fácil. Descargá la App y comenzá a registrar tu material reciclable. Cuando tu contenedor llega al punto de recolección se pesa y se acredita tu recompensa en la criptomoneda <em>JellyCoin</em>.<br /> Se beneficia a los generadores y recolectores de residuos, mientras se provee material de buena calidad a las industrias recicladoras. "
			: router.locale === "pt"
			? "Reciclar em Colmena é muito fácil. Faça o download do aplicativo e comece a registrar seu material. Quando seu recipiente chega ao ponto de coleta, ele é pesado e sua recompensa é creditada à moeda criptográfica <em>JellyCoin</em>. Ela beneficia os geradores e coletores de resíduos, ao mesmo tempo em que fornece material de boa qualidade às indústrias de reciclagem."
			: "";

	let imgDesktop = 
		router.locale === "en"
			? "/images/colmena/infografia-en.jpg"
			: router.locale === "es"
			? "/images/colmena/infografia.jpg"
			: router.locale === "pt"
			? "/images/colmena/infografia-pt.jpg"
			: "";

	let imgMobile = 
		router.locale === "en"
			? "/images/colmena/infografia-en2x.jpg"
			: router.locale === "es"
			? "/images/colmena/infografia2x.jpg"
			: router.locale === "pt"
			? "/images/colmena/infografia-pt2x.jpg"
			: "";

  return (
      <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>{parse(title)}</h3>
							<p>{parse(subtitle)}</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					<img className="image-pc" src={imgDesktop} />
					<img className="image-mobile" src={imgMobile} />		
				</Row>
				
			</Container>
			
		</section>
    );
}

export default How;