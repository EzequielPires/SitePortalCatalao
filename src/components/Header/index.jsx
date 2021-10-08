import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { OffcanvasMenu } from "./OffcanvasMenu";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import Search from "../Search";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import styles from "./styles.module.scss";

export default function Header() {
  const {primary} = useContext(CategoriesContext);

  return (
    <header id="headerMain" className={styles.header}>
      <Navbar className={styles.navbar + " fixed-top"} style={{background: `${primary}`}}>
        <Container className="d-flex align-items-center justify-content-between">
          <OffcanvasMenu />
          <Link href="/">
            <a className="d-flex align-items-center">
              <Image src={Logo} alt="Image-Logo" />
            </a>
          </Link>
          <Search />
        </Container>
      </Navbar>
    </header>
  );
}
