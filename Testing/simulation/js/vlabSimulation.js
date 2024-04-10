// Assuming you have an array of steps, each with a title, procedure, and animation
var steps = [
    {
        title: 'Step 1',
        procedure: ['Procedure 1', 'Procedure 2', 'Procedure 3', 'Procedure 4', 'Procedure 5'],
        animation: './simulation/json/animation1.json',
        help: 'Help content for step 1'
    },
    // More steps...
];

var currentStep = 0;

import { updateAnimation } from './animation.js';
import { updateTitle } from './title.js';
import { updateProcedure } from './procedure.js';
import { updateHelp } from './vlabExtra.js';

function updateContent() {
    var step = steps[currentStep];
    updateAnimation(step.animation);
    updateTitle(step.title);
    updateProcedure(step.procedure, currentStep);
    updateHelp(step.help);
}

// Call updateContent when the page loads and when the start/prev button is clicked
window.onload = updateContent;
document.getElementById('start-prev-button').addEventListener('click', function() {
    currentStep = (currentStep + 1) % steps.length;
    updateContent();
});