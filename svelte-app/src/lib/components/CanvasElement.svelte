<script>
    /** @type {Image}*/
    export class layer {
        /**
         * @param image {Image}
         * @param depth {Number}
         * @param height {Number}
         * @param width {Number}
         * @param defaultX {Number}
         * @param defaultY {Number}
         */
        constructor(image,depth,height,width,defaultX,defaultY){
            this.data = image;
            this.depth = depth;
            this.h = height * depth;
            this.w = width * depth;
            this.x = defaultX - (this.w - width) / 2;
            this.y = defaultY - (this.h - height) / 2;
        }
        calcParallax() {
        }
    }
</script>

<script module>
    const text = "SAMPLE TEXT" // TEST for code functionality outside of load function

    /** @param {import('./$types').PageLoad} params */
    export function load({ params }){
        return {
            canvas: "<canvas> </canvas>",
            sample: text
        };
    }
</script>

{@html load.params.canvas}