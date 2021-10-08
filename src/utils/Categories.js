export const categories = [
    {
        "id": "1",
        "parent_id": null,
        "name": "Mundo",
        "id_string": "mundo",
        "description": null,
        "background": "#032b35ff",
        "children": [
            {
                "id": "2",
                "parent_id": "1",
                "name": "Goias",
                "id_string": "goias",
                "description": null,
                "background": null,
                "children": [
                    {
                        "id": "3",
                        "parent_id": "2",
                        "name": "Catalão",
                        "id_string": "catalao",
                        "description": null,
                        "background": null
                    }
                ]
            },
        ]
    },

    {
        "id": "5",
        "parent_id": "4",
        "name": "Saúde",
        "id_string": "saude",
        "description": null,
        "background": null,
    },
    {
        "id": "6",
        "parent_id": "4",
        "name": "Política",
        "id_string": "politica",
        "description": null,
        "background": null,
    },
    {
        "id": "7",
        "parent_id": "4",
        "name": "Educação",
        "id_string": "educacao",
        "description": null,
        "background": null,
    },
    {
        "id": "8",
        "parent_id": null,
        "name": "Brasil",
        "id_string": "brasil",
        "description": null,
        "background": "#032b35ff",
        "children": [
            {
                "id": "4",
                "parent_id": "1",
                "name": "Goias",
                "id_string": "goias",
                "description": null,
                "background": null,
                "children": [
                    {
                        "id": "6",
                        "parent_id": "5",
                        "name": "Catalão",
                        "id_string": "catalao",
                        "description": null,
                        "background": null
                    }
                ]
            },
        ]
    },
]