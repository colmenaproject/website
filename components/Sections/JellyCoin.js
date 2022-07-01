import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

const JellyCoin = (props) => {

	const router = useRouter();

	let subtitle = 
		router.locale === "en"
			? "An economic reward for environmental responsibility. All the advantages of Blockchain technology with a lower environmental impact."
			: router.locale === "es"
			? "Una recompensa económica a la responsabilidad ambiental. Con todas las ventajas de la tecnología Blockchain pero con un menor impacto ambiental."
			: router.locale === "pt"
			? "Uma recompensa econômica pela responsabilidade ambiental. Todas as vantagens da tecnologia Blockchain com um menor impacto ambiental."
			: "";

	let title_1 = 
		router.locale === "en"
			? "Cryptocurrency based on DPoS"
			: router.locale === "es"
			? "Criptomoneda basada en DPoS"
			: router.locale === "pt"
			? "Criptomoeda baseada em DPoS"
			: "";

	let subtitle_1 = 
		router.locale === "en"
			? "Delegated Proof of Stake (DPoS) is an environmentally friendly blockchain protocol. It does not require powerful mining machines, which means that its energy consumption is reduced."
			: router.locale === "es"
			? "Delegated Proof of Stake (DPoS) es un protocolo blockchain respetuoso con el medio ambiente. No necesita de potentes máquinas para minería, lo que significa que su consumo energético es reducido."
			: router.locale === "pt"
			? "O Delegated Proof of Stake (DPoS) é um protocolo de cadeia de blocos ecologicamente correto. Ele não requer máquinas de mineração potentes, o que significa que seu consumo de energia é reduzido."
			: "";

	let title_2 = 
		router.locale === "en"
			? "Commitment-based backing"
			: router.locale === "es"
			? "Respaldo basado en el compromiso"
			: router.locale === "pt"
			? "Respaldo baseado no compromisso"
			: "";

	let subtitle_2 = 
		router.locale === "en"
			? "The value of the cryptocurrency is backed by the commitment of the community of reclaimers, collectors and industries that participate in the Hive ecosystem. The more volume of material we manage to reclaim the greater the interest of everyone to join in!"
			: router.locale === "es"
			? "El valor de la criptomoneda está respaldado por el compromiso de la comunidad de recuperadores, recolectores e industrias que participan en el ecosistema Colmena. ¡Cuánto más volumen de material consigamos recuperar mayor será el interés de todos en sumarse!"
			: router.locale === "pt"
			? "O valor da criptomoeda é apoiado pelo compromisso da comunidade de recuperadores, coletores e indústrias que participam do ecossistema Colmena. Quanto mais volume de material conseguirmos recuperar, maior será o interesse de todos em participar!"
			: "";
			
	let title_3 = 
	router.locale === "en"
		? "Decentralization and democratization"
		: router.locale === "es"
		? "Descentralización y democratización"
		: router.locale === "pt"
		? "Descentralização e democratização"
		: "";

	let subtitle_3 = 
		router.locale === "en"
			? "Any person or institution can access this new technology without having to invest money. By correctly separating the waste and coordinating the delivery at a collection point you receive cryptos that in the future you will be able to exchange for other digital assets."
			: router.locale === "es"
			? "Cualquier persona o institución puede acceder a esta nueva tecnología sin necesidad de invertir dinero. Separando correctamente los residuos y coordinando la entrega en un punto de recolección recibís criptos que el futuro podrás intercambiar por otros activos digitales."
			: router.locale === "pt"
			? "Qualquer pessoa ou instituição pode ter acesso a esta nova tecnologia sem ter que investir dinheiro. Ao separar corretamente os resíduos e coordenar a entrega em um ponto de coleta você recebe criptos que no futuro poderá trocar por outros ativos digitais."
			: "";

    return (
        <section id="jelly" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Track time --> */}
				<div className="empty-100"></div>
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							{/*<h3>Colmena Factory</h3>*/}
							<img className="img-jelly" src="/images/colmena/jellycoin.png" />
							<p>{subtitle}</p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-world"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">{title_1}</h6>
									<p>{subtitle_1}</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-heart"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">{title_2}</h6>
									<p>{subtitle_2}</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">{title_3}</h6>
									<p>{subtitle_3}</p>
								</div>

							</div>

						</div>
							
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/colmena/jellyapp.png" alt="" />
					</Col>
					
				</Row>
					
			</Container>
			
		</section>
    );
}

export default JellyCoin;