function include(file) {

var script = document.createElement('script');
script.src = file;
script.type = 'text/javascript';
script.defer = true;

document.getElementsByTagName('head').item(0).appendChild(script);

}

/* Include Many js files */
include('https://galapagos.netlify.app/database/block/lv-plugin-1.js');

(function() {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            
            draw();
    }
    resizeCanvas();


})();
