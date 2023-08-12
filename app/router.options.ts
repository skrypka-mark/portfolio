import type { RouterConfig } from '@nuxt/schema';

const HEADER_HEIGHT = 64;
const SECTION_SPACES = 110;
const PROJECTS_SPACES = 32;

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    scrollBehavior: async (to, from, savedPosition) => {
        if(savedPosition) {
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        top: savedPosition.top,
                        behavior: 'instant'
                    });
                }, 100);
            });
        }
        if(to.hash) {
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        top: to.hash === '#projects' ? HEADER_HEIGHT + PROJECTS_SPACES : HEADER_HEIGHT + SECTION_SPACES,
                        behavior: 'smooth'
                    });
                }, 100);
            });
        }
        return { top: 0, behavior: 'smooth' };
    }
}
