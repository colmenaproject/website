import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

const Factory = (props) => {

	const router = useRouter();

	let title = 
		router.locale === "en"
			? "Factury Module"
			: router.locale === "es"
			? "Módulo Factory"
			: router.locale === "pt"
			? "Módulo Factory"
			: "";

	let subtitle = 
		router.locale === "en"
			? "Colmena provides EcoPuntos and Recycling Centers with a system to manage the materials received. The module includes:"
			: router.locale === "es"
			? "Colmena provee a los EcoPuntos y Centros de Reciclaje un sistema para gestionar los materiales recibidos. El módulo cuenta con:"
			: router.locale === "pt"
			? "Colmena fornece aos EcoPuntos e Centros de Reciclagem um sistema para gerenciar os materiais recebidos. O módulo inclui:"
			: "";

	let item_1 = 
		router.locale === "en"
			? "An electronic weighing system, automated and linked to the software system."
			: router.locale === "es"
			? "Un sistema de pesaje electrónico, automatizado y vinculado al sistema de sofware."
			: router.locale === "pt"
			? "Um sistema de pesagem eletrônico, automatizado e ligado ao sistema de software."
			: "";

	let item_2 = 
		router.locale === "en"
			? "An incoming materials management system with a user-friendly web interface."
			: router.locale === "es"
			? "Un sistema de gestión de entrada de materiales con una interfaz web de muy sencillo uso."
			: router.locale === "pt"
			? "Um sistema de gerenciamento de materiais recebidos com uma interface web de fácil utilização."
			: "";

	let item_3 = 
		router.locale === "en"
			? "A payment system in JellyCoin to Colmena APP users for the materials received and for the transport performed."
			: router.locale === "es"
			? "Un sistema de pagos en <em>JellyCoin</em> a los usuarios de Colmena APP por los materiales recibidos y por el transporte realizado."
			: router.locale === "pt"
			? "Um sistema de pagamento em <em>JellyCoin</em> aos usuários do APP da Colmena pelos materiais recebidos e pelo transporte realizado."
			: "";

	let item_4 = 
		router.locale === "en"
			? "Statistics and metrics regarding the material received, configurable in date ranges."
			: router.locale === "es"
			? "Un sistema de pagos en <em>JellyCoin</em> a los usuarios de Colmena APP por los materiales recibidos y por el transporte realizado."
			: router.locale === "pt"
			? "Estatísticas e métricas relativas ao material recebido, configuráveis em faixas de datas."
			: "";

    return (
        <section id="factory" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
						
							<h3>{title}</h3>
							<p>{subtitle}</p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> {parse(item_1)}</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> {parse(item_2)}</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> {parse(item_3)}</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> {parse(item_4)}</p>
							</li>

						</ul>

						{/* <!-- Button --> 
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Ver más</a>
						</p>*/}
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/colmena/factory.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Factory;