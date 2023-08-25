<script setup>
import { links } from '~/constants';

defineProps({ open: Boolean, activeLink: String });
const emits = defineEmits(['close']);

const NuxtLink = defineNuxtLink({ componentName: 'nuxt-link' });

const linkClickHandler = hash => {
    emits('close');
    navigateTo({ hash, params: { scroll: true } });
};
</script>

<template>
    <Teleport to='body'>
        <Transition name='drawer-transition' mode='out-in'>
            <div
                class='fixed inset-0 flex items-center justify-center'
                :class='$style[`mobile-menu-drawer`]'
                v-if=open
            >
                <ul class='flex flex-col items-center justify-center gap-y-10'>
                    <li :key=link v-for='link in links'>
                        <Typography
                            variant='link'
                            class='capitalize'
                            is='a'
                            :class='[$style.link, { "link-active": link.value === activeLink }]'
                            @click=linkClickHandler(link.value)
                        >
                            {{ link.label }}
                        </Typography>
                    </li>
                </ul>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang='scss' module>
.mobile-menu-drawer {
    top: var(--header-height);
    height: calc(100vh - var(--header-height));

    background: var(--color-main-bg);
    backdrop-filter: $backdrop-filter;
}
</style>
