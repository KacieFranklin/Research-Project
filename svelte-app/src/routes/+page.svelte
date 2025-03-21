<svelte:head>
    <title>Homepage</title>
</svelte:head>

<h1>Homepage</h1>
<h2>Create Amazing Digital Effects</h2>
<p>With our unique parallax technology you can create epic looking images for your website.<br></p>
<h2>How Does it Work?</h2>
<p>Visit our <a href="/questions">FAQ Page</a> to learn how the tool works<br></p>
<p>And visit our <a href="/about">About section</a> to learn about us too<br></p>

<!-- temp button for debug -->
<button on:click={clearData}>Clear localStorage</button> 

<script>
    function onload() {
        localStorage.setItem("stored_data", "first"); //TEST
        if (localStorage.getItem("stored_data") == null) {
            window.location.href = "/legal-info";
            localStorage.setItem("stored_data", "first");
        }
        else if (localStorage.getItem("stored_data") == "first") {
            //localStorage.setItem("stored_data", "returning"); //TEST
        }
        else {
            window.location.href = "/dynamic";
        }
    }
    function clearData() {
        localStorage.removeItem("stored_data");
    }
    onload();

    import { CanvasElement } from "$lib";
    let c;
</script>

<h1><br><a href="/dynamic">Start Drawing!</a><br></h1>
<br><br><br>
<canvas bind:this={c}></canvas>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<p>there's text down here</p>
