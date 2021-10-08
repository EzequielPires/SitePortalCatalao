import Link from 'next/link';
import Image from 'next/image';
import { Container, Form, FormControl } from 'react-bootstrap';

import { ButtonCategoryGuia } from '../../ButtonCategoryGuia';

import { GoSearch } from 'react-icons/go';

import styles from './styles.module.scss';

import ServicesPng from '../../../assets/icons/tools.svg';
import SaudePng from '../../../assets/icons/stethoscope.svg';
import ImoveisPng from '../../../assets/icons/home-lg.svg';
import VeiculosPng from '../../../assets/icons/car.svg';
import AlimentacaoPng from '../../../assets/icons/utensils-alt.svg';
import OutrosPng from '../../../assets/icons/plus.svg';
import { useEffect, useState } from 'react';

export function GuiaSection() {
    const [value, setValue] = useState('');
    const [link, setLink] = useState('');

    const handleLink = () => {
        let str = value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
        let remove_espaco = str.replace(/ /g, '+').toLowerCase();
        setLink(remove_espaco);
    }

    const handleOnChange = ({ target }) => {
        setValue(target.value);
        handleLink();
    }

    useEffect(() => {
        handleLink();
    }, [value]) 

    return (
        <section id="guiaSection" className={styles.guiaSection}>
            <Container className={styles.container + " d-flex flex-column align-items-center justify-content-center"}>
                <div className={styles.brand + " mb-4"}>
                    <Image layout='fill' src="https://guiacatalao.com.br/images/logo.svg" alt="Guia Catalão" />
                </div>

                <h4 className="text-center">Encontre facilmente números de telefone e endereços das empresas de Catalão.</h4>
                <Form>
                    <fieldset
                        id="search"
                        className={styles.search + " d-flex align-items-center"}
                    >
                        <FormControl
                            id="inputSearch"
                            className={styles.inputSearch}
                            name="s"
                            value={value}
                            onChange={handleOnChange}
                            type="search"
                            placeholder="Busque empresas, produtos ou serviços"
                        />
                        <a
                            href={value.length > 0 ? `https://guiacatalao.com.br/search?s=${link}` : null}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center justify-content-center h-100"
                        >
                            <GoSearch />
                        </a>
                    </fieldset>
                </Form>
                <Link href="/">
                    <a>Não encontrou sua empresa? <span>Cadastre!</span></a>
                </Link>
                <div className={styles.categoriesGuia + " d-flex justify-content-center flex-wrap mt-5"}>
                    <ButtonCategoryGuia
                        icon={ServicesPng.src}
                        link='https://guiacatalao.com.br/categorias/servicos'
                        title="Serviços"
                    />
                    <ButtonCategoryGuia
                        icon={SaudePng.src}
                        link='https://guiacatalao.com.br/categorias/saude'
                        title="Saúde"
                    />
                    <ButtonCategoryGuia
                        icon={VeiculosPng.src}
                        link='https://guiacatalao.com.br/categorias/veiculos'
                        title="Veículos"
                    />
                    <ButtonCategoryGuia
                        icon={AlimentacaoPng.src}
                        link='https://guiacatalao.com.br/categorias/alimentacao'
                        title="Alimentação"
                    />
                    <ButtonCategoryGuia
                        icon={ImoveisPng.src}
                        link='https://guiacatalao.com.br/categorias/imoveis'
                        title="Imóveis"
                    />
                    <ButtonCategoryGuia
                        icon={OutrosPng.src}
                        link='https://guiacatalao.com.br/categorias'
                        title="Outros"
                    />
                </div>
            </Container>
        </section>
    );
}