import type { IProject } from '~/interfaces/IProject';

export const projects: IProject[] = [
    {
        name: 'Traveller',
        description: 'Traveller offers an easy and convenient opportunity to book vacations to any country in the world. Book global adventures and unlock unforgettable journeys.',
        image: '/img/projects/traveller.jpg',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    },
    {
        name: 'Gymate',
        description: 'Here, you\'ll find not only state-of-the-art equipment and professional trainers but also an inspiring atmosphere that will help you push your limits.',
        image: '/img/projects/gymate.jpg',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    }
];

export const links = [
    { value: '', label: 'home' },
    { value: '#about', label: 'about' },
    { value: '#projects', label: 'projects' },
    { value: '#contact', label: 'contact' }
];
