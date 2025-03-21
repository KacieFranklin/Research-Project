<script module>
    class layer_data {
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