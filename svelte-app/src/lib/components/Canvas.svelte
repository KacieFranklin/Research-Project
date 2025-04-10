<script>
	import { onMount } from 'svelte'
	
	export let width = 1000
	export let height = 500
	export let color = '#333'
	export let background = '#fff'
	
	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;
	/**
	 * @type {CanvasRenderingContext2D | null}
	 */
	let context;
	/**
	 * @type {boolean}
	 */
	let isDrawing;
	/**
	 * @type {{ x: any; y: any; }}
	 */
	let start;
	
	/**
	 * @type {number}
	 */
	let t
    /**
	 * @type {number}
	 */
    let l
	
	onMount(() => {
		context = canvas.getContext('2d')
		// @ts-ignore
		context.lineWidth = 3
		
		handleSize()
	})
	
// @ts-ignore
		$: if(context) {
			context.strokeStyle = color
	}
	
	// @ts-ignore
	const handleStart = (({ offsetX: x, offsetY: y }) => { 
		if(color === background) {
			// @ts-ignore
			context.clearRect(0, 0, width, height)
		} else {
			isDrawing = true
			start = { x, y }
		}
	})
	
	const handleEnd = () => { isDrawing = false }
	// @ts-ignore
	const handleMove = (({ offsetX: x1, offsetY: y1 }) => {
		if(!isDrawing) return
		
		const { x, y } = start
		// @ts-ignore
		context.beginPath()
		// @ts-ignore
		context.moveTo(x, y)
		// @ts-ignore
		context.lineTo(x1, y1)
		// @ts-ignore
		context.closePath()
		// @ts-ignore
		context.stroke()
		
		start = { x: x1, y: y1 }
	})
	
	const handleSize = () => {
		const { top, left } = canvas.getBoundingClientRect()
		t = top
		l = left
	}
</script>

<svelte:window on:resize={handleSize} />

<canvas
				{width}
				{height}
				style:background
				bind:this={canvas} 
				on:mousedown={handleStart}	
				on:touchstart={e => {
					const { clientX, clientY } = e.touches[0]
					handleStart({
						offsetX: clientX - l,
						offsetY: clientY - t
					})
				}}	
				on:mouseup={handleEnd}				
				on:touchend={handleEnd}				
				on:mouseleave={handleEnd}
				on:mousemove={handleMove}
				on:touchmove={e => {
					const { clientX, clientY } = e.touches[0]
					handleMove({
						offsetX: clientX - l,
						offsetY: clientY - t
					})
				}}>
</canvas>

<style>
    canvas {
        position:absolute; 
        left:15%;
        top:15%;
    }

    @media (max-width:768px) {
        canvas {
            position: absolute;
            width: 80%;
            height: 70%;
        }
        
    }

    @media (max-width: 576px) {
        canvas {
            position:absolute;
            left:20%;
            width:70%;
            height: 70%;
        }
    }

    @media (min-width: 769px) {
        canvas {
            position: absolute;
            left: 15%; 
            width: 80%;
            height: 70%;
        }
    }
</style>
				