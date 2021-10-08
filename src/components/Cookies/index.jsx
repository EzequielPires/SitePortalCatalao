import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Cookies() {
    const [state, setState] = useState(true);
    useEffect(() => {
        if (window.localStorage.getItem('cookies')) {
            const cookiesStorage = window.localStorage.getItem('cookies');
            if (cookiesStorage !== null) {
                setState(JSON.parse(cookiesStorage));
            }
        }
    }, []);
    useEffect(() => {
        window.localStorage.setItem('cookies', JSON.stringify(state));
    }, [state]);
    return (
        <>
            {state ?
                <div className={styles.cookies}>
                    <div className={styles.content}>
                        <p>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento.</p>
                        <div className="w-100 d-flex justify-content-end">
                            <button onClick={() => setState(false)}>Prosseguir</button>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );
}