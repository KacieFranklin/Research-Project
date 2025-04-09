<script>
    import { Header, Navigation, Footer, } from "$lib";
    let { children } = $props();

</script>


<!-- svelte-ignore a11y_invalid_attribute -->
<a href="javascript:window.history.back()">Go Back</a>

{@render children()}

<Header />

<header>
    <Navigation />
</header>

<Footer />

