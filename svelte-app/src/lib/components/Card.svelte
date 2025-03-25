<script>
    export let title = "Card Title";
    export let link = "/error";
    export let photo = "/Placeholder.png";
    export let description = "This is a brief description of the card";
</script>

<div class="card">
    <img src={photo} alt="Placeholder">
    
    <div class="content">
        <h2><a href={link}>{title}</a></h2>
        <p>{description}</p>
    </div>
</div>

<style>
    

    :global(.gallery > .card:first-child) {
        border: 5px solid gold;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:not(:first-child):not(:last-child)) {
        border: 5px solid cyan;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:last-child) {
        border: 5px solid crimson;
        box-shadow: 10px 10px 5px rgb(240, 128, 240);
    }

    :global(.gallery > .card:hover) {
        transform: scale(1.5);
        box-shadow: 10px 10px rgb(240, 128, 240);
        z-index: 2;
    }

    :global(.gallery > .card:hover ~ .card) {
        transform:scale(0.9);
        opacity: 0.8;
    }

    :global(.gallery > .card:hover + .card) {
        transform: scale(0.9);
        opacity: 0.8;
    }

    .card{
        background:#21213c;
        border-radius: 18px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow:hidden;
        width:280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card > img{
        width:100%;
        height:auto;
        border-radius: 8px 8px 0 0;
    }

    .content{
        padding:1.5rem;
    }

    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .content p {
        font-size: 1rem;
        color: #e0e5e9;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        box-shadow: 15px 15px  rgb(240, 128, 240);
    }

    .content h2::before {
        content: "";
        display:block;
        width:40%;
        height:2px;
        background: #da88e0;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    .card:hover .content h2::before {
        width: 80%;
    }
</style>