<script setup lang='ts'>
import { useMobile } from '~/composables/useMobile';
import { HEADER_HEIGHT, SECTION_SPACES, PROJECTS_SPACES } from '~/app/router.options';
import { links } from '~/constants';

const NuxtLink = defineNuxtLink({ componentName: 'nuxt-link' });

const mainRef = inject<Ref>('main-ref');

const { y } = useWindowScroll();
const { height } = useWindowSize();
const isMobile = useMobile() as Ref<boolean>;
const activeLink = ref<string | null>(null);
const isMobileMenuDrawerOpen = ref(false);

const toggleMobileMenuDrawer = (value: boolean) => {
    isMobileMenuDrawerOpen.value = typeof value === 'boolean' ? value : !isMobileMenuDrawerOpen.value;
};

watch(y, value => {
    if(mainRef?.value) {
        const { height: mainHeight } = mainRef.value?.getBoundingClientRect();

        if(y.value + height.value >= mainHeight) {
            return activeLink.value = links.at(-1)?.value ?? null;
        }
    }
    if(!y.value) {
        return activeLink.value = links[0].value;
    }
    for(const link of links) {
        const section = document.getElementById(link.label);

        if(!section) return;

        if(value >= section.offsetTop - (
            link.value === '#projects'
                ? HEADER_HEIGHT + PROJECTS_SPACES
                : HEADER_HEIGHT + SECTION_SPACES
            ) && value < section.offsetTop + section.scrollHeight
        ) {
            activeLink.value = link.value;
        }
    }
}, { immediate: true });

watch(isMobileMenuDrawerOpen, value => {
    document.body.classList[value ? 'add' : 'remove']('prevent-scroll');
});
</script>

<template>
    <Teleport to='body'>
        <header :class='$style.header'>
            <Container is='nav' :class='$style.nav'>
                <NuxtLink
                    :class='$style.logo'
                    :to='{ params: { scroll: 1 } }'
                    @click=toggleMobileMenuDrawer(false)
                >
                    <SvgoLogo />
                </NuxtLink>
                <ul :class='$style[`nav-links`]' v-if=!isMobile>
                    <li :key=link.value v-for='link in links'>
                        <Typography
                            variant='link'
                            :is=NuxtLink
                            :class='[$style.link, { "link-active": link.value === activeLink }]'
                            :to='{ hash: link.value, params: { scroll: true } }'
                        >
                            {{ link.label }}
                        </Typography>
                    </li>
                </ul>
                <button class='perspective' v-if=isMobile>
                    <Transition
                        :name='isMobileMenuDrawerOpen ? `mobile-menu-btn-transition` : `mobile-menu-close-btn-transition`'
                        mode='out-in'
                    >
                        <div :key=String(isMobileMenuDrawerOpen)>
                            <Icon
                                :name='isMobileMenuDrawerOpen ? `mingcute:close-line` : `gg:menu-right-alt`'
                                size='2rem'
                                @click=toggleMobileMenuDrawer
                            />
                        </div>
                    </Transition>
                    <MobileMenuDrawer
                        :open=isMobileMenuDrawerOpen
                        :activeLink=activeLink
                        @close=toggleMobileMenuDrawer(false)
                    />
                </button>
            </Container>
        </header>
    </Teleport>
</template>

<style module lang='scss'>
.header {
    position: fixed;
    top: 0;

    width: 100%;
    height: var(--header-height);

    background: var(--color-main-bg);
    backdrop-filter: $backdrop-filter;

    @media (max-width: $lg) {
        border: var(--header-border-size) solid rgba(45, 46, 50, .2);
    }

    & > .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;

        .logo {
            & > svg {
                height: 1rem;
            }
        }
        .nav-links {
            display: flex;
            align-items: center;
            column-gap: 20px;

            height: 100%;

            list-style: none;

            .link {
                text-transform: capitalize;
            }
        }
    }
}
</style>