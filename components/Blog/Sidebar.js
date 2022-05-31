import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper col-12 col-lg-4">
						
			{/* <!-- Search --> */}
			<Row className="sidebar">
				<Col className="col-12">
					{/*
					<div className="search-form">
						<input type="text" name="search" className="search-field" placeholder="Search..." />
						<button className="search-submit" type="submit"><i className="fas fa-search"></i></button>
					</div>
					*/}

				</Col>
			</Row>
			
			{/* <!-- Author --> */}
			<Row className="sidebar">
				<Col className="col-12">
					
					<div className="author-content">
						<img src="/images/colmena/team/ivan.jpg" alt="" />
						<h5>Iván</h5>
						<p className="position">Director</p>
						<p>
						
						</p>
						
					</div>
					
					<div className="author-social">
						<div className="social">
						
							<a href="https://www.linkedin.com/in/ivanandrez/"><i className="fab fa-linkedin-in"></i></a>
							<a href="https://www.instagram.com/ivanandrezu/"><i className="fab fa-instagram"></i></a>
						
						</div>
					</div>

				</Col>
			</Row>
			
			{/* <!-- Instagram feed --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Instagram</h4>
					</header>

					<Row className="instagram-feed">
					
						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/0.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/1.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/2.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/3.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/4.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/5.jpg" alt="" />
							</a>
						</Col>
						
						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/6.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/7.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/colmena/insta/8.jpg" alt="" />
							</a>
						</Col>

					</Row>

				</Col>
			</Row>
			
			{/* <!-- Recent posts --> 
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Recent Posts</h4>
					</header>

				
					<div className="recent-post">
						<div className="recent-post-image" data-count="1">
							<a href="blog-post">
								<img src="/images/blog/recent-post-1.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Assorted Color Buildings and Sea in Riomaggiore</a>
							</h6>
							
							<p>January 14, 2022</p>
							
						</div>
					</div>
					
				
					<div className="recent-post">
						<div className="recent-post-image" data-count="2">
							<a href="blog-post">
								<img src="/images/blog/recent-post-2.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Aerial Photography of Snowy Mountain Ranges</a>
							</h6>
							
							<p>December 30, 2021</p>
							
						</div>

					</div>
					
				
					<div className="recent-post">
						<div className="recent-post-image" data-count="3">
							<a href="blog-post">
								<img src="/images/blog/recent-post-3.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Forest Highway With Green Leaves</a>
							</h6>
							
							<p>July 12, 2021</p>
							
						</div>
					</div>

				</Col>
			</Row>*/}

			{/* <!-- Categories --> 
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Categories</h4>
					</header>

					<ul className="menu">
						<li><a href="blog">Photography</a> <span>17</span></li>
						<li><a href="blog">Lifestyle</a> <span>9</span></li>
						<li><a href="blog">Development</a> <span>2</span></li>
					</ul>

				</Col>
			</Row>*/}
			
			{/* <!-- Tag cloud --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Tags</h4>
					</header>

					<div className="tags clearfix">
						<a href="#" className="tag">Reciclaje</a>
						<a href="#" className="tag">JellyCoin</a>
						<a href="#" className="tag">BlockChain</a>
						<a href="#" className="tag">Misiones</a>                                
						<a href="#" className="tag">Colmena</a>
						<a href="#" className="tag">Economía Circular</a>
						<a href="#" className="tag">APP</a>
					</div>

				</Col>
			</Row>
			
		</div>
    );
};

export default Sidebar;
