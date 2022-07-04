import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Team = () => {

	const router = useRouter();

	let title = 
		router.locale === "en"
			? "Team"
			: router.locale === "es"
			? "Equipo"
			: router.locale === "pt"
			? "Equipe"
			: "";

    return (
        <section id="team">
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>{title}</h3>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Member 1 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								{/*<img src="/images/team/member-1.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/maria.jpg" />
								</div>

								<h5 className="title"><a href="/worker">María Pretto</a></h5>
								<span className="position">Legal</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/maria-pretto-2454ab55/"><i className="fab fa-linkedin-in"></i></a>
					
								</div>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 2 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								{/*<img src="/images/team/member-2.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
							  <div className="img-wrapper">
										<img src="/images/colmena/team/ivan.jpg" />
								</div>
								<h5 className="title">Ivan Zubilewicz</h5>
								<span className="position">CEO</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/ivanandrez/"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>	
					
					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								{/*<img src="/images/team/member-3.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/seba.jpg" />
								</div>
								<h5 className="title">Sebastián Valdecantos</h5>
								<span className="position">Tokenomics</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/sebastianvaldecantos/"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>
					
					{/* <!-- Member 4 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								{/*<img src="/images/team/member-4.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/santi.jpg" />
								</div>
								<h5 className="title">Santiago Semhan</h5>
								<span className="position">CTO</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/santiagosemhan/"><i className="fab fa-linkedin-in"></i></a>
									
								</div>
							</div>
						</div>
					</Col>

					{/* <!-- Member 5 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								{/*<img src="/images/team/member-4.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-twitter"></i></a>
										<a href="#"><i className="fab fa-facebook-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/gaby.jpg" />
								</div>
								<h5 className="title">Gabriel Gortari</h5>
								<span className="position">Diseño Industrial</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/gabriel-gortari-ab86a199/"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>

					{/* <!-- Member 6 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								{/*<img src="/images/team/member-4.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/josi.jpg" />
								</div>
								<h5 className="title">Josi Guaimas</h5>
								<span className="position">UX/UI</span>
								<div className="team-social-outer">
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>

					{/* <!-- Member 7 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								{/*<img src="/images/team/member-4.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
										<a href="#"><i className="fab fa-dribbble"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/fer.jpg" />
								</div>
								<h5 className="title">Fernando Hillebrand</h5>
								<span className="position">Full Stack Dev</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/fernando-andr%C3%A9s-hillebrand/"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>

					{/* <!-- Member 8 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member">
							<div className="team-image">
								{/*<img src="/images/team/member-4.jpg" alt="" />*/}
								<div className="team-social">
									<div className="team-social-inner">
										<a href="#"><i className="fab fa-instagram-f"></i></a>
										<a href="#"><i className="fab fa-linkedin-in"></i></a>
									</div>
								</div>
							</div>
							<div className="team-details">
								<div className="img-wrapper">
										<img src="/images/colmena/team/joe.jpg" />
								</div>
								<h5 className="title">Joe Smith</h5>
								<span className="position">Full Stack Dev</span>
								<div className="team-social-outer">
										<a href="https://www.linkedin.com/in/joe-smith-49123b221/"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</div>
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Team;