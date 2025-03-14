<script>
    import { Navigation } from "$lib";
    let { children } = $props();
</script>

<header>
    <Navigation />
</header>

<!-- svelte-ignore a11y_invalid_attribute -->
<a href="javascript:window.history.back()">Go Back</a>

{@render children()}

<footer>
    <div style="position:fixed;bottom:45px;background-color:#446;z-index:8">
        <a href="https://svelte.dev/docs/kit">Svelte Documentation</a><br>
    </div>
    <p>2025 Art Website. All rights reserved</p>
</footer>
