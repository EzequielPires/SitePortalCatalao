import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaCode, FaPhotoVideo, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import { MdHelp } from 'react-icons/md';
import { IoMdHelp } from 'react-icons/io'

export function Contato() {

    return (
        <div className={styles.contato}>
            <Container className="d-flex flex-column align-items-center my-4">
                <h2 className="mb-2">Como podemos lhe ajudar?</h2>
                <p>Abaixo estão as formas mais rápidas para você chegar aonde precisa, seja você um um cliente nosso ou novo por aqui.</p>
                <div className={"d-flex justify-content-center flex-wrap mt-4"}>
                <div className={styles.item}>
                        <div className={styles.card} style={{height: "412px"}}>
                            <div className={styles.icon}>
                                <FaHandsHelping />
                            </div>
                            <h4>Comercial</h4>
                            <p>Encontre aqui as melhores formas de anunciar produtos, serviços on-line e off-line. Temos o que há de melhor em valores e produções de soluções. Basta entrar em contato conosco. Atendemos qualquer tipo de cliente com inúmeros possibilidades de resultados.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card} style={{height: "412px"}}>
                            <div className={styles.icon}>
                                <IoMdHelp />
                            </div>
                            <h4>Suporte</h4>
                            <p>Nesse Portal você encontra o que precisa para suporte de app, site, sistema e e-mails. Quer saber mais entre em contato com o nosso comercial. Temos o suporte correto e eficaz, para qualquer tipo de dificuldade on-line.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card} style={{height: "412px"}}>
                            <div className={styles.icon}>
                                <FaPhotoVideo />
                            </div>
                            <h4>Marketing Digital</h4>
                            <p>No Portal Catalão, nosso Marketing Digital trabalha com o objetivo de alcançar e promover os produtos ou marcas por meio de mídias digitais como o Instagram e Facebook. Sendo assim, faça já um orçamento, para lhe proporcionar o que há de mais vantajoso para o seu negócio ou empresa.</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card} style={{height: "412px"}}>
                            <div className={styles.icon}>
                                <FaCode />
                            </div>
                            <h4>Desenvolvimento</h4>
                            <p>Solucões Digitais para seu empreendimento se destacar na maior fonte de comunicação do mundo. Sistemas para Web e aplicativos Mobile, utilizando tecnologias modernas e atuais.</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap mb-4">
                    <div className={styles.item}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <FaPhoneAlt />
                            </div>
                            <a href="tel:(64) 3411-0748" target="_blank" rel="noopener noreferrer">(64) 3411-0748</a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <FaMapMarkerAlt />
                            </div>
                            <p>R. José Saturnino de Castro, 30</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <FaEnvelope />
                            </div>
                            <p>comercial@portalcatalao.com.br</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <FaWhatsapp />
                            </div>
                            <a href="https://api.whatsapp.com/send?phone=+556493011753&text=SuaMensagem" target="_blank" rel="noopener noreferrer">(64) 9301-1753</a>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60655.776652875065!2d-47.978165449469465!3d-18.16455698078194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6666c4ca09061%3A0x988eafae945d0f96!2sPortal%20Catal%C3%A3o%20Internet%20Services!5e0!3m2!1spt-BR!2sbr!4v1632413296502!5m2!1spt-BR!2sbr"
                    style={{ border: 0, width: "600px", maxWidth: "100%", height: "450px" }}
                    loading="lazy"
                >
                </iframe>
            </Container>
        </div>
    );
}