export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('page:finish', () => {
        // console.log('====================================');
        // console.log('xui');
        // console.log('====================================');
        // const route = useRoute();
        // const scrollHeight = document.querySelector(route.hash)?.scrollHeight;
        // console.log('====================================');
        // console.log(scrollHeight);
        // console.log('====================================');
        // window.scrollTo({ top: scrollHeight });
    });
});
