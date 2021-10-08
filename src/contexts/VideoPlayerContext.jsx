import { createContext, useState} from "react";

export const VideoPlayerContext = createContext();

export const VideoProvider = ({children}) => {
    const videos = {
        "success": true,
        "page": 1,
        "quantityPerPage": 15,
        "count": 2,
        "content": [
            {
                "id": 2,
                "id_string": "mais-um-teste2",
                "type": "youtube",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/maMnRvJVih8",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "31",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            },
            {
                "id": 1,
                "id_string": "teste1",
                "type": "upload",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/QWReaqh2d4Q",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "11",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            },
            {
                "id": 3,
                "id_string": "mais-um-teste3",
                "type": "youtube",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/maMnRvJVih8",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "31",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            },
            {
                "id": 4,
                "id_string": "teste4",
                "type": "upload",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/QWReaqh2d4Q",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "11",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            },
            {
                "id": 5,
                "id_string": "mais-um-teste5",
                "type": "youtube",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/maMnRvJVih8",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "31",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            },
            {
                "id": 6,
                "id_string": "teste6",
                "type": "upload",
                "name": "Cão mais inteligente do Tik Tok pinta, desenha e faz yoga",
                "path": "https://www.youtube.com/embed/QWReaqh2d4Q",
                "thumb": "https://i.ytimg.com/vi/b_rn7bwD8qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUTlul6qfAvaeXvlBXf72ViylCjA",
                "duration": "11",
                "category": {
                    "id": 4,
                    "id_string": "goias",
                    "name": "goias",
                    "description": null,
                    "background": null,
                    "parent": {
                        "id": 1,
                        "id_string": "mundo",
                        "name": "Mundo",
                        "description": null,
                        "background": null,
                        "parent": null,
                        "_links": {
                            "rel": "self",
                            "path": "/category/mundo"
                        }
                    },
                    "_links": {
                        "rel": "self",
                        "path": "/category/mundo/goias"
                    }
                }
            }
        ]
    }
    const [player, setPlayer] = useState(videos.content[0]);
    return (
        <VideoPlayerContext.Provider value={{videos, player, setPlayer}}>
            {children}
        </VideoPlayerContext.Provider>
    );
}