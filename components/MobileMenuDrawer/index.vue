<script setup lang='ts'>
import { links } from '~/constants';

interface IMobileMenuDrawerProps {
    open: boolean;
    activeLink: string | null;
}

defineProps<IMobileMenuDrawerProps>();
const emits = defineEmits(['close']);

const linkClickHandler = (hash: string) => {
    emits('close');
    navigateTo({ hash, params: { scroll: 1 } });
};
</script>

<template>
    <Teleport to='body'>
        <Transition name='drawer-transition' mode='out-in'>
            <div
                class='flex items-center justify-center'
                :class='$style[`mobile-menu-drawer`]'
                v-if=open
            >
                <ul class='flex flex-col items-center justify-center gap-y-10'>
                    <li :key=link.value v-for='link in links'>
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

<style module lang='scss' src='./styles.module.scss' />
