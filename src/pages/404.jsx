import { Container } from "react-bootstrap";
import Image from 'next/image';
import ImgError from '../assets/404.svg'
import styles from '../styles/components/404.module.scss';

export default function Custom404() {
    return (
        <Container className="d-flex flex-column align-items-center py-4 mb-5">
            <h1 className={styles.title}>Ups!... nenhum resultado encontrado</h1>
            <p>Por favor tente outra busca</p>
            <Image src={ImgError} width={300} height={300} alt="Error_404"/>
        </Container>
    )
  }