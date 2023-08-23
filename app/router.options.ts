import type { RouterConfig } from '@nuxt/schema';

export const HEADER_HEIGHT = 64;
export const SECTION_SPACES = 110;
export const PROJECTS_SPACES = 32;

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    scrollBehavior: async (to, from, savedPosition) => {
        const isScrollOn = JSON.parse(to.params.scroll as string ?? 'false');

        // if(!isScrollOn) return {};

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
