<svelte:head>
    <title>About Us!</title>
</svelte:head>

<a href="/home">Home</a><script>
  import { fade } from 'svelte/transition';
</script>

<section class="about" in:fade={{ duration: 400 }}>
  <h1>👋 About Us</h1>
  <p class="intro">
    We're building a tool that helps you make super clean, visuals for your website — without needing to code a thing.
  </p>

  <div class="content">
    <div class="content-item">
      <h2>✨ What It Does</h2>
      <p>
        With our unique parallax tech, you can turn flat images into layered, scroll-reactive visuals. Upload an image, set your layers, and export ready-to-use HTML/CSS — simple as that.
      </p>
    </div>

    <div class="content-item">
      <h2>🎯 Why We Built It</h2>
      <p>
        We wanted something that makes sites feel more alive, but without the complexity. Designers and developers can both use it — or just anyone who wants to make something cool.
      </p>
    </div>

    <div class="content-item">
      <h2>🚀 Still Cooking</h2>
      <p>
        We're actively adding new features, smoothing the UX, and fine-tuning the export experience. Got feedback? We’d love to hear it!
      </p>
    </div>
  </div>
</section>

<style>
  .about {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    border-radius: 20px;
    color: #333;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .intro {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
  }

  .intro:hover {
    transform: scale(1.04);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content-item {
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Reduced gap between heading and paragraph */
  }

  .content-item:hover {
    transform: scale(1.04);
  }

  .content-item h2 {
    font-size: 1.5rem;
    color: #222;
    margin-bottom: 0.3rem; /* Reduced margin between h2 and p */
  }

  .content-item p {
    margin-top: 0; /* Removed margin-top for tighter spacing */
    line-height: 1.6;
    color: #444;
  }

  @media (max-width: 600px) {
    .about {
      padding: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    .content-item h2 {
      font-size: 1.3rem;
    }
  }
</style>
