//import lottie from 'lottie-web';

export function updateAnimation(animation) {
    var animationDiv = document.getElementById('animation_div');    
    lottie.loadAnimation({
        container: animationDiv, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animation // the path to the animation json
    });
}   

