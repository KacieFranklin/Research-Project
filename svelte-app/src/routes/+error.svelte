<script lang="ts">
	import { onMount } from "svelte";

    //** @type {HTMLElement}*/
    let errorMessage:HTMLElement;
    let foo = localStorage.getItem("foo");
    onMount(() => {
        if (foo != null){
            errorMessage.innerHTML = foo;
        }
    })
</script>

<svelte:head>
    <title>404-error</title>
</svelte:head>

<h1>Error: Page Not Found</h1>
<p bind:this={errorMessage}></p>
<a href="/home">Home</a><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<p>text</p>
