<script>
// @ts-nocheck
    
    import { goto } from '$app/navigation';
    /**
	 * @type {HTMLDivElement}
	 */
    let container;
  
    let layers = [
      {
        depth: 2,
        image: "Background.png",
        type: 'image',
        z: 0,
        el: null
      },
      { depth: 4, color: 'rgba(255, 190, 230, 0.25)', type: 'blur', z: 1, el: null },
      {
        depth: 10,
        image: "Paint.png",
        type: 'image',
        z: 2,
        el: null
      },
    ];
  
    function handleMouseMove(e) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
  
      for (const layer of layers) {
        if (layer.el) {
          const moveX = -x * layer.depth * 30;
          const moveY = -y * layer.depth * 30;
          // @ts-ignore
          layer.el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        }
      }
    }
  
    function startDrawing() {
      goto('/dynamic');
    }
</script>
  
  <section class="parallax-wrapper">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="parallax" bind:this={container} on:mousemove={handleMouseMove}></div>
      {#each layers as layer}
        {#if layer.type === 'image'}
        
          <div
            class="layer image"
            style="background-image: url('{layer.image}'); z-index: {layer.z};"
            bind:this={layer.el}>
          </div>
    
        {:else if layer.type === 'blur'}
          <div
            class="layer blur"
            style="background-color: {layer.color}; z-index: {layer.z};"
            bind:this={layer.el}></div>
        {/if}
      {/each}
  
      <div class="hero-text">
        <h1>Perseplax</h1>
        <p>Create Without Code</p>
        <button class="start-btn" on:click={startDrawing}>
          Start Drawing
        </button>
      </div>
  </section>
  
  <style>
    .parallax-wrapper {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
  
    .parallax {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  
    .layer {
      position: absolute;
      width: 120%;
      height: 120%;
      top: 0;
      left: 0;
      transition: transform 0.1s ease-out;
      will-change: transform;
      pointer-events: none;
    }
  
    .blur {
      filter: blur(100px);
      border-radius: 10%;
    }
  
    .image {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  
    .hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 10;
    }
  
    .hero-text h1 {
      font-size: 4rem;
      background: linear-gradient(90deg, #21213c,  #ad37d4);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 5px #da88e0;
      margin-bottom: 0.5rem;
    }
  
    .hero-text p {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
    }
  
    .start-btn {
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      background: linear-gradient(90deg,  #21213c,  #ad37d4);
      color: white;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 12px rgba(200, 100, 255, 0.25);
    }
  
    .start-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(200, 100, 255, 0.4);
    }
  
    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 4rem;
      }
  
      .hero-text p {
        font-size: 1.5rem;
      }
  
      .start-btn {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }

      .layer {
        width:fit-content;
      }
    }

    @media (max-width: 576px){
      .layer{
        width: 250%;
        height: 150%;
      }

      .hero-text h1 {
        font-size: 5rem;
      }

      .hero-text p {
        font-size: 2rem;
      }

      .start-btn {
        font-size: 2rem;
      }
    }

    @media (max-width: 768px) {
      .layer {
        width: 200%;
      }
    }

  </style>