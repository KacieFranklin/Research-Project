<script>
    let { children } = $props();
</script>

<header>
    <nav>
        <div class="link"><a href="/">Home</a></div>
        <div class="link"><a href="/">Home</a></div>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Questions</a></li>
    </nav>
</header>

{@render children()}