<script>
    let { children } = $props();

    function deleteData(){
        localStorage.clear();
        window.location.href = "/";
    }
</script>

<nav>
    <span><a href="/home">Home</a></span>
    <span><a href="/about">About</a></span>
    <span><a href="/contact">Contact Us</a></span>
    <span><a href="/legal-info">Terms of Use</a></span>
    <span><a href="/news">Blog/News</a></span>
    <span><a href="/products">Products and Services</a></span>
    <span><a href="/questions">FAQ</a></span>
    <span><a href="/404-error">4̷͈̚0̶̩̫͂͝4̶̯̽̈́ͅ-̷̛͎̃p̸͔͒ḁ̴̢̉̋g̵͔̏e̵͙̣̽̐</a></span>
    <span><button onclick={deleteData}>TEST</button></span>
</nav>

<!-- svelte-ignore a11y_invalid_attribute -->
<a href="javascript:window.history.back()">Go Back</a>

{@render children()}

<footer>
    <div style="position:fixed;bottom:45px;background-color:#446;z-index:8">
        <a href="https://svelte.dev/docs/kit">Svelte Documentation</a><br>
    </div>
    <p>2025 Art Website. All rights reserved</p>
</footer>
