<script>
    import { Navigation, Footer } from "$lib";
    let { children } = $props();
</script>

<header>
    <Navigation />
</header>

<Footer />

<!-- svelte-ignore a11y_invalid_attribute -->
<a href="javascript:window.history.back()">Go Back</a>

{@render children()}


