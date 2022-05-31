import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogDetails = (props) => {
    return (
        <Col className="col-12 col-lg-8 res-margin">
						
            {/* <!-- Article --> */}
            <article className="row blog-post">
                
                <Col className="col-12">								

                    <p>
                    Los vecinos del Bº Itaembé Guazú ya pueden descargar y comenzar a utilizar la aplicación COLMENA, que les permitirá registrar sus residuos reciclables en una plataforma digital y obtener una recompensa en criptomonedas JELLY COIN, que podrán utilizarse para adquirir  productos elaborados por el Centro Verde Municipal tales como plantines, abono, y otros productos para seguir embelleciendo y reforestando la ciudad. 
 
 
 En otras palabras, separar los residuos en origen (los materiales reciclables como vidrio, aluminio, plástico, papel o cartón por un lado y no reciclables como restos de comida, cáscaras de frutas y verduras, por otro) permitirá recuperar los materiales reutilizables o reciclables generando un impacto positivo para nuestro entorno ambiental y generar un ingreso extra para las vecinos y vecinas que participen. 
  
 Mediante esta novedosa aplicación, los vecinos y vecinas podrán también conocer el verdadero impacto ambiental que se produce gracias a sus tareas de reciclaje de residuos en sus hogares, ya que la aplicación COLMENA mide también la huella de carbono de cada contenedor que se registra.  
  
 Para conocer más sobre este proyecto de recuperación de residuos y cuidado ambiental, podés consultar en las redes sociales tanto de COLMENA como de la MUNICIPALIDAD DE POSADAS o descargar la App COLMENA que ya está disponible en Google Play y próximamente en Apple Store.
 
    </p>
                    <p>
                        <img src="/images/blog/post-slide-1.jpg" className="img-responsive img-rounded" alt="Image" />
                    </p>
                    
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    
                    <ul>
                        <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</li>
                        <li>Curabitur ante risus, congue ut sem quis, volutpat bibendum ante.</li>
                        <li>Quisque in tortor at diam pellentesque imperdiet quis nec nulla.</li>
                    </ul>
                    
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>								
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                
                </Col>
                
            </article>   
            
            {/* <!-- Post footer --> */}
            <div className="post-footer single-post-footer clearfix">
                
                {/* <!-- Post tags --> */}
                <div className="tags">
                    <a href="#" className="tag">APP</a> 
                    <a href="#" className="tag">BlockChain</a> 
                    <a href="#" className="tag">Misiones</a>
                    <a href="#" className="tag">JellyCoin</a>
                </div>
                        
                {/* <!-- Share --> */}
                <div className="share-panel share-btn">
                    <p><i className="fas fa-share-alt"></i>Share</p>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Post counters -->
                <ul className="post-counters hidden-xs">
                    <li>
                        <a href="#">
                            <i className="far fa-comment"></i> 12
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-heart"></i> 5
                        </a>					
                    </li>
                </ul> */}

            </div>
            
            {/* <!-- Delimiter --> */}
            <hr />
            
            {/* <!-- Author --> 
            <div className="post-author text-center">

                <div className="avatar">
                    <a href="#">
                        <img src="/images/blog/avatar.jpg" className="avatar-100 rounded-circle" width="100" height="100" alt="" />
                    </a>
                </div>

                <div className="description">
                    <span>
                        About Author
                    </span>
                    <h4>
                        <a href="#">AthenaStudio</a>
                    </h4>
                    <p>
                        Quisque rhoncus lectus sit amet ante iaculis maximus. 
                        Vivamus eget sodales purus. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec nec odio nulla.
                    </p>
                </div>

            </div>*/}
            
            {/* <!-- Prev/Next posts --> 
            <div className="post-navigation-wrapper">

                <Row className="divider">
                    <Col className="col-12">

                        <nav className="navigation post-navigation">
                            <div className="nav-links">
                                <div className="nav-previous">
                                    <a href="#">
                                        <img src="/images/blog/recent-post-2.jpg" alt="" />
                                        <div>
                                            <span>Previous Article</span>
                                            Forest Highway With Green Leaves
                                        </div>
                                    </a>
                                </div>
                                <div className="nav-next">
                                    <a href="#">
                                        <img src="/images/blog/recent-post-3.jpg" alt="" />
                                        <div>
                                            <span>Next Article</span>
                                            Aerial Photography of Snowy Mountain Ranges
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </nav>

                    </Col>
                </Row>

            </div>*/}
            
            {/* <!-- Delimiter --> */}
          
            
           
            
        </Col>
    );
}

export default BlogDetails;