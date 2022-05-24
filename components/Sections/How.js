import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const How = (props) => {
    return (
        <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Cómo funciona?</h3>
							<p>Aplicando conceptos de economía colaborativa y mediante una APP  
recompensamos a los generadores y recolectores de residuos, a la industria recicladora, y a las instituciones que buscan compensar su Pasivo Ambiental. Esto es posible gracias a la criptomoneda <em>JellyCoin</em>.<br />
</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>

					<img className="image-pc" src="/images/colmena/infografia.jpg" />
					<img className="image-mobile" src="/images/colmena/infografia2x.jpg" />
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default How;