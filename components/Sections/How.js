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
							<p>Reciclar en Colmena es muy fácil. 
								Descargá la App y comenzá a registrar 
								tu material reciclable. 
								Cuando tu contenedor llega al punto de recolección se pesa y 
								se acredita tu recompensa en la criptomoneda  
 <em>JellyCoin</em>.<br /> Se beneficia a los generadores y recolectores de residuos, mientras se provee de material de buena calidad a las industrias recicladoras. 

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