import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>            

                <Row>

                    <Swiper
                        className="clients-slider"
                        autoplay={{
                            delay: 2500,
                            autoplay: false,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            768: {
                                spaceBetween: 20,
                                slidesPerView: 4
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 4
                            }
                        }}
                    >

                        {/* <!-- Client 1 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/colmena/bolsaplast.png" alt="Client 1" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 2 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/colmena/cairpras.png" alt="Client 2" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 3 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-3.png" alt="Client 3" />
                            </a>
                        </SwiperSlide>

                        {/* <!-- Client 4 --> */}
                        <SwiperSlide className="client">
                            <a href="#">
                                <img src="/images/clients/company-4.png" alt="Client 4" />
                            </a>
                        </SwiperSlide>

                    </Swiper>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Clients;