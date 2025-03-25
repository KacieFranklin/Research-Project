<script>
    let isOpen = false; // Menu state (open/closed)
    function toggleHamburger() {
        isOpen = !isOpen;
        return isOpen;
    }
    function deleteData(){
        localStorage.clear();
        window.location.href = "/";
    }
</script>

<nav>
    <button class="burger" onclick={toggleHamburger} aria-label="Toggle navigation">
        ≡
    </button>

    <div class="hamburger-menu">
        <ul class:open={isOpen}>
            <span><a href="/home">Home</a></span>
            <span><a href="/about">About</a></span>
            <span><a href="/contact">Contact Us</a></span>
            <span><a href="/legal-info">Terms of Use</a></span>
            <span><a href="/news">Blog/News</a></span>
            <span><a href="/products">Products and Services</a></span>
            <span><a href="/questions">FAQ</a></span>
            <span><a href="/404-error">4̷͈̚0̶̩̫͂͝4̶̯̽̈́ͅ-̷̛͎̃p̸͔͒ḁ̴̢̉̋g̵͔̏e̵͙̣̽̐</a></span>
            <span><button onclick={deleteData}>Delete Data</button></span>
        </ul>
    </div>
</nav>
