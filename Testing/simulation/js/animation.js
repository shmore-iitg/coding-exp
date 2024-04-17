var currentAnimationIndex = 0;
var animations = [];

function loadNextAnimation(animationPaths) {
    if (currentAnimationIndex >= animationPaths.length) {
        console.log('All animations completed');
        return;
    }

    var animationDiv = document.getElementById('animation_div');
    var animationPath = animationPaths[currentAnimationIndex];

    var animation = lottie.loadAnimation({
        container: animationDiv,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animationPath
    });

    animation.setSpeed(0.5);
    console.log('current animation : ', animationPath);
    animation.addEventListener('complete', () => {
        animation.destroy();
        currentAnimationIndex++;
        loadNextAnimation(animationPaths);
    });

    animations.push(animation);
}

export function updateAnimation(animationPaths) {
    // If there are current animations, destroy them
    animations.forEach(animation => animation.destroy());
    animations = [];

    // Reset the current animation index
    currentAnimationIndex = 0;

    // Start loading the animations
    loadNextAnimation(animationPaths);
}