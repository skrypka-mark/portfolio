
export const usePageViews = () => {
    const addView = async () => {
        const { data } = await useFetch('/api/view', { method: 'post' });
        return data;
    };
    const getViewsTotal = async () => {
        const { data } = await useFetch('/api/view');
        return data;
    };

    return { addView, getViewsTotal };
};
