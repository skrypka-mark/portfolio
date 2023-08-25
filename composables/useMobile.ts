import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

export const useMobile = () => {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('lg');

    return isMobile;
};
