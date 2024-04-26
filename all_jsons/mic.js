window.onload = function() {
    var animations = [   
        './mic_animations/Flow 1.json',     
        './mic_animations/Flow 2.json',
        './mic_animations/Flow 3.json',
        './mic_animations/Flow 4.json',
        './mic_animations/Flow 5.json',
        './mic_animations/Flow 6.json',
        './mic_animations/Flow 7.json'
    ];
    var procedures = [ 
        'MIC 1',
        'MIC 2',
        'MIC 3',
        'MIC 4',
        'MIC 5',
        'MIC 6',
        'MIC 7'
    ];

    var currentAnimation = 0;
    var animation;       

    document.getElementById('startAnimations').addEventListener('click', function() {
        this.style.display = 'none'; // hide the Start button
        document.getElementById('prevAnimation').style.display = 'inline'; // show the Prev button
        document.getElementById('nextAnimation').style.display = 'inline'; // show the Next button        
        currentAnimation = 0;
        playAnimation();
    });

    document.getElementById('nextAnimation').addEventListener('click', function() {
        if (currentAnimation < animations.length - 1) {
            currentAnimation++;
            playAnimation();
        }
        if (currentAnimation === animations.length - 1) {
            this.textContent = 'End';
        }        
    });

    document.getElementById('prevAnimation').addEventListener('click', function() {
        if (currentAnimation > 0) {
            currentAnimation--;
            playAnimation();
        }        
    });  

    function playAnimation() {
        if (animation) {
            animation.destroy(); // destroy the previous animation
        }
        document.getElementById('lottieContainer').innerHTML = ''; // clear the lottieContainer div
        animation = lottie.loadAnimation({
            container: document.getElementById('lottieContainer'), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: animations[currentAnimation] // the path to the animation json
        });

        // Only update the count and procedure_step divs if the animation is not already playing
        if (!animation.isLoaded) {
            // Extract the filename from the path
            var filename = animations[currentAnimation] ? animations[currentAnimation].split('/').pop() : '';
            document.getElementById('count').innerText = (currentAnimation + 1) + ' : ' + filename;

            // Display the corresponding procedure step
            var procedure = procedures[currentAnimation] || '';
            document.getElementById('procedure_step').innerText = procedure;
        }

        animation.play();
    }
}