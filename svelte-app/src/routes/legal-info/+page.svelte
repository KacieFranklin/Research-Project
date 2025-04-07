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
    <p>Welcome to Perseplex! These Terms of Service govern your use of our website, you can create and save your art to use however you like.<br></p>
    <p><strong>License to Use Content</strong></p>
    <p>When you create art using our website, you retain ownership of your artwork.<br></p>
    <p><strong>intellectual Property</strong></p>
    <p>All content on the website, including images, graphics, logos and software, is owned by Perseplex and its developers and is protected by intellectual propert laws.<br></p>
    <p><strong>Prohibited Activities</strong></p>
    <p>You must not engage in any activity that could damage, disable or interfere with the proper functioning of the program.<br></p>
    <p><strong>Modifications of Terms</strong></p>
    <p>We may update or modify these Terms at any time.<br></p>
    <p><strong>Contact Us</strong></p>
    <p>If you have any questions about these Terms, please contact us through the Contact Page.<br></p>
    <button onclick={acceptForm} class="form-submit">Accept</button>
</div>