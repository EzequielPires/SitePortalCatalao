import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaDoorOpen, FaCar, FaBath } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsBriefcase } from 'react-icons/bs';
import ImgDefault from '../../../assets/default.jpg';

import styles from './styles.module.scss';
import { ImageContainer } from '../../ImageContainer';
import { Skeleton } from '../../Skeleton';

export function CardClassifieds({ classified, category }) {
    const [link, setLink] = useState(null);
    const geraLink = () => {
        let reg = new RegExp('paratiimoveis1.tempsite.ws');
        if (reg.test(classified.caminho)) {
            let newLink = classified.caminho.replace('paratiimoveis1.tempsite.ws', 'paratiimoveis.com.br');
            setLink(newLink);
        } else {
            setLink(classified.caminho);
        }
    }
    useEffect(() => {
        geraLink();
    }, [classified])

    return (
        <a href="https://portalcatalao.com.br/portal/classificados/" target="_blank" rel="noopener noreferrer">

            <Card
                id="cardClassifieds"
                className={styles.cardClassifieds}
            >
                
                {
                    classified ?
                        <>
                            <Card.Header
                                className={styles.cardHeader}
                                style={{ background: 'var(--blue)' }}
                            >
                                {classified.caminho ?
                                    <ImageContainer layout='fill' src={category === 'veiculo' ? `https://portalcatalao.com.br/portal/classificados/${classified.caminho}` : `https://${link}`} alt={classified.nome} />
                                    : <ImageContainer src={ImgDefault} alt="Image" layout='fill' />
                                }

                            </Card.Header>
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
                                    <>
                                        <Card.Text
                                            className={styles.cardText + " mb-1"}
                                        >
                                            {classified.empresa}
                                        </Card.Text>
                                        <Card.Text
                                            className={styles.cardText + " mb-1"}
                                        >
                                            {`${classified.local_cidade} - ${classified.local_uf}`}
                                        </Card.Text>
                                        <Card.Text
                                            className={styles.cardText + " mb-2"}
                                        >
                                            {`${classified.ramo} - ${classified.qtd_vagas} vagas`}
                                        </Card.Text>
                                    </>

                                    : null}

                                {category === 'imovel' ? (
                                    <>
                                        <Card.Text
                                            className={styles.cardText + " mb-2"}
                                        >
                                            {classified.vendedor}
                                        </Card.Text>
                                        <Card.Text
                                            className={styles.cardText}
                                        >
                                            {classified.imov_endereco}
                                        </Card.Text>
                                        <div className="d-flex align-items-center">
                                            <FaDoorOpen />
                                            <span>{classified.imov_qtddormitorios}</span>
                                            <FaCar />
                                            <span>{classified.imov_qtdgaragem}</span>
                                            <FaBath />
                                            <span>{classified.imov_qtdsuites}</span>
                                        </div>
                                    </>
                                ) : null}

                                {category === 'veiculo' ? (
                                    <>
                                        <Card.Text
                                            className={styles.cardText}
                                        >
                                            {classified.veic_localizacao}
                                        </Card.Text>
                                        <div className="d-flex flex-column">
                                            {classified.veic_ano ? <span>Ano: {classified.veic_ano}</span> : null}
                                            {classified.tel ? <span>Telefone: {classified.tel}</span> : null}
                                            {classified.veic_combustivel ? <span>Combustível: {classified.veic_combustivel}</span> : null}
                                        </div>
                                    </>
                                ) : null}

                                {category === 'vagas' ? (
                                    <div className="d-none d-md-flex">
                                        {classified.data ? (
                                            <>
                                                <AiOutlineClockCircle />
                                                <span>{classified.data}</span>
                                            </>
                                        ) : null}
                                        {classified.salario_real ? (
                                            <>
                                                <FaRegMoneyBillAlt />
                                                <span>{classified.wage}</span>
                                            </>
                                        ) :
                                            <>
                                                <FaRegMoneyBillAlt />
                                                <span>A combinar</span>
                                            </>
                                        }
                                        {classified.data ? (
                                            <>
                                                <BsBriefcase />
                                                <span>Integral</span>
                                            </>
                                        ) : null}
                                    </div>
                                ) : null}

                                {(category === 'imovel') || (category === 'veiculo') ?
                                    <strong className={styles.price}>{classified.preco && classified.preco !== "" ? `R$ ${classified.preco}` : ''}</strong> :
                                    null
                                }
                            </Card.Body>
                        </>
                        : <Skeleton />
                }
            </Card>
        </a>
    );
}