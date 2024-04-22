window.onload = function() {
    var animations = [        
        './chicken_animations/1_Inspect_Egg.json',
        './chicken_animations/2_Day_2.json',
        './chicken_animations/3_Day_3.json',
        './chicken_animations/4_Day_4.json',
        './chicken_animations/5_Day_5.json',
        './chicken_animations/6_Day_6.json',
        './chicken_animations/7_Day_7.json',
        './chicken_animations/8_Day_8.json',
        './chicken_animations/9_Day_9.json',
        './chicken_animations/10_Day_10.json',
        './chicken_animations/11_Day_11.json',
        './chicken_animations/12_Day_12.json',
        './chicken_animations/13_Day_13.json',
        './chicken_animations/14_Day_14.json',
        './chicken_animations/15_Day_15.json',
        './chicken_animations/16_Day_16.json',
        './chicken_animations/17_Day_17.json',
        './chicken_animations/18_Day_18.json',
        './chicken_animations/19_Day_19.json',
        './chicken_animations/20_Day_20.json',
        './chicken_animations/21_Day_21.json'        
    ];
    var procedures = [ 
        'Day 1',
        'Day 2',
        'Day 3',
        'Day 4',
        'Day 5',
        'Day 6',
        'Day 7',
        'Day 8',
        'Day 9',
        'Day 10',
        'Day 11',
        'Day 12',
        'Day 13',
        'Day 14',
        'Day 15',
        'Day 16',
        'Day 17',
        'Day 18',
        'Day 19',
        'Day 20',
        'Day 21'
     ];
    var currentAnimation = -1;
    var animation;    

    var currentImageIndex = 0;
    
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