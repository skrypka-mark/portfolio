<script setup>
const contactLinks = [
    { iconName: 'maki:post', name: 'email', link: 'mark.skrypka@gmail.com' },
    { iconName: 'mdi:linkedin', name: 'linkedin', link: 'https://linkedin.profile.com' },
    { iconName: 'mdi:github', name: 'gitHub', link: 'https://github.mark.skrypka.com' }
];
</script>

<template>
    <footer id='contact' :class='$style.footer'>
        <Container>
            <div class='flex flex-col gap-y-1.5'>
                <Typography variant='caption'>Contact me</Typography>
                <Typography variant='h2'>Don’t be shy! Hit me up!</Typography>
            </div>
            <ul :class='$style[`contact-links`]'>
                <li :key=contact.name v-for='contact in contactLinks'>
                    <FooterLink v-bind=contact />
                </li>
            </ul>
        </Container>
    </footer>
</template>

<style module lang='scss'>
.footer {
    background: rgba(249, 249, 249, .2);
    padding-block: $section-spaces;

    .contact-links {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 5rem;
    }
}
</style>
