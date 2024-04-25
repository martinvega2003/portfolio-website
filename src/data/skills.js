import {DiCss3, DiHtml5, DiJavascript, DiReact, DiPython, DiGithub, DiPostgresql, DiTravis} from 'react-icons/di'

export const skillsInfo = [
    {
        name: 'HTML',
        experience: 2,
        familiarity: 75,
        icon: <DiHtml5 className='icon' />,
    },
    {
        name: 'CSS',
        experience: 2,
        familiarity: 80,
        icon: <DiCss3 className='icon' />,
    },
    {
        name: 'JavaScript',
        experience: 1,
        familiarity: 70,
        icon: <DiJavascript className='icon' />
    },
    {
        name: 'React',
        experience: 1,
        familiarity: 65,
        icon: <DiReact className='icon' />
    },
    {
        name: 'TypeScript',
        experience: 0.5,
        familiarity: 65,
        icon: <DiTravis className='icon' />
    },
    {
        name: 'PostgreSQL',
        experience: 0.5,
        familiarity: 60,
        icon: <DiPostgresql className='icon' />
    },
    {
        name: 'Python',
        experience: 0.5,
        familiarity: 80,
        icon: <DiPython className='icon' />,
    },
]