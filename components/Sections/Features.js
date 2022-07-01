import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Features = (props) => {

	const router = useRouter();

	let title = 
		router.locale === "en"
			? "Colmena APP"
			: router.locale === "es"
			? "Colmena APP"
			: router.locale === "pt"
			? "Aplicativo Colmena"
			: "";

	let title_1 = 
		router.locale === "en"
			? "Discover other users"
			: router.locale === "es"
			? "Descubrí otros usuarios"
			: router.locale === "pt"
			? "Descubra outros usuários"
			: "";
	
	let subtitle_1 = 
		router.locale === "en"
			? "Get to know the Colmena users near you to coordinate the transport of the recovered materials."
			: router.locale === "es"
			? "Conocé a los usuarios de Colmena cercanos a tu domicilio para coordinar el transporte de los materiales recuperados."
			: router.locale === "pt"
			? "Conheça os usuários da Colmena perto de você para coordenar o transporte dos materiais recuperados."
			: "";

	let title_2 = 
		router.locale === "en"
			? "Register your waste"
			: router.locale === "es"
			? "Registrá tus residuos"
			: router.locale === "pt"
			? "Registre seus resíduos"
			: "";
		
	let subtitle_2 = 
		router.locale === "en"
			? "Keep a detailed control of your recovered waste and coordinate its delivery to a Recycling Center."
			: router.locale === "es"
			? "Llevá un control detallado de los residuos recuperados y coordiná su entrega con un Centro de Reciclado."
			: router.locale === "pt"
			? "Mantenha um controle detalhado de seus resíduos recuperados e coordene sua entrega a um Centro de Reciclagem."
			: "";

	let title_3 = 
		router.locale === "en"
			? "Get Benefits"
			: router.locale === "es"
			? "Obtené Beneficios"
			: router.locale === "pt"
			? "Obtenha benefícios"
			: "";
			
	let subtitle_3 = 
		router.locale === "en"
			? "Your recovery work receives an economic compensation through the JellyCoin cryptocurrency."
			: router.locale === "es"
			? "Tu trabajo de recuperación recibe una compensación económica mediante la criptomoneda JellyCoin."
			: router.locale === "pt"
			? "Seu trabalho de recuperação recebe uma compensação econômica através da criptomoeda JellyCoin."
			: "";

	let title_4 = 
		router.locale === "en"
			? "Reduce your carbon footprint"
			: router.locale === "es"
			? "Reducí tu huella de Carbono"
			: router.locale === "pt"
			? "Reduza sua pegada de carbono"
			: "";
				
	let subtitle_4 = 
		router.locale === "en"
			? "With the App you can calculate and track the reduction in Co2 emissions equivalent to your recovered material."
			: router.locale === "es"
			? "Con la App podés calcular y tener un seguimiento de la reducción en emisiones de Co2 equivalente a tu material recuperado."
			: router.locale === "pt"
			? "Com o aplicativo você pode calcular e acompanhar a redução das emissões de Co2 equivalente ao seu material recuperado."
			: "";


    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>{title}</h3>
							<p> </p>
						</div>
						
					</Col>

					<div className="features-thumb text-center image-mobile">
							<img src="/images/colmena/awesome-features.png" alt="" />
							<div className="empty-100"></div>
					</div>
				</Row>

				
			
				<Row className="d-flex align-items-center">
					
					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 				
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-share"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>{title_1}</h4>
										<p>{subtitle_1}</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-trashcan-full"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>{title_2}</h4>
										<p>{subtitle_2}</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block"> 
						<div className="features-thumb text-center">
							<img src="/images/colmena/awesome-features.png" alt="" />
						</div>
					</Col>
					
					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4"> 
						
						<ul className="features-item">
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-star"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
									  <h4>{title_3}</h4>
										<p>{subtitle_3}</p>
									</div>
									
								</div>
							</li>
							
							{/* <!-- Feature box --> */}
							<li> 
								<div className="feature-box d-flex"> 
									
									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-cloud"></div>
									</div>
									
									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>{title_4}</h4>
										<p>{subtitle_4}</p>
									</div>
									
								</div>
							</li>
							
						</ul>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Features;