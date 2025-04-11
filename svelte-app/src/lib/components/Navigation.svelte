<script>
    import { base } from '$app/paths';
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
            <span><a href="{base}/home">Home</a></span>
            <span><a href="{base}/about">About</a></span>
            <span><a href="{base}/contact">Contact Us</a></span>
            <span><a href="{base}/legal-info">Terms of Use</a></span>
            <span><a href="{base}/news">Blog/News</a></span>
            <span><a href="{base}/products">Products and Services</a></span>
            <span><a href="{base}/questions">FAQ</a></span>
        </ul>
    </div>
</nav>
