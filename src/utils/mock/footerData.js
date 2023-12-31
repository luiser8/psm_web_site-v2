import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

export default [
    {
        id: 1,
        name: "Institución",
        link: "institucion",
        elements: [
            {
                id: 1,
                name: "Acerca de",
                link: "acerca_de",
            },
            {
                id: 2,
                name: "Planes de estudio",
                link: "planes_estudio",
            },
            {
                id: 3,
                name: "Trabaja con nosotros",
                link: "empleo",
            },
            {
                id: 4,
                name: "Eventos",
                link: "eventos",
            }
        ]
    },
    {
        id: 2,
        name: "Nuestras sedes",
        link: "sedes",
        elements: [
            {
                id: 1,
                name: "Maracaibo",
                link: "maracaibo",
            },
            {
                id: 2,
                name: "Cabimas",
                link: "cabimas",
            },
            {
                id: 3,
                name: "Ciudad Ojeda",
                link: "ciudad_ojeda",
            },
            {
                id: 4,
                name: "Barinas",
                link: "barinas",
            },
            {
                id: 5,
                name: "San Cristóbal",
                link: "san_cristobal",
            },
            {
                id: 6,
                name: "Valencia",
                link: "valencia",
            },
            {
                id: 7,
                name: "Maracay",
                link: "maracay",
            },
            {
                id: 8,
                name: "Barcelona",
                link: "barcelona",
            },
            {
                id: 9,
                name: "Maturin",
                link: "maturin",
            },
            {
                id: 10,
                name: "Puerto Ordaz",
                link: "puerto_ordaz",
            },
            {
                id: 11,
                name: "Porlamar",
                link: "porlamar",
            }
        ]
    },
    {
        id: 3,
        name: "Pólizas de seguro",
        link: "seguro",
        elements: [
            {
                id: 1,
                name: "Accidentes personales",
                link: "accidentes",
            },
            {
                id: 2,
                name: "Programa de culminación de estudios",
                link: "programa",
            }
        ]
    },
    {
        id: 4,
        name: "Programas de orientación",
        link: "programas",
        elements: [
            {
                id: 1,
                name: "Académica",
                link: "academica",
            },
            {
                id: 2,
                name: "Vocacional y Psicológica",
                link: "vocacional",
            }
        ]
    },
    {
        id: 5,
        name: "Politécnico Santiago Mariño.",
        link: "",
        elements: [
            {
                id: 1,
                name: "Facebook",
                link: "https://www.facebook.com/psm.barcelona.10",
                icon: <Facebook className="h-6 w-6" />
            },
            {
                id: 2,
                name: "Instagram",
                link: "https://www.instagram.com/psmcaracasoficial/",
                icon: <Instagram className="h-6 w-6" />
            },
            // {
            //     id: 3,
            //     name: "Twitter",
            //     link: "https://twitter.com/PSMSanCristobal",
            //     icon: <Twitter className="h-6 w-6" />
            // }
        ]
    }
]