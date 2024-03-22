export default {
  active: true,
  id: 1,
  title: "Merida",
  parameters: "merida",
  header: {
    active: true,
    header_data: [
      {
        id: 2,
        title: "Quienes somos",
        path: "/merida/quienes_somos",
        newTab: false,
        active: true,
      },
      {
        id: 3,
        title: "Educación a distancia",
        path: "/merida/saia/detalles",
        newTab: false,
        active: true,
      },
      {
        id: 5,
        title: "Contáctenos",
        path: "/merida/contactos",
        newTab: false,
        active: true,
      },
      {
        id: 6,
        title: "Consulta de notas",
        path: "http://www.psm.edu.ve/sawebmerida",
        newTab: true,
        active: true,
      },
    ],
  },
  carousel: {
    active: true,
    title: "Politécnico Santiago Mariño",
    description: "",
    carousel_data: [
      {
        id: 0,
        url: "/images/extensionMerida/carousel/web0.jpg",
        cloudinary: "",
        link: "",
        titleLink: "",
        target: "",
        iframe: "",
      },
    ],
  },
  saia: {
    active: false,
    saia_data: [
      {
        id: 0,
      },
      {
        id: 1,
      },
    ],
  },
  eventos: {
    active: true,
    path: "/merida/eventos",
    eventos_data: [
      {
        id: 1,
        active: true,
        date: "03-02-2024",
        name: "Caminata Jóvenes Activos",
        image: "/images/extensionMerida/events/evento1.jpeg",
        detail: "1",
        description: [
          {
            id: 1,
            description:
              "El día 03 de febrero se llevó a cabo la actividad de Caminata Deportiva 2024,  con la participación de los estudiantes de las materias de Educación Salud, Física y Deporte I y II, docentes y personal del Politécnico Santiago Mariño.",
          },
          {
            id: 2,
            description:
              "La caminata partió de la institución subiendo por la Av. Los Próceres hasta el cruce con la Av. Ezio Valeri para luego bajar por la Av. Las Américas hasta llegar de nuevo a la institución.",
          },
          {
            id: 3,
            description:
              "La actividad contó con el apoyo de la Policía Municipal de Mérida quienes escoltaron los jóvenes a lo largo del recorrido.",
          },
          {
            id: 4,
            description:
              "",
          },
          {
            id: 5,
            description:
              "",
          },
        ],
      },
    ],
  },
  testimonios: {
    active: true,
    testimonios_data: [
      {
        id: 1,
        name: "Lilianny Del Rosario Quero Arias",
        designation: "Ing. Industrial / 6to semestre",
        content:
          "Mi experiencia en el Instituto Universitario Politécnico “Santiago Mariño” me ha sido de gran ayuda para construir la persona que soy en la actualidad, y a cimentar los valores de la que seré en un futuro.”",
        image: "/images/extensionMerida/testimonials/author1.jpeg",
        star: 5,
      },
      {
        id: 2,
        name: "Luis José Quero Pérez",
        designation: "Ing. Sistemas / 1er semestre",
        content:
          "Desde que llego al Instituto Universitario Politécnico “Santiago Mariño” estoy en mi casa, experimentando grandes emociones, me siento feliz y complacido con mis docentes, el personal y mis compañeros de estudios.”",
        image: "/images/extensionMerida/testimonials/author2.jpeg",
        star: 5,
      },
      {
        id: 3,
        name: "Javier Cueva González Alberto",
        designation: "Ing. Química / 9no semestre",
        content:
          "Al ser Técnico Superior Universitario en Química Industrial, deseaba poder consolidar mis conocimientos académicos y a la oportunidad brindada por mi Casa de Estudios el Instituto Universitario Politécnico “Santiago Mariño”.",
        image: "/images/extensionMerida/testimonials/author3.jpeg",
        star: 5,
      },
    ],
  },
  noticias: {
    active: true,
    path: "/merida/noticias",
    noticias_data: [
      {
        id: 1,
        principal: true,
        title: "Reinscripción administrativa",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new0.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
      {
        id: 2,
        principal: true,
        title: "Reinscripción académica",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new1.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
      {
        id: 3,
        principal: true,
        title: "Cambios de carrera y traslados",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new2.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
      {
        id: 4,
        principal: true,
        title: "Prueba especial",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new3.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
      {
        id: 5,
        principal: true,
        title: "Retiro o inclusiones",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new4.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
      {
        id: 6,
        principal: true,
        title: "Cancelación de cuotas",
        paragraph:
          "",
        image: "/images/extensionMerida/blog/new5.jpeg",
        author: {
          name: "Carla Rodriguez",
          image: "/images/extensionMerida/blog/author-01.png",
          designation: "Asesor Académico",
        },
        tags: ["inscripciones"],
        publishDate: "01-30-2024",
        details: {
          subTitle: "Información de inscripción.",
          paragraph:
            "Inscribirse en la universidad es un hito importante en la vida de cualquier estudiante. Es el primer paso en un viaje de descubrimiento, aprendizaje y crecimiento personal. La inscripción universitaria puede ser un proceso emocionante, pero también puede ser desafiante. Requiere una cuidadosa consideración de las opciones de carrera, la elección de los cursos adecuados y la preparación de los documentos necesarios. También es un momento para explorar nuevas oportunidades, hacer nuevos amigos y embarcarse en nuevas aventuras. Aunque puede ser abrumador al principio, la inscripción universitaria es una experiencia enriquecedora que abre la puerta a un mundo de posibilidades. Es el comienzo de un emocionante capítulo en la vida de un estudiante, lleno de nuevas experiencias, conocimientos y oportunidades.",
        },
      },
    ]
  },
  inscripciones: {
    active: true,
    inscripciones_data: [
      {
        id: 1,
        date: "10-12-2024",
        title: "Inscripciones Abiertas",
        subTitle: "Técnico Superior Universitario",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit posuere nulla, id dapibus leo fringilla sit amet. Suspendisse vehicula tristique ipsum, nec venenatis justo. Nam justo nulla, dictum eget ante at, tristique posuere augue. Ut dignissim ut neque dignissim varius. Donec eu sapien consequat nibh molestie ornare. Orci varius natoque penatibus et magnis dis parturient montes,",
      },

      {
        id: 2,
        date: "14-12-2024",
        title: "Inscripciones Abiertas",
        subTitle: "Ingenierias",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit posuere nulla, id dapibus leo fringilla sit amet. Suspendisse vehicula tristique ipsum, nec venenatis justo. Nam justo nulla, dictum eget ante at, tristique posuere augue. Ut dignissim ut neque dignissim varius. Donec eu sapien consequat nibh molestie ornare. Orci varius natoque penatibus et magnis dis parturient montes,",
      },

      {
        id: 3,
        date: "17-12-2024",
        title: "Inscripciones Abiertas",
        subTitle: "Licenciaturas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit posuere nulla, id dapibus leo fringilla sit amet. Suspendisse vehicula tristique ipsum, nec venenatis justo. Nam justo nulla, dictum eget ante at, tristique posuere augue. Ut dignissim ut neque dignissim varius. Donec eu sapien consequat nibh molestie ornare. Orci varius natoque penatibus et magnis dis parturient montes,",
      },
    ],
  },
  quienes_somos: {
    active: true,
    id: 1,
    quienes_somos_data: {
      name: "Quienes somos",
      title: "Politécnico Santiago Mariño",
      about_us: {
        title: "¿Quienes somos?",
        description1:
          "Somos una institución de educación superior de carácter privado sin fines de lucro, que cumple las funciones de docencia, investigación y extensión, dirigidas a formar arquitectos e ingenieros capaces de incorporarse al proceso de desarrollo del país. Nuestra organización forma parte de una red de institutos y colegios de educación superior denominada Complejo Educativo “Antonio José de Sucre”. Nuestro lema es Formación para la Excelencia.",
        description2:
          "Somos una comunidad de intereses espirituales que reúne a profesores estudiantes y personal administrativo en la tarea de buscar la verdad y afianzar los valores trascendentes del hombre. Colaboramos en la orientación de la vida del país mediante el aporte doctrinario al esclarecimiento de los valores nacionales.",
        description3:
          "La enseñanza superior del Instituto Universitario Politécnico 'Santiago Mariño', se inspira en un definido espíritu de democracia, de justicia social, de solidaridad Humana y estará abierta a todas las corrientes del pensamiento universal, las cuales se expondrán y analizaran de manera rigurosamente científica.",
      },
      additional_data: {
        mission_and_vision: {
          title: "Misión y Visión",
          subtitle1: "Misión",
          description1:
            "Formar profesionales de elevada calidad que respondan a las necesidades del país y a los cambios que éste demande; fomentar la investigación, así como promover actividades que propicien la correspondiente integración e interrelación de la institución y la comunidad a objeto de elevar el nivel cultural, afianzar valores, favorecer el bienestar, para así contribuir al enriquecimiento de la calidad de vida.",
          subtitle2: "Visión",
          description2:
            "Constituirse en una institución de educación superior signada por la excelencia, que contribuya al desarrollo cultural, científico, humanístico y tecnológico del país y a la consolidación de los valores fundamentales de la sociedad enmarcados en el contexto nacional, latinoamericano y mundial.",
        },
        authorities: {
          title: "Autoridades",
          data: [
            {
              id: 1,
              names: "MSc. Maria Eugenia Diaz",
              position: "Coordinadora de extension",
              photo: "/images/extensionMerida/about/autoridad1.jpg",
            },
            {
              id: 2,
              names: "Lcda. Zulay Paredes",
              position: "Jefe de División de Admisión y Control de Estudio",
              photo: "/images/extensionMerida/about/autoridad2.jpg",
            },
            {
              id: 3,
              names: "Lcda. Mery Garcia",
              position: "Jefe de División Administrativa",
              photo: "/images/extensionMerida/about/autoridad3.jpg",
            },
          ],
        },
      },
      subtitle: "",
      image: "/images/extensionMerida/about/sede.jpg",
      description: "",
    },
  },
  contacto: {
    active: true,
    title: "Contáctanos",
    descripcion:
      "Información de contacto acerca de las carreras y planes de estudio",
    contacto_data: {
      telefono: "0424-7788865",
      direccion:
        "5838+QQM Universidad Santiago Mariño Sede 2, Av. Guzmán Lander, Barcelona 6001, Anzoátegui",
      correo: "politecnicosantiagomariño@gmail.com",
      redes: {
        facebook: "PSM facebook",
        instagram: "@Psm instagram",
      },
    },
  },
  footer: {
    active: true,
    id: 1,
    image: "/images/common/logo/logo_nuevo.png",
    footer_data: {
      institucion: {
        id: 1,
        name: "Institución",
        link: "institucion",
        elements: [
          {
            id: 1,
            name: "Acerca de",
            link: "/merida/acerca_de",
          },
          {
            id: 2,
            name: "Quienes somos",
            link: "/merida/quienes_somos",
          },
          {
            id: 5,
            name: "Eventos",
            link: "/merida/eventos",
          },
          {
            id: 6,
            name: "Métodos de pago",
            link: "/merida/metodos_de_pago",
          },

          {
            id: 7,
            name: "FAQ",
            link: "/merida/faq",
          },
        ],
      },
      polizas_seguro: {
        id: 2,
        name: "Pólizas de seguro",
        link: "seguro",
        elements: [
          {
            id: 1,
            name: "Accidentes personales",
            link: "/merida/polizas/accidentes_personales",
          },
          {
            id: 2,
            name: "Programa de culminación de estudios",
            link: "/merida/polizas/programa_de_culminación",
          },
        ],
      },
      programas_de_orientacion: {
        id: 3,
        name: "Programas de orientación",
        link: "programas",
        elements: [
          {
            id: 1,
            name: "Académica",
            link: "/merida/programas_de_orientación/academica",
          },
          {
            id: 2,
            name: "Vocacional y Psicológica",
            link: "/merida/programas_de_orientación/vocacional_psicológica",
          },
        ],
      },
      social_networks: {
        id: 4,
        name: "Politécnico Santiago Mariño.",
        link: "",
        elements: [
          {
            id: 1,
            name: "Facebook",
            link: "https://www.facebook.com/psm.barcelona.10",
            icon: "/images/common/Icon/facebook.svg",
          },
          {
            id: 2,
            name: "Instagram",
            link: "https://www.instagram.com/psmcaracasoficial/",
            icon: "/images/common/Icon/instagram.svg",
          },
          {
            id: 3,
            name: "Twitter",
            link: "https://twitter.com/PSMSanCristobal",
            icon: "/images/common/Icon/twitter.svg",
          },
        ],
      },
    },
  },
  metodos_de_pago: [
    {
      id: 1,
      nombre: "Pago en Divisas",
      bancos: [
        {
          nombre: "Banco Nacional de Credito",
          titular: `Instituto Universitario Politécnico "Santiago Mariño"`,
          numero_de_cuenta: "0191-0050-20-2350505829",
          cedula_rif: "J-080341660",
          telefono: "",
        }
      ],
      para: ["Matrículas" , "Cuotas", "Aranceles"]
  },
  {
    id: 2,
    nombre: "Servicios Estudiantiles",
    bancos: [
      {
        nombre: "Banco Sofitasa",
        titular: `Instituto Universitario Politécnico "Santiago Mariño"`,
        numero_de_cuenta: "0137-0029-09-0000091981",
        cedula_rif: "J-080341660",
        telefono: "",
      }
    ],
    para: []
  },
  {
    id: 3,
    nombre: "Pago en Bolívares",
    bancos: [
      {
        nombre: "Banco Provincial",
        titular: `Instituto Universitario Politécnico "Santiago Mariño"`,
        numero_de_cuenta: "0108-0906-16-0100013881",
        cedula_rif: "J-080341660",
        telefono: "",
      }
    ],
    para: ["Matrículas" , "Cuotas"]
  },
]
};
