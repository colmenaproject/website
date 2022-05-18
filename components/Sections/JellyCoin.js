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
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Easy to Use</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Monitor &amp; Manage</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Stay Connected</h6>
									<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
								</div>

							</div>

						</div>
							
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/daily-schedule.png" alt="" />
					</Col>
					
				</Row>
					
			</Container>
			
		</section>
    );
}

export default JellyCoin;