
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	export let colors = [
		'#d58141',
		'#d7c44c',
		'#4fa9cc',
		'#3f8d27',
	]
	
	/**
	 * @type {string | String | Number | null | undefined}
	 */
	 export let paletteColor
	export let background = '#fff'
</script>

<section>
	<div>
		{#each colors as color}
		<button 
						on:click="{() => {
							dispatch('color', { color })
							paletteColor = color
						}}"
						style:background={color}>
			<span class="visually-hidden">
				Select the color {color}
			</span>
		</button>
		{/each}
	</div>
	
	<button 
					on:click={() => {
						dispatch('color', { color: background })
						paletteColor = background
					}}
					style:background>
		<span class="visually-hidden">
			Select the background color to clear the canvas
		</span>
	</button>
	
	<svg style:color={paletteColor} viewBox="-50 -50 100 100">
		<g fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round">
			<path d="M -38 12 a 38 38 0 0 0 76 0 q 0 -28 -38 -62 -38 34 -38 62" />
		</g>
	</svg>	
</section>
	

<style>
	section {
		--size: 2.75rem;
		padding: 1rem;
        padding-right: 4rem;
		display: flex;
        flex-direction: column;
        position: absolute;
        left:5%;
		align-items: center;
		gap: 0 1rem;
	}
	
	section > div {
		flex-grow: 1;
	}
	
	section > svg {
		flex-shrink: 0;
	}
	
	div {
		display: flex;
        flex-direction: column;
		gap: 0 0.5rem;
		align-items: center;
		overflow-x: auto;
	}
	
	div::-webkit-scrollbar {
		height: 0.25rem;
	}

	div::-webkit-scrollbar-track {
		background: hsl(0, 0%, 100%);
	}

	div::-webkit-scrollbar-thumb {
		background: currentColor;
	}
	
	div button {
		flex-shrink: 0;
	}
	
	button,
	section > svg {
		width: var(--size);
		height: var(--size);
	}
	
	button  {
		cursor: pointer;
		border-radius: 50%;
		margin: 0;
	}
	
	section > svg {
		display: block;
	}

   

    @media (max-width:768px) {
        section {
            position: absolute;
            right: 80%;
        }
    }

    @media (max-width:576px) {
        section {
            padding: 1rem;
            position:absolute;
            left:5%;
        }
    }

    @media (min-width: 769px) {
        section {
            position: absolute;
            right: 80%; 
        }
    }
    
</style>