import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

const Support = (props) => {

	const router = useRouter();

	let title = 
		router.locale === "en"
			? "Frequently Asked Questions"
			: router.locale === "es"
			? "Preguntas Frecuentes"
			: router.locale === "pt"
			? "Perguntas Frequentes"
			: "";
	
	let subtitle = 
		router.locale === "en"
			? "In this section you will find information about the most frequently asked questions by the community:"
			: router.locale === "es"
			? "En esta sección podrás encontrarás información sobre las cuestiones más consultadas por la comunidad:"
			: router.locale === "pt"
			? "Nesta seção você encontrará informações sobre os assuntos mais consultados pela comunidade:"
			: "";

	let question_end = 
		router.locale === "en"
			? "Any other questions?"
			: router.locale === "es"
			? "¿Alguna otra pregunta?"
			: router.locale === "pt"
			? "Alguma outra pergunta?"
			: "";
	
	let button_text = 
		router.locale === "en"
			? "Ask it here"
			: router.locale === "es"
			? "Pregunta Aquí"
			: router.locale === "pt"
			? "Pergunte aqui"
			: "";

	let question_1 = 
		router.locale === "en"
			? "What is Colmena?"
			: router.locale === "es"
			? "¿Qué es Colmena?"
			: router.locale === "pt"
			? "O que é Colmena?"
			: "";

	let answer_1 = 
		router.locale === "en"
			? "It is a platform based on blockchain technology that will help establish a direct connection between recyclable material generators, collectors and the recycling industry. Colmena seeks to transform the way recyclable waste is managed, proposing a collaborative, digital and decentralized management alternative that allows households, companies and institutions to separate from their waste the materials requested by industries, register them on the platform and transport them to a determined point, with the option of coordinating with a third party the door-to-door pickup. To achieve this transformation, Colmena proposes an economic incentive that mobilizes to separate and transport materials in a collaborative way: JellyCoin (JYC) cryptocurrencies."
			: router.locale === "es"
			? "Es una plataforma basada en la tecnología blockchain que ayudará a establecer una conexión directa entre los generadores de material reciclable , los recolectores y la industria recicladora. Colmena busca transformar la manera de gestionar los residuos reciclables, proponiendo una alternativa de gestión colaborativa, digital y descentralizada que permite a los hogares, empresas e instituciones separar de sus residuos los materiales solicitados por las industrias, registrarlos en la plataforma y transportarlos hasta un punto determinado, con la opción de coordinar con un tercero el retiro puerta a puerta. Para lograr esta transformación Colmena propone un incentivo económico que movilice a separar y transportar los materiales de manera colaborativa: las criptomonedas JellyCoin (JYC)."
			: router.locale === "pt"
			? "É uma plataforma baseada na tecnologia da cadeia de blocos que ajudará a estabelecer uma conexão direta entre geradores de material reciclável, coletores e a indústria de reciclagem. A Colmena procura transformar a forma de gestão dos resíduos recicláveis, propondo uma alternativa de gestão colaborativa, digital e descentralizada que permite às famílias, empresas e instituições separar de seus resíduos os materiais solicitados pelas indústrias, registrá-los na plataforma e transportá-los até um ponto determinado, com a opção de coordenar com um terceiro a coleta porta-a-porta. Para alcançar esta transformação, a Colmena propõe um incentivo econômico que mobiliza a separação e o transporte de materiais de forma colaborativa: Criptomoeda JellyCoin (JYC)."
			: "";
	
	let question_2 = 
		router.locale === "en"
			? "How can I participate?"
			: router.locale === "es"
			? "¿Cómo puedo participar?"
			: router.locale === "pt"
			? "Como posso participar?"
			: "";

	let answer_2 = 
		router.locale === "en"
			? "There are different ways to participate in Colmena. Individuals, companies, businesses or institutions that generate recyclable material and separate them correctly at source can participate in Colmena as <strong>User Generators</strong>. Individuals willing to transport recyclable material from the point of generation to the point of collection can participate in Colmena as <strong>Collector Users</strong>. Industries that demand recyclable material for processing, companies that wish to manage the reverse logistics of their packaging, companies that wish to undertake social responsibility actions or governments that wish to optimize their differentiated management system can participate in Colmena as <strong>Factory Users</strong>."
			: router.locale === "es"
			? "Hay diferentes formas de participar en Colmena. Las personas físicas, empresas, comercios o instituciones que generan material reciclable y los separan correctamente en origen pueden participar en Colmena como <strong>Usuarios Generadores</strong>. Las personas físicas dispuestas a trasladar material reciclable desde el punto de generación hasta el punto de recolección, pueden participar en Colmena como <strong>Usuarios Recolectores</strong>. Las industrias que demandan material reciclable para procesar, empresas que desean gestionar la logística inversa de sus envases, empresas que desean encarar acciones de responsabilidad social o gobiernos que desean optimizar su sistema de gestión diferenciada pueden participar en Colmena como <strong>Usuarios Factory</strong>."
			: router.locale === "pt"
			? "Existem diferentes maneiras de participar da Colmena. Indivíduos, empresas, negócios ou instituições que geram material reciclável e os separam corretamente na fonte podem participar da Colmena como <strong>Usuários Geradores</strong>. Indivíduos dispostos a transportar material reciclável do ponto de geração até o ponto de coleta podem participar da Colmena como <strong>Usuários Coletores</strong>. Indústrias que requerem material reciclável para processamento, empresas que desejam gerenciar a logística reversa de suas embalagens, empresas que desejam empreender ações de responsabilidade social ou governos que desejam otimizar seu sistema diferenciado de gerenciamento podem participar da Colmena como <strong>Usuários Factory</strong>."
			: "";

	let question_3 = 
		router.locale === "en"
			? "Where do I take the bags of recovered waste?"
			: router.locale === "es"
			? "¿Dónde llevo las bolsas de residuos recuperados?"
			: router.locale === "pt"
			? "Para onde devo levar os sacos de resíduos recuperados?"
			: "";

	let answer_3 = 
		router.locale === "en"
			? "<p>Once the materials have been recovered and registered, users can take them to the <strong>Ecopoint</strong> nearest to their home. During the implementation test in the city of Posadas (Misiones), users must take them to the Fixed Ecopoint in the Itaembé Guazú neighborhood located on Las Violetas street.<br>During the pilot test, the Colmena Platform will be configured to receive five types of recyclable materials: paper, cardboard, glass, plastic and aluminum, which will be assigned the following values in JYC: <ul><li>paper, cardboard and glass: FIVE (5) JYC per kilo.</li><li>plástico: plastic: TEN (10) JYC per kilo.</li><li>aluminum: TWENTY (20) JYC per kilo.</li><li>transportation: TEN (10) JYC per Km traveled.</li></ul></p>."
			: router.locale === "es"
			? "<p>Una vez recuperados y registrados los materiales, los usuarios pueden transportarlos hasta el <strong>Ecopunto</strong> más próximo a su domicilio. Durante la prueba de implementación en la Ciudad de Posadas (Misiones), los usuarios deben llevarlo al Ecopunto Fijo del barrio Itaembé Guazú ubicado en la calle Las Violetas.<br />Durante la prueba piloto la Plataforma Colmena estará configurada para recibir cinco tipos de materiales reciclables: papel, cartón, vidrio, plástico y aluminio a los cuales se asignarán los siguientes valores en JYC:<ul><li>papel, cartón y vidrio: CINCO (5) JYC por kilo.</li><li>plástico: DIEZ (10) JYC por kilo.</li><li>aluminio: VEINTE (20) JYC por kilo.</li><li>transporte: DIEZ (10) JYC por Km recorrido.</li></ul></p>"
			: router.locale === "pt"
			? "<p>Uma vez que os materiais tenham sido recuperados e registrados, os usuários podem levá-los para o <strong>Ecoponto</strong> mais próximo de sua casa. Durante o teste de implementação na cidade de Posadas (Misiones), os usuários devem levá-los ao Ecoponto Fixo no bairro Itaembé Guazú, localizado na rua Las Violetas.<br />Durante o teste piloto, a Plataforma Colmena será configurada para receber cinco tipos de materiais recicláveis: papel, papelão, vidro, plástico e alumínio, aos quais serão atribuídos os seguintes valores em JYC:<ul><li>papel, papelão e vidro: CINCO (5) JYC por quilo.</li><li>plástico: TEN (10) JYC por quilo.</li><li>alumínio: VINTE (20) JYC por quilo.</li><li>transporte: DEZ (10) JYC por km percorrido.</li></ul></p>"
			: "";
	
	let question_4 = 
		router.locale === "en"
			? "What is JellyCoin (JYC) and what is it for?"
			: router.locale === "es"
			? "¿Qué es JellyCoin (JYC) y para qué sirve?"
			: router.locale === "pt"
			? "O que é JellyCoin (JYC) e para que serve?"
			: "";
	
	let answer_4 = 
		router.locale === "en"
			? "<p>JellyCoin (JYC) is a digital currency created to function as a medium of exchange and store of value within the Hive ecosystem. Technically it is a non-minable token developed on the EOSio blockchain.<br />During the pilot test JYC will have parity with the legal tender in Argentina <strong>1JYC = 1$AR</strong>. Subsequently its value will fluctuate according to the demand for tokens from industries and the supply accumulated by families, businesses and institutions as a result of their activity of separating and transporting recyclable material.<br />During the pilot test the JYCs are exchangeable for products made by the Municipal Green Center of the city of Posadas. Colmena's social networks will be the channel to announce the exchange values of products as well as the new businesses or institutions that accept JYC as a means of payment.</p>"
			: router.locale === "es"
			? "<p>JellyCoin (JYC) es una moneda digital creada para funcionar como medio de intercambio y reserva de valor dentro del ecosistema Colmena. Técnicamente es un token no minable desarrollado sobre la blockchain de EOSio.<br />Durante la prueba piloto JYC tendrá paridad con la moneda de curso legal en Argentina <strong>1JYC = 1$AR</strong>. Posteriormente su valor fluctúa según la demanda de tokens de las industrias y la oferta acumulada por las familias, comercios e instituciones como resultado de su actividad de separación y transporte de material reciclable.<br />Durante la prueba piloto los JYC son intercambiables por productos elaborados por el Centro Verde Municipal de la ciudad de Posadas. Las redes sociales de Colmena serán el canal para anunciar los valores de intercambio de productos así como los nuevos comercios o instituciones que acepten JYC como medio de pago.</p>"
			: router.locale === "pt"
			? "JellyCoin (JYC) é uma moeda digital criada para funcionar como um meio de troca e armazenamento de valor dentro do ecossistema Colmena. Tecnicamente, é uma ficha não-minável desenvolvida na cadeia de blocos EOSio.<br />Durante o teste piloto JYC terá paridade com a moeda de curso legal na Argentina <strong>1JYC = 1$AR</strong>. Posteriormente, seu valor flutuará de acordo com a demanda por fichas das indústrias e a oferta acumulada pelas famílias, empresas e instituições como resultado de sua atividade de separação e transporte de material reciclável.<br />Durante o teste piloto, os JYCs são intercambiáveis por produtos fabricados pelo Centro Verde Municipal da cidade de Posadas. As redes sociais da Colmena serão o canal para anunciar os valores de troca dos produtos, assim como as novas empresas ou instituições que aceitam o JYC como meio de pagamento."
			: "";
	
	let question_5 = 
		router.locale === "en"
			? "Why Blockchain?"
			: router.locale === "es"
			? "¿Por qué Blockchain?"
			: router.locale === "pt"
			? "Por que Blockchain?"
			: "";
	
	let answer_5 = 
		router.locale === "en"
			? "The use of blockchain technology ensures the security and transparency of financial transactions between Hive users. Recording the data of all transfers of JellyCoin tokens from one account to another, with the mandatory and automatic recording of the hash on the Blockchain enables the scalability of the ecosystem. In addition, data confidentiality is preserved as the record of the flow of funds is open to the public but the private information in the record is immutable and anonymous. Colmena is based on the EOSio blockchain, the most suitable for your needs in terms of transaction speed and fee costs."
			: router.locale === "es"
			? "El uso de la tecnología blockchain garantiza la seguridad y transparencia de las transacciones financieras entre los usuarios de Colmena. El registro de los datos de todas las transferencias de tokens de JellyCoin de una cuenta a otra, con el registro obligatorio y automático del hash en la Blockchain permite la escalabilidad del ecosistema. Además se preserva la confidencialidad de los datos ya que el registro del flujo de fondos está abierto al público pero la información privada del registro es inmutable y anónima. Colmena está basada en la blockchain de EOSio, la más adecuada para sus necesidades en velocidad de transacción y costos de fee."
			: router.locale === "pt"
			? "O uso da tecnologia Blockchain garante a segurança e a transparência das transações financeiras entre os usuários Colmena. O registro dos dados de todas as transferências de fichas JellyCoin de uma conta para outra, com o registro do hash obrigatório e automático  no Blockchain, permite a escalabilidade do ecossistema. Além disso, a confidencialidade dos dados é preservada, pois o registro do fluxo de fundos é aberto ao público, mas as informações privadas no registro são imutáveis e anônimas. Colmena é baseada na cadeia de blocos EOSio, a mais adequada para suas necessidades em termos de velocidade de transação e custos de taxas."
			: "";
	
	let question_6 = 
			router.locale === "en"
				? "How does the hive promote the Sustainable Development Goals?"
				: router.locale === "es"
				? "¿Cómo Colmena promueve los objetivos de Desarrollo Sostenible?"
				: router.locale === "pt"
				? "Como Colmena promove os objetivos de desenvolvimento sustentábel?"
				: "";
	
	let answer_6 = 
			router.locale === "en"
				? "On September 25, 2015, the UN General Assembly adopted the 2030 Agenda for Sustainable Development, an action plan for people, planet, and prosperity that also aims to strengthen universal peace and access to justice. The Agenda sets out 17 Goals with 169 targets that cover the economic, social, and environmental spheres.<br />Colmena actively contributes to the fulfillment of several SDGs in the People, Planet, and Prosperity axes. By promoting source separation of recyclable material, its digitization and collaborative transportation, as well as an economic reward for participants in the form of digital currencies, we help to:<ul><li>Reducing carbon emissions into the atmosphere.</li><li>Preventing and eradicating open dumpsites.</li><li>Increasing the output of recycling industries, fostering the circular economy.</li><li>	Professionalizing the work of collectors and achieving their social and financial inclusion.</li></ul></p>"
				: router.locale === "es"
				? "La Asamblea General de la ONU adoptó el 25 de septiembre de 2015 la Agenda 2030 para el Desarrollo Sostenible, un plan de acción a favor de las personas, el planeta y la prosperidad, que también tiene la intención de fortalecer la paz universal y el acceso a la justicia. La Agenda plantea 17 Objetivos con 169 metas que abarcan las esferas económica, social y ambiental. <br />Colmena contribuye activamente al cumplimiento de múltiples ODS en los ejes Persona, Planeta y Prosperidad. Promoviendo la actividad de separación de material reciclable en origen, su digitalización y transporte colaborativo así como una retribución económica a los participantes en forma de monedas digitales, ayudamos a: <ul><li>Reducir las emisiones de carbono a la atmósfera.</li><li>Prevenir y erradicar los basurales a cielo abierto.</li><li>Incrementar la producción de las industrias recicladoras fomentando la economía circular.</li><li>Profesionalizar el trabajo de los recolectores y lograr su inclusión social y financiera.</li></ul></p>"
				: router.locale === "pt"
				? "Em 25 de setembro de 2015, a Assembléia Geral da ONU adotou a Agenda para o Desenvolvimento Sustentável de 2030, um plano de ação para as pessoas, o planeta e a prosperidade, que também tem como objetivo fortalecer a paz universal e o acesso à justiça. A Agenda estabelece 17 Metas com 169 metas que cobrem as esferas econômica, social e ambiental.<br />A Colmena contribui ativamente para o cumprimento de vários SDGs nos eixos Pessoas, Planeta e Prosperidade. Ao promover a separação do material reciclável na fonte, sua digitalização e transporte colaborativo, bem como uma recompensa econômica para os participantes sob a forma de moedas digitais, ajudamos a:<ul><li>Redução das emissões de carbono para a atmosfera.</li><li>Prevenindo e erradicando lixões abertos.</li><li>Aumentar a produção das indústrias de reciclagem, fomentando a economia circular.</li><li>Profissionalizar o trabalho dos colecionadores e conseguir sua inclusão social e financeira.</li></ul></p>"
				: "";
	

    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>{title}</h3>
							<p>{subtitle}</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
								{question_1}			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									{parse(answer_1)}	
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
								{question_2}			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									{parse(answer_2)}
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
								{question_3} 	
								</Accordion.Header>

								<Accordion.Body>
									{parse(answer_3)}
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									{question_4}        	
								</Accordion.Header>

								<Accordion.Body>
									{parse(answer_4)}
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
								{question_5}	        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
									{parse(answer_5)}
									</p>
								</Accordion.Body>
								
							</Accordion.Item>


							{/* <!-- Question 6 --> */}
							<Accordion.Item eventKey="5">

								<Accordion.Header as="h5">
								{question_6}	        	
								</Accordion.Header>

								<Accordion.Body>
									{parse(answer_6)}
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">{question_end}<a href="mailto:info@colmenaproject.io"> <strong>{button_text}</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;