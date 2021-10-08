import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { Menu } from "../Menu";
import styles from './styles.module.scss';

export function OffcanvasMenu() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className={styles.offcanvasMenu}>
            <button className="btn-menu d-flex align-items-center" onClick={handleShow}>
                <FaBars />
                <span className="d-none d-md-block">Menu</span>
            </button>

            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
                <Offcanvas.Header className="p-4" closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Menu close={handleClose}/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}