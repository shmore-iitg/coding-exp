// Create an array of all procedures
var allProcedures = [
    '1. Discard the media',
    '2. Get the PBS',      
    '3. Discard the PBS',
    '4. Adjust pipette to measure 400 ÂµL of PBS',
    '5. Add PBS over the cells',
    '6. Shake the dish',
    '7. Discard the PBS',
    '8. Repeat steps 3-6',
    '9. PBS to Dish thourgh pipette',
    '10. Scrape the cells to dettach them from the dish',
    '11. Transfer cells to microcentrifuge tubes',
    '12. Set up the centrifuge',
    '13. Centrifuge the samples at 12000g for 5 minutes at 4Â°C',
    '14. Transfer the microcentrifuge tubes',
    '15. Unload the Centrifuge after 30 mins',
    '16. Transfer the centrifuged samples to ice box',
    '17. End of step 1'
    ];

// Assuming you have an array of steps, each with a title, procedure, and animation
var steps = [
    {
        title: 'Step 1 : Sample Preparation 1',        
        content_type: 'animation',
        playing_content: [
            '../simulation/json/01_Dispose.json',
            '../simulation/json/02_Suck.json',
            '../simulation/json/03_Media_Dispose.json',           
        ],
        help: 'Help content for step 1'
    },
    {
        title: 'Step 1 : Sample Preparation 2',
        content_type: 'image',
        playing_content: ['../simulation/json/8_Transfer_Tank_Full.png'],
        help: 'Help content for step 2'
    },
    {
        title: 'Step 1 : Sample Preparation 3',
        content_type: 'animation',
        playing_content: [
            '../simulation/json/animation1.json',
            '../simulation/json/15_Scraper_Appear.json'            
        ],
        help: 'Help content for step 3'
    },
    {
        title: 'Step 1 : Sample Preparation 4',
        content_type: 'image',
        playing_content: ['../simulation/json/8_Transfer_Tank_Empty.png'],
        help: 'Help content for step 4'
    }
    // More steps...
];

var currentStep = 0;

console.log('Initial currentStep:', currentStep);

import { updateAnimation } from './animation.js';
import { updateTitle } from './title.js';
import { updateProcedure } from './procedure.js';
import { updateHelp } from './vlabExtra.js';

function updateContent() {
    var step = steps[currentStep];
    var nextButton = document.getElementById('next-end-button');
    var prevButton = document.getElementById('start-prev-button');

    // Always show the Next and Prev buttons
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';

    if (step.content_type === 'animation') {
        // If the content_type is 'animation', call updateAnimation
        updateAnimation(step.playing_content);
    } else if (step.content_type === 'image') {
        // If the content_type is 'image', render the image in the animation_div
        var animationDiv = document.getElementById('animation_div');
        animationDiv.innerHTML = '';
        step.playing_content.forEach(function(imagePath) {
            var img = document.createElement('img');
            img.src = imagePath;
            animationDiv.appendChild(img);
        });
    }
    updateTitle(step.title);
    
    // Get a slice of 5 procedures centered around the current step
    var start = Math.max(0, currentStep - 2);
    var end = Math.min(allProcedures.length, start + 5);
    var procedures = allProcedures.slice(start, end);
    
    // Pass the slice of procedures to updateProcedure
    updateProcedure(procedures, currentStep - start);
    
    updateHelp(step.help);
}

// Call updateContent when the page loads and when the start/prev button is clicked
window.onload = updateContent;
document.getElementById('start-prev-button').addEventListener('click', function() {
    currentStep = (currentStep + 1) % steps.length;
    updateContent();
});
document.getElementById('start-prev-button').addEventListener('click', function() {
    // Change the button text to 'Prev' after the first click
    this.textContent = 'Prev';
    currentStep = (currentStep + 1) % steps.length;
    updateContent();
});

// Add event listener to next button
document.getElementById('next-end-button').addEventListener('click', function() {
    // Increment currentStep, but don't go past the last step
    currentStep = Math.min(currentStep + 1, steps.length - 1);

    // Update the content
    updateContent();
    console.log('Updated currentStep:', currentStep);
});

// Add event listener to previous button
document.getElementById('start-prev-button').addEventListener('click', function() {
    // Decrement currentStep, but don't go below 0
    currentStep = Math.max(currentStep - 1, 0);

    // Update the content
    updateContent();
});