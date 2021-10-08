import Error404 from '../../../assets/404.svg';

import styles from './styles.module.scss';

export function VideoPlayer({video}) {
    return (
        <>
            {video ?
                <>
                    <iframe
                        width="100%"
                        height="500"
                        src={video.path}
                        className={styles.video_player}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    <h4 className={styles.title + " my-3"}>{video.name}</h4>
                    <p className={styles.description}>{video.description}</p>
                </> :
                <>
                    <img
                        width="746"
                        height="500"
                        src={Error404}
                        alt="Error"
                        ></img>
                    <h4 className={styles.title + " my-3"}>Vídeo não encontrado :.(</h4>
                </>
            }

        </>
    );
}
