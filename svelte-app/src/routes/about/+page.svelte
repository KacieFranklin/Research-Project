<svelte:head>
    <title>About Us!</title>
</svelte:head>

<a href="/home">Home</a><script>
    import { fade, fly } from "svelte/transition";
  
    let companyName = "Us";
  </script>
  
  <section class="about">
    <h1 transition:fade>About {companyName}</h1>
    <p transition:fade>
      We make images come alive! With our <strong>parallax tool</strong>, you can add depth and motion 
      to your visuals—no coding needed.
    </p>
  
    <h2 transition:fly={{ y: 20, duration: 500 }}>How It Works</h2>
    <p transition:fade>
      Just upload an image, tweak the layers, and let the parallax effect do its thing. 
      Simple, fast, and fun!
    </p>
  
    <h2 transition:fly={{ y: 20, duration: 500 }}>Why Use It?</h2>
    <ul>
      <li transition:fade>🚀 Easy to use—no tech skills required</li>
      <li transition:fade>⚡ Lightweight & smooth animations</li>
      <li transition:fade>🎨 Customizable to fit your style</li>
    </ul>
  
    <p transition:fade>
      Whether you're a designer, developer, or just want cool effects, {companyName} makes 
      it easy to create <strong>epic visuals</strong>. ✨
    </p>
  </section>
  
  <style>
    .about {
      max-width: 700px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      background: linear-gradient(135deg, #c4a7ff, #fad0c4);
      border-radius: 15px;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
      color: #d065ed;
      animation: fadeIn 1s ease-in-out;
    }
  
    h1 {
      font-size: 2.5rem;
      color: #fff;
    }
  
    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  
    h2 {
      margin-top: 1.5rem;
      font-size: 1.8rem;
    }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      font-size: 1.1rem;
      padding: 0.5rem 0;
      transition: transform 0.3s ease-in-out;
    }
  
    li:hover {
      transform: scale(1.05);
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
