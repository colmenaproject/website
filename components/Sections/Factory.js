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
						
							{<h3>Factory</h3>}
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> Ut fringilla est at nunc suscipit dictum. Nulla facilisi. Phasellus dignissim nibh eget imperdiet venenatis.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Nullam egestas tincidunt lectus, sagittis eros vestibulum in. Vestibulum finibus iaculis sagittis. Suspendisse viverra luctus.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Suspendisse at volutpat magna, vitae mattis metus. Integer posuere eu erat at pharetra. Aliquam ut pharetra diam.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Donec luctus, sem vel molestie efficitur, metus libero mollis neque, sed scelerisque arcu nisl eu lectus.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Fusce neque magna, fringilla ac vulputate at, venenatis a eros. Donec accumsan commodo tortor sed fringilla.</p>
							</li>

						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Ver más</a>
						</p>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/colmena/tablet.png" alt="" />
						<img src="/images/colmena/tablet2.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Factory;