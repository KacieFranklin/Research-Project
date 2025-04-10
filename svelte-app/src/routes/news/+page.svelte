<svelte:head>
    <title>Blog</title>
</svelte:head>

<a href="/home">Home</a><script>
    import { fly, slide, fade } from 'svelte/transition';
  
    let posts = [
      {
        title: "Introducing Perseplax 🎉",
        excerpt: "We just launched our tool! Here's what it does and why you'll love it.",
        content: `Perseplax lets you turn flat images into layered, motion-powered visuals. Whether it's a landing page or product section, your site just got way cooler. No code needed—just upload, set your layers, and hit export.`,
        date: "March 28, 2025",
        expanded: false
      },
      {
        title: "Tips for Epic Parallax Images",
        excerpt: "Quick tips to get the most out of your visuals using our tool.",
        content: `• Use subtle movement for depth.\n• Make foreground layers pop with contrast.\n• Try parallax on headers, product shots, and even icons!\n\nExperiment and have fun—the tool is super flexible.`,
        date: "March 20, 2025",
        expanded: false
      },
      {
        title: "Behind the Scenes: How It Works",
        excerpt: "A peek into the tech and design choices powering the experience.",
        content: `We combine CSS transforms, layer masking, and optional WebGL effects for smooth, hardware-accelerated visuals. It’s all about keeping performance high while giving you full control over the vibe.`,
        date: "March 15, 2025",
        expanded: false
      }
    ];

    /** @param {number}index */
    function togglePost(index) {
      posts[index].expanded = !posts[index].expanded;
    }
  </script>
  
  <section class="blog" in:fade={{ duration: 400 }}>
    <h1>📰 Latest News</h1>
    <p>Stay in the loop with updates, tips, and behind-the-scenes posts.</p>
  
    <div class="posts">
      {#each posts as post, i (post.title)}
        <article class="card" transition:fly={{ y: 20, duration: 400 }}>
          <h2>{post.title}</h2>
          <p class="date">{post.date}</p>
          <p>{post.excerpt}</p>
  
          {#if post.expanded}
            <div transition:slide class="full-content">
              <p>{post.content}</p>
            </div>
          {/if}
  
          <button class="read-more" on:click={() => togglePost(i)}>
            {post.expanded ? 'Show less ↑' : 'Read more →'}
          </button>
        </article>
      {/each}
    </div>
  </section>
  
  <style>
    .blog {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #da88e0, #21213c);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: #fff;
  box-sizing: border-box;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: left;
  transition: transform 0.3s ease;
  overflow: hidden;
  border: 2px solid #4b0082; /* Dark purple border */
  box-sizing: border-box;
}

.card:hover {
  transform: translateY(-5px);
}

.card h2 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 0.8rem;
}

.card p {
  color: #eee;
  font-size: 1rem;
  line-height: 1.4;
}

.full-content {
  margin-top: 1rem;
  white-space: pre-line;
  color: #fdfdfd;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.8rem;
}

.read-more {
  margin-top: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
  transition: opacity 0.3s;
}

.read-more:hover {
  opacity: 0.8;
}

@media (max-width: 576px) {
  .blog {
    padding: 1.2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .card h2 {
    font-size: 1.3rem;
  }

  .card p,
  .read-more {
    font-size: 0.95rem;
  }
}
  </style>
