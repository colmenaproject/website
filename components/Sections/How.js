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
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo justo. Nullam dictum felis eu pede mollis pretium.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>

					<img src="/images/colmena/infographic.jpg" />
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default How;