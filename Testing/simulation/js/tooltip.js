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

    // Check if a tooltip is currently shown
    var oldTooltip = document.getElementById('tooltip-container');
    if (oldTooltip) {
        // Remove the old tooltip from the DOM
        animationDiv.removeChild(oldTooltip);
    }    

    if (animationDiv) {
        var computedStyle = window.getComputedStyle(animationDiv);
        animationDiv.style.maxWidth = computedStyle.width;
        animationDiv.style.maxHeight = computedStyle.height;
    }

    // Check if a tooltip is not currently shown
    if (!document.getElementById('tooltip-container')) {
        // Save the old animation content
        oldContent = animationDiv.innerHTML;
    }

    // Check if the animation_div exists
    if (!animationDiv) {
        console.error('animation_div not found');
        return;
    }

    // Create a new div for the tooltip
    var tooltipContainer = document.createElement('div');
    tooltipContainer.id = 'tooltip-container';
    tooltipContainer.className = 'tooltip-content';
    tooltipContainer.style.position = 'absolute';
    tooltipContainer.style.top = '20px';
    tooltipContainer.style.left = '20px';
    tooltipContainer.style.width = '500px';
    tooltipContainer.style.height = '500px';
    tooltipContainer.style.overflow = 'auto';

    tooltipContainer.innerHTML = `
        <button id="close-tooltip" class="close-button">X</button>
        <div class="tooltip-row">
            <div class="tooltip-column"><img id="tooltip-image" src="${image}" alt="Icon"></div>
            <div class="tooltip-column"><span>${text}</span></div>
        </div>
        `;
    tooltipContainer.style.paddingTop = '80px';
    tooltipContainer.style.paddingRight = '80px';

    animationDiv.appendChild(tooltipContainer);

    // Add an event listener to the 'close' button
    var closeButton = document.getElementById('close-tooltip');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            hideTooltip();
        });
    }

    // Get the dimensions of #animation_div and the tooltip
    var animationDivRect = animationDiv.getBoundingClientRect();
    var tooltipContainerRect = tooltipContainer.getBoundingClientRect();

    // Calculate the position for the tooltip to be centered in #animation_div
    var left = (animationDivRect.width - tooltipContainerRect.width) / 2;
    var top = (animationDivRect.height - tooltipContainerRect.height) / 2;

    // Position the tooltip
    tooltipContainer.style.left = left + 'px';
    tooltipContainer.style.top = top + 'px';

    // Show the tooltip
    animationDiv.style.display = 'block';
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
