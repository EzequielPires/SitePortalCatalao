import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { fetcher } from "../../../Helper/fetch-wrapper";
import { BannerLatest } from "../BannerLatest";

export function BannerFloating() {
    const [banner, setBanner] = useState(null);
    const [state, setState] = useState(true);
    const [show, setShow] = useState(true);

    const handleBanner = async () => {
        const data = await fetcher('banner/list?type=6&status=true');
        setBanner(data);
    }

    useEffect(() => {
        if (window.innerWidth > 720) {
            if (window.localStorage.getItem('banner-floating')) {
                const cookiesStorage = window.localStorage.getItem('banner-floating');
                if (cookiesStorage !== null) {
                    if(cookiesStorage === false) {
                        handleClose();
                    } else {
                        setShow(true);
                    }
                    setState(JSON.parse(cookiesStorage));
                }
            }
        } else {
            setShow(false);
        }
    }, []);

    const handleClose = () => {
        setShow(false)
        setState(false);
    };

    useEffect(() => {
        window.localStorage.setItem('banner-floating', JSON.stringify(state));
        handleBanner();
    }, [state]);

    if (!banner || banner.message || banner.length < 0 || !state) {
        return null;
    }

    return (
        <>
            {
                show ?
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body className="d-flex align-items-center justify-content-center">
                            <BannerLatest banner={banner} />
                        </Modal.Body>
                    </Modal> : null
            }
        </>
    );
}