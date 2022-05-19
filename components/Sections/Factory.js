import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Factory = (props) => {
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
						
							{<h3>Módulo Factory</h3>}
							<p>Colmena provee a los EcoPuntos y Centros de Reciclaje un sistema para gestionar los materiales recibidos. El módulo cuenta con:</p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> Un sistema de pesaje electrónico, automatizado y vinculado al sistema de sofware.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Un sistema de gestión de entrada de materiales con una interfaz web de muy sencillo uso.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Un sistema de pagos en <em>JellyCoin</em> a los usuarios de Colmena APP por los materiales recibidos y por el transporte realizado.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Estádisticas y métricas respecto al material recibido, configurables en rangos de fecha.</p>
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