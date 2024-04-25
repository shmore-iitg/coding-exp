var oldContent;

export var tooltips = [
    {
        id: 'button_flask',
        text: 'Flasks can be used for making solutions or for holding, containing, collecting, or sometimes volumetrically measuring chemicals, samples, solutions, etc. for chemical reactions or other processes such as mixing, heating, cooling, dissolving, precipitation, boiling (as in distillation), or analysis.'
    },
    {
        id: 'button_petri_dish',
        text: 'A petri dish is used to culture different types of cells, including bacteria and molds. It often contains a nutritional medium on which the cells can grow. A petri dish is a flat, shallow dish made of glass or plastic with a suitable lid.'
    },
    {
        id: 'button_pipette',
        text: 'A pipette (sometimes spelled as pipet) is a type of laboratory tool commonly used in chemistry and biology to transport a measured volume of liquid, often as a media dispenser.'        
    },
    {
        id: 'button_pbs',
        text: 'Phosphate buffered saline (PBS) is a non-toxic solution used in many biological laboratories. Unlike water, PBS prevents cells rupturing or shrivelling up due to osmosis.'
    },
    {
        id: 'button_vial',
        text: 'Vials are typically used to store medicines or laboratory samples. Although vials are mainly found in the medical field, they are critical to the workflow in various settings, from law enforcement agencies to department stores.'
    },
    {
        id: 'button_cell_scraper',
        text: 'Cell scrapers are used when it is necessary to harvest cells from a culture vessel without disrupting their viability or integrity. They are particularly useful when cells have formed a monolayer and need to be removed for further analysis, subculturing, or experimental procedures.'
    }
    // Add more objects for the other tooltips...
];

// Function to show a tooltip with the given image and text
export function showTooltip(image, text, event) {
    // Get the animation_div
    var animationDiv = document.querySelector('#animation_div');

    // Save the old content
    oldContent = animationDiv.innerHTML;

    // Check if the animation_div exists
    if (!animationDiv) {
        console.error('animation_div not found');
        return;
    }

    // Set the tooltip's content
    animationDiv.innerHTML = `
    <div id="tooltip-container" class="tooltip-content">
        <button id="close-tooltip" class="close-button">X</button>
        <div class="tooltip-row">
            <div class="tooltip-column"><img id="tooltip-image" src="${image}" alt="Icon"></div>
            <div class="tooltip-column"><span>${text}</span></div>
        </div>
    </div>
    `;

    // Position the tooltip at the position of the clicked button
    var rect = animationDiv.getBoundingClientRect();
    animationDiv.style.left = (event.clientX - rect.left) + 'px';
    animationDiv.style.top = (event.clientY - rect.top) + 'px';

    // Show the tooltip
    animationDiv.style.display = 'block';

    // Add an event listener to the close button
    document.querySelector('#close-tooltip').addEventListener('click', hideTooltip);
}

// Function to hide the tooltip
export function hideTooltip() {
    // Get the animation_div
    var animationDiv = document.querySelector('#animation_div');    
    var tooltipContainer = document.getElementById('tooltip-container');

    // Check if the animation_div exists
    if (!animationDiv) {
        console.error('animation_div not found');
        return;
    }

    // Remove the event listener from the close button
    var closeButton = document.querySelector('#close-tooltip');
    if (closeButton) {
        closeButton.removeEventListener('click', hideTooltip);
    }

    // Clear the tooltip's content
    if (tooltipContainer) {
        tooltipContainer.parentNode.removeChild(tooltipContainer);
        // Replace the content with the old content
        animationDiv.innerHTML = oldContent;
    }
}
