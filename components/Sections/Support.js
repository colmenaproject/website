import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Preguntas Frecuentes</h3>
							<p>En esta sección podrás encontrarás información sobre las cuestiones más consultadas por la comunidad:</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
								¿Cómo nace el proyecto Colmena? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									El proyecto es ideado  por un grupo de jóvenes de 
									Campo Viera quienes preocupados por el ambiente y 
									la economía, dan nacimiento al proyecto Colmena y 
									a la Fundación para el Desarrollo Colaborativo. 
									Posteriormente se suman otros  profesionales de la 
									Provincia y del País.</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									¿Cómo puedo participar? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Todos los ciudadanos que quieran participar pueden 
									hacerlo separando y clasificando sus botellas 
									plásticas de gaseosa y agua mineral e informando 
									en una aplicación de celular. También lo pueden hacer 
									transportando los residuos recuperados hasta un lugar 
									determinado de procesamiento, que en el caso de la 
									prueba en Campo Viera al Centro de Experimentación y 
									Reciclaje.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									¿Dónde llevo las bolsas de residuos recuperados?        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Una vez recuperado y registrado los residuos, 
									pueden transportarlos hasta el Centro de Reciclaje o 
									punto verde más próximo a su domicilio. 
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
								¿Cómo se retribuye mí participación?		        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Tanto a los separadores como a los recolectores se les retribuirá con la moneda virtual denominada Jellycoin. Por cada bolsa que contenga 10 botellas se otorgará:
3 Jellycoin (equivalentes a 300 grs) a quien recuperó el material.
10 JellyCoin por Km a quién transporte ese residuo hasta el centro de reciclaje.

									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
								¿Cómo puedo usar la moneda virtual Jellycoin?		        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									En la prueba piloto la moneda virtual puede ser utilizada exclusivamente como pago de tasas municipales (Pago de servicios). En posteriores etapas, y en la medida que la moneda empiece a circular, podrá ser usada en comercios locales.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">Alguna otra pregunta? <a href="mailto:info@colmenaproject.io"><strong>Hacela aquí</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;