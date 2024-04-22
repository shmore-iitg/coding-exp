window.onload = function() {
    var animations = [        
        './flow_animations/1_Histopaque_Tube.json',
        './flow_animations/2_PBS_Blood.json',
        './flow_animations/3_Blood_Histopaque.json',
        './flow_animations/4_Blood_Centrifuge.json',
        './flow_animations/5_Remove_Cells.json',
        './flow_animations/6_Centrifuge_Again.json',
        './flow_animations/7_Remove_Cells_Again.json',
        './flow_animations/8_Centrifuge_Again.json',
        './flow_animations/9_Dispose_Excess.json',
        './flow_animations/10_Mix_Vial_Final.json'        
    ];
    var procedures = [ 
        'Fill up tubes with Histopaque',
        'Mix PBS to the blood sample well',
        'Add the blood to Histopaque',
        'Centrifuge the blood sample',
        'Remove the cells from the tubes',
        'Centrifuge the tubes again',
        'Remove the cells again',
        'Centrifuge the tubes again',
        'Dispose excess of liquid',        
        'Mix the vial for final step',        
        'Collect 400 uL of PBS in the pipette',
        'Add the PBS into the petri dish',
        'Rohit, please suggest the text for this step'
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