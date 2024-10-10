import {DiCss3, DiHtml5, DiJavascript, DiReact, DiPython, DiGithub, DiPostgresql, DiTravis} from 'react-icons/di'

export const skillsInfo = [
    {
        name: 'HTML',
        experience: "El leguaje con el que empece a crear proyectos a principios de 2022",
        familiarity: 75,
        icon: <DiHtml5 className='icon' />,
    },
    {
        name: 'CSS',
        experience: "Empece casi al mismo tiempo que con html",
        familiarity: 80,
        icon: <DiCss3 className='icon' />,
    },
    {
        name: 'JavaScript',
        experience: "3 meses despues de aprender html y css, aprendi funcionalidades con JavaScript",
        familiarity: 70,
        icon: <DiJavascript className='icon' />
    },
    {
        name: 'React',
        experience: "Desde mediados de 2022 que llevo practicando este framework. Todos mis proyectos lo utilizan",
        familiarity: 65,
        icon: <DiReact className='icon' />
    },
    {
        name: 'Node - Express',
        experience: "En 2023 empece con lenguajes de backend, y lo hice con ExpressJs",
        familiarity: 65,
        icon: <DiTravis className='icon' />
    },
    {
        name: 'PostgreSQL',
        experience: "El motor de Base de datos que mejor manejo. Tambien llevo desde 2023 aprendiendolo",
        familiarity: 60,
        icon: <DiPostgresql className='icon' />
    },
    {
        name: 'Python -  Django',
        experience: "El segundo lenguaje backend que manejo. Este lo empece a practicar a principios de 2024",
        familiarity: 80,
        icon: <DiPython className='icon' />,
    },
]