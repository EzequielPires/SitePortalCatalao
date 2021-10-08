export const news = [
    {
        id: '1',
        img: 'https://s2.glbimg.com/Zli9ayX1THrQkv0SGDtPBUmaTOQ=/0x0:5044x2838/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/e/7/BdQq06Sei89qfbPSkxTw/2021-08-03t081612z-876952767-rc2kxo9n8v03-rtrmadp-3-olympics-2020-sal-w-49erfx-medal.jpg',
        category: {
            id: '1',
            title: 'Esporte',
            color: '#06AA48'
        },
        postTime: 'Há 6 horas',
        title: 'Martine Grael e Kahena Kunze conquistam a medalha de ouro na vela',
        description: 'Brasileiras ficam em terceiro na última regata e levam o bicampeonato olímpico da classe 49erFX'
    },
    {
        id: '2',
        img: 'https://s2.glbimg.com/qvJWGs8P1fm1RdKhr-WAd_CeqIU=/0x0:3016x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/i/S/gFAGuQTsKjkvskkW3yaA/000-9kx2b2-b.jpg',
        category: {
            id: '1',
            title: 'Política'
        },
        postTime: 'Há 6 horas',
        title: 'TromPetista é preso ao tentar impedir passagem de veículos militares em desfile de tanques no DF',
        description: 'Fabiano Leitão Duarte foi levado para delegacia na Asa Norte e liberado em seguida. Músico deve responder por desobediência; G1 não conseguiu localizar defesa.'
    },
    {
        id: '3',
        img: 'https://s2.glbimg.com/wkVpodZ8wjINlyH_J2TBfGmOMjE=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/U/L/e4BBJzSoGqdKgWNKRu2Q/asp20201201010.jpg',
        category: {
            id: '1',
            title: 'Política'
        },
        postTime: 'Há 6 horas',
        title: 'IPCA: inflação avança para 0,96% em julho e atinge 8,99% em 12 meses',
        description: 'É a maior variação para um mês de julho desde 2002, quando o índice foi de 1,19%. Custo da energia elétrica aumentou 7,88% e foi o item que mais impactou na inflação do mês.'
    },
    {
        id: '4',
        img: 'https://s2.glbimg.com/k2Paa0oU_taZ08UvB79j9b-SRa4=/0x0:1200x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/h/K/9NjG0uQNKI37Y7GspSBA/teste-algoritmo.twitter-c.jpg',
        category: {
            id: '1',
            title: 'Política'
        },
        postTime: 'Há 6 horas',
        title: 'Algoritmo de corte de foto do Twitter funciona melhor com rostos jovens e de pele clara, demonstra estudante',
        description: 'Pesquisador ganhou prêmio de US$ 3.500 da rede social em competição que examinou viés. Ferramenta foi criticada por fazer recortes incorretos em imagens com pessoas negras.'
    },
    {
        id: '5',
        img: 'https://s2.glbimg.com/kx0JH2UViSPkh_hKkkqbq8qfXp4=/0x0:5302x3535/1080x0/smart/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/0/G/BJ0SCWT7AIOobfWz1dvQ/000-9kx32h.jpg',
        category: {
            id: '1',
            title: 'Política'
        },
        postTime: 'Há 6 horas',
        title: 'Messi chega a hospital para fazer exames no PSG',
        description: 'Pesquisador ganhou prêmio de US$ 3.500 da rede social em competição que examinou viés. Ferramenta foi criticada por fazer recortes incorretos em imagens com pessoas negras.'
    },
]
export const teste = {
    "success": true,
    "page": 1,
    "quantityPerPage": 15,
    "count": 6,
    "content": [
        {
            "id": 1,
            "id_string": "teste-1",
            "title": "Teste 1",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
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
                }
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 2,
            "id_string": "teste-2",
            "title": "Teste 2",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
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
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 3,
            "id_string": "teste-3",
            "title": "Teste 3",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
                    "id": 5,
                    "id_string": "tocantins",
                    "name": "tocantins",
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
                        "path": "/category/mundo/tocantins"
                    }
                }
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 4,
            "id_string": "teste-4",
            "title": "Teste 4",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
                    "id": 6,
                    "id_string": "sao-paulo",
                    "name": "sao paulo",
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
                        "path": "/category/mundo/sao-paulo"
                    }
                }
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 5,
            "id_string": "teste-5",
            "title": "Teste 5",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
                    "id": 3,
                    "id_string": "catalao",
                    "name": "catalão",
                    "description": null,
                    "background": null,
                    "parent": null,
                    "_links": {
                        "rel": "self",
                        "path": "/category/catalao"
                    }
                }
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 6,
            "id_string": "teste-6",
            "title": "Teste 6",
            "thumb": null,
            "content_title": null,
            "content_subtitle": null,
            "content": null,
            "category": [
                {
                    "id": 2,
                    "id_string": "geek",
                    "name": "Geek",
                    "description": null,
                    "background": null,
                    "parent": null,
                    "_links": {
                        "rel": "self",
                        "path": "/category/geek"
                    }
                }
            ],
            "comments": true,
            "published_by": {
                "id": 1,
                "name": "Roger Mesquita",
                "thumb": null,
                "description": null
            },
            "posted_at": {
                "date": "2021-08-05 18:54:55.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        }
    ]
}