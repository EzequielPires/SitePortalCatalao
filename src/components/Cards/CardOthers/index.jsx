import { Card } from 'react-bootstrap';
import ImgDefault from '../../../assets/default.jpg';
import { useEffect, useState } from 'react';
import { ImageContainer } from '../../ImageContainer';
import { Skeleton } from '../../Skeleton';

import styles from './styles.module.scss';

export function CardOthers({ classified, category }) {
    const [link, setLink] = useState(null);
    
    useEffect(() => {
        const geraLink = () => {
            let reg = new RegExp('paratiimoveis1.tempsite.ws');
            if (reg.test(classified.caminho)) {
                let newLink = classified.caminho.replace('paratiimoveis1.tempsite.ws', 'paratiimoveis.com.br');
                setLink(newLink);
            } else {
                let regPainel = new RegExp(/^painel/);
                if(regPainel.test(classified.caminho)) {
                    setLink(classified.caminho.replace('painel', 'portalcatalao.com.br/portal/classificados/painel'));
                } else {
                    setLink(classified.caminho);
                }
            }
        }
        geraLink();
    }, [classified]);
    return (
        <a href="https://portalcatalao.com.br/portal/classificados/" target="_blank" rel="noopener noreferrer">
            <Card
                id="cardOthers"
                className={styles.cardOthers}
            >
                {classified ?
                    <>
                        {category === 'vagas' ? null : (
                            <Card.Header
                                className={styles.cardHeader}
                                style={{ background: 'var(--blue)' }}
                            >
                                {classified.caminho && classified.caminho != null ?
                                    <ImageContainer layout='fill' src={category === 'veiculo' ? `https://portalcatalao.com.br/portal/classificados/${classified.caminho}` : `https://${link}`} />
                                    : <ImageContainer layout='fill' src={ImgDefault.src} />
                                }
                            </Card.Header>
                        )}
                        <Card.Body
                            className={styles.cardBody}
                        >
                            {category === 'vagas' ?
                                <Card.Title
                                    className={styles.cardTitle}
                                >
                                    {classified.titulo}
                                </Card.Title>
                                :

                                <Card.Title
                                    className={styles.cardTitle}
                                >
                                    {classified.nome}
                                </Card.Title>
                            }
                            {category === 'vagas' ?
                                <Card.Text className={styles.cardText + " mb-1"}>
                                    {classified.empresa}
                                </Card.Text>
                                : null
                            }
                            <Card.Text className={styles.cardText}>
                                {classified.veic_localizacao}
                            </Card.Text>
                            {(category === 'imovel') || (category === 'veiculo') ?
                                <strong className={styles.price}>R$ {classified.preco && classified.preco !== "" ? classified.preco : 'A Combinar '}</strong> :
                                null
                            }
                        </Card.Body>
                    </>
                    : <Skeleton />
                }
            </Card >
        </a>
    );
}