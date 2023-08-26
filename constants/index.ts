import type { IProject } from '~/interfaces/IProject';

export const projects: IProject[] = [
    {
        name: 'Traveller',
        description: 'Traveller offers an easy and convenient opportunity to book vacations to any country in the world. Book global adventures and unlock unforgettable journeys.',
        image: '/img/projects/traveller.jpg',
        preview: 'https://traveller-pro.netlify.app/',
        skills: ['vue', 'scss'],
        github: 'https://github.com/skrypka-mark/traveller',
        figma: 'https://www.figma.com/file/cq8WLfKk5qnTaC5vE0HYyU/Traveller'
    },
    {
        name: 'Gymate',
        description: 'Here, you\'ll find not only state-of-the-art equipment and professional trainers but also an inspiring atmosphere that will help you push your limits.',
        image: '/img/projects/gymate.jpg',
        preview: 'https://www.figma.com/file/MR2EkigeUHpJXUufGNpcMc/Gymate', // Replace with the real link in future
        skills: ['react', 'scss'],
        github: 'https://www.figma.com/file/MR2EkigeUHpJXUufGNpcMc/Gymate', // Replace with the real link in future
        figma: 'https://www.figma.com/file/MR2EkigeUHpJXUufGNpcMc/Gymate'
    }
];

export const links = [
    { value: '', label: 'home' },
    { value: '#about', label: 'about' },
    { value: '#projects', label: 'projects' },
    { value: '#contact', label: 'contact' }
];
