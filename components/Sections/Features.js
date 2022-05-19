import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Colmena APP</h3>
							<p> </p>
						</div>
						
					</Col>
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
										<h4>Descubrí otros usuarios</h4>
										<p>Conocé a los usuarios de Colmena cercanos a tu domicilio para coordinar el transporte de los materiales recuperados.</p>
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
										<h4>Registrá tus residuos</h4>
										<p>Llevá un control detallado de los residuos recuperados y coordiná su entrega con un Centro de Reciclado.</p>
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
										<h4>Obtené Beneficios</h4>
										<p>Tu trabajo de recuperación recibe una compensación económica mediante la criptomoneda JellyCoin.</p>
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
										<h4>Reducí tu huella de Carbono</h4>
										<p>Con la App podés calcular y tener un seguimiento de la reducción en emisiones de Co2 equivalente a tu material recuperado.</p>
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