import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Spinner } from 'react-bootstrap';

export function ImageContainer({ alt, ...props }) {
    const [loading, setLoading] = useState(true);
    const handleOnLoad = ({ target }) => {
        setLoading(false);
        target.style.opacity = 1;
    }

    return (
        <div className={styles.image}>
            {loading ?
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> : null
            }
            <Image
                onLoad={handleOnLoad}
                layout='fill'
                alt={alt}
                {...props}
            />

        </div>
    );
}