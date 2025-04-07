<svelte:head>
    <title>FAQ</title>
</svelte:head>

<a href="/home">Home</a><script>
    import { fade } from 'svelte/transition';
  
    const faqs = [
      {
        question: 'What is this tool for?',
        answer: 'It helps you create animated, parallax-style images for your website with minimal effort — no coding needed.',
      },
      {
        question: 'Do I need to know how to code?',
        answer: 'Nope! Everything is visual. You just upload an image, define layers, and download the output.',
      },
      {
        question: 'Can I use it for commercial projects?',
        answer: 'Yes, you can use the exported code in both personal and commercial websites.',
      },
      {
        question: 'Will it work on mobile?',
        answer: 'Yes, everything exported is mobile-responsive and lightweight for performance.',
      },
    ];
  </script>
  
  <section class="faq" in:fade={{ duration: 400 }}>
    <h1>❓ FAQ</h1>
    <div class="faq-list">
      {#each faqs as item}
        <div class="faq-item">
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .faq {
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
      text-align: center;
      margin-bottom: 2rem;
    }
  
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  
    .faq-item {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.25);
      transition: transform 0.3s ease, background 0.3s ease;
      padding: 1.2rem 1.5rem;
      border-radius: 20px;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07);
      cursor: default;
    }
  
    .faq-item:hover {
      transform: scale(1.04);
      background: rgba(255, 255, 255, 0.3);
    }
  
    .faq-item h2 {
      font-size: 1.3rem;
      margin-bottom: 0.3rem;
      color: #222;
    }
  
    .faq-item p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
    }
  
    @media (max-width: 600px) {
      .faq {
        padding: 1.5rem;
      }
  
      h1 {
        font-size: 2rem;
      }
  
      .faq-item h2 {
        font-size: 1.2rem;
      }
  
      .faq-item p {
        font-size: 0.95rem;
      }
    }
  </style>
