<script setup lang='ts'>
const contactLinks = [
    { iconName: 'maki:post', name: 'email', description: 'mark.skrypka@gmail.com', link: 'mailto:mark.skrypka@gmail.com' },
    { iconName: 'mdi:linkedin', name: 'linkedin', description: 'www.linkedin.com/in/mark-skrypka', link: 'https://www.linkedin.com/in/mark-skrypka' },
    { iconName: 'mdi:github', name: 'gitHub', description: 'github.com/skrypka-mark', link: 'https://github.com/skrypka-mark' }
];
</script>

<template>
    <footer id='contact' :class='$style.footer'>
        <Container class='flex flex-col'>
            <div class='flex flex-col gap-y-1.5 max-lg:text-center'>
                <Typography variant='caption'>Contact me</Typography>
                <Typography variant='h2'>Don’t be shy! Hit me up!</Typography>
            </div>
            <ul :class='$style[`contact-links`]' class='max-md:self-center'>
                <li :key=contact.name v-for='contact in contactLinks'>
                    <FooterLink v-bind=contact />
                </li>
            </ul>
        </Container>
    </footer>
</template>

<style module lang='scss' src='./styles.module.scss' />
