import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const JellyCoin = (props) => {
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
							<p>Una recompensa económica a la responsabilidad ambiental. Con todas las ventajas de la tecnología Blockchain pero con un menor impacto ambiental. </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-world"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Criptomoneda basada en DPoS
</h6>
									<p>Delegated Proof of Stake (DPoS) es un protocolo blockchain respetuoso con el medio ambiente. No necesita de potentes máquinas para minería, lo que significa que su consumo energético es reducido.</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-heart"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Respaldo basado en el compromiso</h6>
									<p>El valor de la criptomoneda está respaldado por el compromiso de la comunidad de recuperadores, recolectores e industrias que participan en el ecosistema Colmena. ¡Cuánto más volumen de material consigamos recuperar mayor será el interés de todos en sumarse! 
</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Descentralización y democratización</h6>
									<p>Cualquier persona o institución puede acceder a esta nueva tecnología sin necesidad de invertir dinero. Separando correctamente los residuos y coordinando la entrega en un punto de recolección recibís criptos que el futuro podrás intercambiar por otros activos digitales.</p>
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