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
								¿Qué es Colmena?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Es una plataforma basada en la tecnología blockchain 
									que ayudará a establecer una conexión directa entre 
									los generadores de material reciclable , los recolectores 
									y la industria recicladora. Colmena busca transformar la 
									manera de gestionar los residuos reciclables, proponiendo 
									una alternativa de gestión colaborativa, digital y 
									descentralizada que permite a los hogares, empresas e 
									instituciones separar de sus residuos los materiales 
									solicitados por las industrias, registrarlos en la plataforma 
									y transportarlos hasta un punto determinado, con la opción de 
									coordinar con un tercero el retiro puerta a puerta.  
									Para lograr esta transformación Colmena propone un incentivo 
									económico que movilice a separar y transportar los materiales 
									de manera colaborativa: las criptomonedas JellyCoin (JYC).
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									¿Cómo puedo participar? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									Hay diferentes formas de participar en Colmena. 
									Las personas físicas, empresas, comercios o 
									instituciones que generan material reciclable y 
									los separan correctamente en origen pueden participar 
									en Colmena como <strong>Usuarios Generadores</strong>. Las personas 
									físicas dispuestas a trasladar material reciclable 
									desde el punto de generación hasta el punto de 
									recolección, pueden participar en Colmena como 
									<strong>Usuarios Recolectores</strong>. 
									Las industrias que demandan material reciclable para 
									procesar, empresas que desean gestionar la logística 
									inversa de sus envases, empresas que desean encarar 
									acciones de responsabilidad social o gobiernos que 
									desean optimizar su sistema de gestión diferenciada 
									pueden participar en Colmena como <strong>Usuarios Factory</strong>.

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
									Una vez recuperados y registrados los materiales, 
									los usuarios pueden transportarlos hasta el <strong>Ecopunto</strong> 
									más próximo a su domicilio. Durante la prueba de 
									implementación en la Ciudad de Posadas (Misiones), 
									los usuarios deben llevarlo al Ecopunto Fijo del barrio 
									Itaembé Guazú ubicado en la calle Las Violetas.<br />
									Durante la prueba piloto la Plataforma Colmena estará configurada para recibir cinco tipos de materiales reciclables: papel, cartón, vidrio, plástico y aluminio a los cuales se asignarán los siguientes valores en JYC: 
<ul>
<li>papel, cartón y vidrio: CINCO (5) JYC por kilo.</li> 
<li>plástico: DIEZ (10) JYC por kilo.</li>
<li>aluminio: VEINTE (20) JYC por kilo.</li>
<li>transporte: DIEZ (10) JYC por Km recorrido.</li>
</ul>

									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
								¿Qué es JellyCoin (JYC) y para qué sirve?	        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									JellyCoin (JYC) es una moneda digital creada para funcionar como medio de intercambio y reserva de valor dentro del ecosistema Colmena. 
									Técnicamente es un token no minable desarrollado sobre la blockchain de EOSio.<br />
									Durante la prueba piloto JYC tendrá paridad con la moneda de curso legal en Argentina <strong>1JYC = 1$AR</strong>. Posteriormente su valor fluctúa según 
									la demanda de tokens de las industrias y la oferta acumulada por las familias, comercios e instituciones como resultado de su actividad de separación y transporte de material reciclable.<br />
									Durante la prueba piloto los JYC son intercambiables por productos elaborados por el Centro Verde Municipal de la ciudad de Posadas. Las redes sociales de Colmena serán el canal 
									para anunciar los valores de intercambio de productos así como los nuevos comercios o instituciones que acepten JYC como medio de pago. 


									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
								¿Por qué Blockchain?	        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									El uso de la tecnología blockchain garantiza la seguridad y transparencia de las transacciones financieras entre los usuarios de Colmena. El registro de los datos de todas las transferencias de tokens de JellyCoin de una cuenta a otra, con el registro obligatorio y automático del hash en la Blockchain permite la escalabilidad del ecosistema. Además se preserva la confidencialidad de los datos ya que el registro del flujo de fondos está abierto al público pero la información privada del registro es inmutable y anónima. Colmena está basada en la blockchain de EOSio,  la más adecuada para sus necesidades en velocidad de transacción y costos de fee.
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