import type { IProject } from '~/interfaces/IProject';

export const projects: IProject[] = [
    {
        name: 'Traveller',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        image: '/img/projects/traveller.jpg',
        preview: '#',
        skills: ['nuxt', 'express', 'scss'],
        github: '#',
        figma: '#'
    },
    {
        name: 'Gymate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
