import { addView } from '~/server/lib/firestore';

export default defineEventHandler(async () => {
    try {
        const data = await $fetch<{ ip: string }>('https://api.ipify.org?format=json');

        const result = await addView({ ip: data.ip });
        return result;
    } catch(e) {
        console.log(e);
    }
});
