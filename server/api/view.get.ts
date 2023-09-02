import { getViewsTotal } from '~/server/lib/firestore';

export default defineEventHandler(async () => {
    try {
        const result = await getViewsTotal();
        return result;
    } catch(e) {
        console.log(e);
    }
});
