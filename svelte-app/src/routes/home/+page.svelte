<svelte:head>
    <title>Homepage</title>
</svelte:head>

<h1>Homepage</h1>
<h2>Create Amazing Digital Effects</h2>
<p>With our unique parallax technology you can create epic looking images for your website.<br></p>
<h2>How Does it Work?</h2>
<p>Visit our <a href="/questions">FAQ Page</a> to learn how the tool works<br></p>
<p>And visit our <a href="/about">About section</a> to learn about us too<br></p>

<!-- TEST -->
<p>{data.sample}</p>

<!-- temp button for debug -->
<!--<button on:click={clearData}>Clear localStorage</button>--> 

<script>
  import Parallax from "$lib/components/Parallax.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<h1><br><a href="/dynamic">Start Drawing!</a><br></h1>
<br><br><br>
<canvas class="sample">{@html data.canvas}</canvas>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<br><br><br>
<p>there's text down here</p>
