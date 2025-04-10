<script>

</script>

<header>
    <div class="logo">
        <img src="Logo.png" alt="Website Logo">
        <h1>Perseplax</h1>
    </div> 
</header>

<style>
    header {
        display: flex;
        align-items: center;
        color: white;
        position: absolute;
        bottom: 625px;
        z-index: 9;
        justify-content: space-between;
        padding: 1rem;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img{
        width: 50px;
        margin: right 0.625em;
    }

    @media (max-width: 576px) {
        header{
            visibility: hidden;
        }
    }

    @media (max-width: 768px) {
        header {
            visibility: hidden;
        }
    }
</style>
