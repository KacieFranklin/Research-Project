let text = "SAMPLE TEXT" // TEST for code functionality outside of load function

/** @type {import('./$types').PageLoad} */
export function load({ params }){
    if (localStorage.getItem("stored_data") == null) {
        window.location.href = "/legal-info";
        localStorage.setItem("stored_data", "first");
    }
    else if (localStorage.getItem("stored_data") == "first") {
        localStorage.setItem("stored_data", "returning");
        localStorage.removeItem("stored_data");
    }
    else {
        //window.location.href = "/dynamic";
    }

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
    return {
        canvas: 'Canvas for ${params.homepage} goes here',
        sample: text
    };
}