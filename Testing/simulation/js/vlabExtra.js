export function updateHelp(steps, currentStep) {
    var helpDiv = document.getElementById('help_div');
    helpDiv.textContent = 'Extra..';
    helpDiv.href = '#';
    helpDiv.onclick = function() {
        if (helpDiv.textContent === 'Extra..') {
            helpDiv.textContent = steps[currentStep].help;
        } else {
            helpDiv.textContent = 'Extra..';
        }
    };
}