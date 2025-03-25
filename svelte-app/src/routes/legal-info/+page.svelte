<svelte:head>
    <title>Legal-Info</title>
</svelte:head>

<script>
    function acceptForm(){
        localStorage.setItem("account-info","first-visit");
        window.location.href = "/home";
    }
</script>

<div id="tos-text">
    <h2>Terms of Service</h2>
    <p>By using this website, you agree to forfeit your rights to reproduction of images created via this website.<br></p>
    <button onclick={acceptForm} class="form-submit">Accept</button>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <p>There's text here</p> 
</div>