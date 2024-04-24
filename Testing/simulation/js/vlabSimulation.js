// Create an array of all procedures
    var allProcedures = [ 
        '1. Dispose of the media in the petri dish',        
        '2. Collect the PBS with the pipette',
        '3. Add 400uL of PBS to the petri dish',
        '4. Shake the petri dish for 5 seconds',
        '5. Dispose of the PBS in the flask',
        '6. Repeat the previous steps',
        '7. Collect 400 uL of the PBS in the pipette and add into the petri dish',
        '8. Scrape the petri dish',               
        '9. Pipette 400 uL of PBS from the petri dish into the vial',
        '10. Move the vial to the centrifuge',        
        '11. Load the vial into the centrifuge',
        '12. Unload the vial from the centrifuge',
        '13. Move the vial to the ice',
        '14. Dispose of the buffer in the flask',
        '15. Mix the marker into the vial',
        '16. Move the vial to the heatblock',
        '17. Take out the marker from the heatblock',        
        '18. Load the marker into the centrifuge',
        '1. Assemble the casting frame',
        '2. Lock the Gasket',
        '3. Mount the Gasket',
        '4. Buffer Information appears',
        '5. Add Resolving Buffer to the Gasket',
        '6. Add a layer of Isopropanol',
        '7. Dispose the Isopropanol',
        '8. Add Water to cleanse the solution',
        '9. Dispose off the excess of water',
        '10. Add the Stacking Buffer',
        '11. Comb the Gasket carefully',
        '1. Take the Holder out',
        '2. Take the Gasket out',
        '3. Assemble the Gasket',
        '4. Lock the Assembly',
        '5. Transfer the Assembly into the Tank',
        '6. Add the Transfer Buffer to the Assembly',
        '7. Add the Transfer Buffer to the Tank',
        '8. Take the Comb out carefully',
        '9. Add the Sample/Marker in a Well',
        '10. Close the Tank',
        '11. Start the Electrophoresis at 120V',
        '1. Remove the Gel cassette',
        '2. Open the Gel cassette',
        '3. Scrape the Wells',
        '4. Soak the Nitrocellulose membrane and the blotting sheets in the Transfer Buffer',
        '5. Transfer the Nitrocellulose sheet to the base of the transfer unit',
        '6. Align the Gel over the Nitrocellulose membrane',
        '7. Cover the soaking sheets over the Gel and roller is used to cover the entire membrane surface',
        '8. Setup the Power Blotter',
        '1. Take the Membrane out of the Powerblotter',
        '2. Transfer the Nitrocellulose membrane into the container and wash with TBST',
        '3. Stain the membrane with Ponceau Solution',
        '4. Transfer the Nitrocellulose membrane to the base of the transfer unit',
        '5. Block the membrane by Blocking Buffer',
        '6. Wash the membrane with TBST in a Fast Wash twice',
        '7. Primary Antibody Incubation',
        '8. Washing with Secondary Antibody',
        '1. ECL reagent preparation in a dark room',
        '2. Transfer the Blot into a black box',
        '3. Complete coverage of the Blot surface with Luminol',
        '4. Load the Chemiluminescence machine with the Blot'
     ];

// Create an array of steps
var steps = [   
    /*{
        title: 'Step 1 : Sample Preparation',
        content_type: 'image',
        playing_content: ['simulation/images/Part_1/1_Dish.png']
    },*/
    {
        title: 'Step 1 : Sample Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/2_Dispose_Media.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: [
            'simulation/json/Part_1_Steps/3_PBS_Drag_Appear.json',
            'simulation/json/Part_1_Steps/4_PBS_Pipette.json'            
        ]
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/5_Pipette_Dish.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/6_Mix_Dish.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/7_PBS_Pipette_Flask.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: [
            'simulation/json/Part_1_Steps/8_Repeat_Steps.json',
            'simulation/json/Part_1_Steps/9_Repeat_Steps.json',
            'simulation/json/Part_1_Steps/10_Repeat_Steps.json',
            'simulation/json/Part_1_Steps/11_Repeat_Steps.json'            
        ]
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: [
            'simulation/json/Part_1_Steps/12_Pipette_PBS.json',
            'simulation/json/Part_1_Steps/13_Pipette_Dish.json'            
        ]
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: [
            'simulation/json/Part_1_Steps/14_Pipette_Table.json',
            'simulation/json/Part_1_Steps/15_Scraper_Appear.json',
            'simulation/json/Part_1_Steps/16_Scrape.json'
        ]
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: [
            'simulation/json/Part_1_Steps/17_Vial_Appear.json',
            'simulation/json/Part_1_Steps/18_Vial_Fill.json',
        ]
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/19_Vial_To_Centrifuge.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/20_Load_Centrifuge.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/21_Unload_Centrifuge.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/22_Centrifuge to Ice.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/23_Buffer_Dispose.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/24_Marker_Mix.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/25_Vial_Heatblock.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/26_Marker_Out_Heatblock.json']
    },
    {
        title: 'Step 1 : Sample Preparation',
        content_type: 'animation',
        playing_content: ['simulation/json/Part_1_Steps/27_Load_Marker_Centrifuge.json']
    },
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/1_Prepare_Gasket.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/2_Gasket_Lock.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/3_Mount.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/4_Buffer_Info.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/5_Resolving_Buffer.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/6_Isopropanol.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/7_Dispose_Isopropanol.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/8_Water_Clean.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/9_Water_Dispose.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/10_Stacking Buffer_Add.json']
    }, 
    {
        title: 'Step 2 : Gel Preparation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_2_Steps/11_Comb_Gasket.json']
    },
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/1_Holder_Out.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/2_Gasket_Out.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/3_Gasket_Assembly.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/5_Assembly_Lock.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/6_Assembly_Tank.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/7_Transfer_Assembly.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/8_Transfer_Tank.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/9_Comb_Out.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/10_Sample_Well.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/11_Tank_Close.json']
    }, 
    {
        title: 'Step 3 : SDS Page',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_3_Steps/12_Electrophoresis.json']
    },
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/1_Gasket_Out.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/2_Gasket_Open.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/3_Scrape_Wells.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/4_Soak_Sheets.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/5_PowerBlotter_Nitrocellulose.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/6_PowerBlotter_Gel.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/7_PowerBlotter_FinalSheets.json']
    }, 
    {
        title: 'Step 4 : Transferring proteins from Gel to Membrane',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_4_Steps/8_PowerBlotter_Setup.json']
    },
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/1_Membrane_Out.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/2_TBST_Wash.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/3_Ponceau_Staining.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/4_TBST Wash.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/5_Blocking_Buffer.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/6_TBST_Fast_Wash.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/7_Primary_Antibody.json']
    }, 
    {
        title: 'Step 5 : Blocking and antibodies incubation',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_5_Steps/8_Secondary_Antibody.json']
    }, 
    {
        title: 'Step 6 : Detection and Inference',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_6_Steps/1_Luminol_Preparation.json']
    }, 
    {
        title: 'Step 6 : Detection and Inference',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_6_Steps/2_Blot_Transfer.json']
    }, 
    {
        title: 'Step 6 : Detection and Inference',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_6_Steps/3_Blot_Soak.json']
    }, 
    {
        title: 'Step 6 : Detection and Inference',        
        content_type: 'animation',
        playing_content: ['simulation/json/Part_6_Steps/4_Load_ChemiDoc.json']
    }/*,
    {
        title: 'Dummy',
        content_type: 'image',
        playing_content: ['simulation/images/Part_1/1_Pipette_Flask_Dish.png']
    }*/
    // More steps...
];

// Get the select element
var selectElement = document.getElementById('stepSelect');

// Add event listener
selectElement.addEventListener('change', function() {
    currentStep = this.value;

    var procedure = allProcedures[currentStep];
    var step = steps[currentStep];

    // Update the animation, title, and procedure on the page
    console.log('In select value change event', step);
    updateAnimation(step.playing_content);
    updateTitle(step.title);
    showProcedure(step);    

    // Reset the select value to "Choose"
    this.value = "";
});

window.currentStep = window.currentStep || 0;

//console.log('Initial currentStep:', currentStep);

import { updateAnimation } from './animation.js';
import { updateTitle } from './title.js';
import { updateProcedure } from './procedure.js';

function updateContent() {
    var step = steps[currentStep];
    var nextButton = document.getElementById('next-end-button');
    var startprevButton = document.getElementById('start-prev-button');
    //var extraLink = document.getElementById('extra_link');    

    // Always show the Next and Prev buttons
    nextButton.style.display = 'block';
    startprevButton.style.display = 'block';
    //extraLink.style.display = 'block';   

    //console.log('Choosing the type', step.content_type);
    if (step.content_type === 'animation') {
        // If the content_type is 'animation', call updateAnimation        
        updateAnimation(step.playing_content); 
    } else if (step.content_type === 'image') {        
        // If the content_type is 'image', render the image in the animation_div        
        var img = document.createElement('img');               
        img.onload = function() {
            var animationDiv = document.getElementById('animation_div');
            animationDiv.innerHTML = '';
            animationDiv.innerHTML = img.outerHTML;
        };
        img.src = step.playing_content;                   
    }    
    updateTitle(step.title);    
    showProcedure(step);    
}

function showProcedure(step) {
    // Get a slice of 5 procedures centered around the current step
    var start = Math.max(0, currentStep - 2);
    var end = Math.min(allProcedures.length, start + 5);
    var procedures = allProcedures.slice(start, end);   
    updateProcedure(procedures, currentStep - start);
}

window.onload = function() {
    document.getElementById('next-end-button').style.display = 'none';
    document.getElementById('stepSelect').style.display = 'none';
};

// Get the 'start-prev-button'
var startPrevButton = document.getElementById('start-prev-button');

// Set its initial text to 'Start'
startPrevButton.textContent = 'Start';

// Variable to track whether the 'start-prev-button' has been clicked for the first time
var isFirstClick = true;

// Add an event listener that changes its text to 'Prev' and updates the content when clicked
startPrevButton.addEventListener('click', function() {  
    document.getElementById('next-end-button').style.display = 'inline'; // or 'block'
    document.getElementById('stepSelect').style.display = 'block'; // or 'inline'  
    this.textContent = 'Prev';
    
    if (isFirstClick) {
        isFirstClick = false;
    } else {
        // Decrement currentStep, but don't go below 0
        currentStep = Math.max(currentStep - 1, 0);
    }    
    updateContent();
});

// Add event listener to next button
document.getElementById('next-end-button').addEventListener('click', function() {
     // Increment currentStep, but don't go past the last step
     if (currentStep < steps.length - 1) {
        currentStep++;
    }
    updateContent();
});

// Assuming the tooltip container is closed by clicking a button with the id 'close-tooltip'
//document.getElementById('close_tooltip_container').addEventListener('click', function() {
    // Ensure the 'Next' button is visible
  //  document.getElementById('next-end-button').style.display = 'block';
//});