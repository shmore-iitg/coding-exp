window.onload = function() {
    var images = [  
        './animations/Part_1_First_Step_Images/1_Empty.png',
        './animations/Part_1_First_Step_Images/1_Dish.png',        
        './animations/Part_1_First_Step_Images/1_Flask.png',
        './animations/Part_1_First_Step_Images/1_Pipette.png',
        './animations/Part_1_First_Step_Images/1_Flask_Dish.png',
        './animations/Part_1_First_Step_Images/1_Pipette_Dish.png',
        './animations/Part_1_First_Step_Images/1_Pipette_Flask.png',
        './animations/Part_1_First_Step_Images/1_Pipette_Flask_Dish.png'
    ];
    var animations = [        
        './animations/Part_1_Steps/2_Dispose_Media.json',
        './animations/Part_1_Steps/3_PBS_Drag_Appear.json',
        './animations/Part_1_Steps/4_PBS_Pipette.json',
        './animations/Part_1_Steps/5_Pipette_Dish.json',
        './animations/Part_1_Steps/6_Mix_Dish.json',
        './animations/Part_1_Steps/7_PBS_Pipette_Flask.json',
        './animations/Part_1_Steps/8_Repeat_Steps.json',
        './animations/Part_1_Steps/9_Repeat_Steps.json',
        './animations/Part_1_Steps/10_Repeat_Steps.json',
        './animations/Part_1_Steps/11_Repeat_Steps.json',
        './animations/Part_1_Steps/12_Pipette_PBS.json',
        './animations/Part_1_Steps/13_Pipette_Dish.json',
        './animations/Part_1_Steps/14_Pipette_Table.json',
        './animations/Part_1_Steps/15_Scraper_Appear.json',
        './animations/Part_1_Steps/16_Scrape.json',
        './animations/Part_1_Steps/17_Vial_Appear.json',
        './animations/Part_1_Steps/18_Vial_Fill.json',
        './animations/Part_1_Steps/19_Vial_To_Centrifuge.json',
        './animations/Part_1_Steps/20_Load_Centrifuge.json',
        './animations/Part_1_Steps/21_Unload_Centrifuge.json',
        './animations/Part_1_Steps/22_Centrifuge to Ice.json',
        './animations/Part_1_Steps/23_Buffer_Dispose.json',
        './animations/Part_1_Steps/24_Marker_Mix.json',
        './animations/Part_1_Steps/25_Vial_Heatblock.json',
        './animations/Part_1_Steps/26_Marker_Out_Heatblock.json',
        './animations/Part_1_Steps/27_Load_Marker_Centrifuge.json',
        './animations/Part_2_Steps/1_Prepare_Gasket.json',
        './animations/Part_2_Steps/2_Gasket_Lock.json',
        './animations/Part_2_Steps/3_Mount.json',
        './animations/Part_2_Steps/4_Buffer_Info.json',
        './animations/Part_2_Steps/5_Resolving_Buffer.json',
        './animations/Part_2_Steps/6_Isopropanol.json',
        './animations/Part_2_Steps/7_Dispose_Isopropanol.json',
        './animations/Part_2_Steps/8_Water_Clean.json',
        './animations/Part_2_Steps/9_Water_Dispose.json',
        './animations/Part_2_Steps/10_Stacking Buffer_Add.json',
        './animations/Part_2_Steps/11_Comb_Gasket.json',
        './animations/Part_3_Steps/1_Holder_Out.json',
        './animations/Part_3_Steps/2_Gasket_Out.json',
        './animations/Part_3_Steps/3_Gasket_ Assembly.json',
        './animations/Part_3_Steps/5_Assembly_Lock.json',
        './animations/Part_3_Steps/6_Assembly_Tank.json',
        './animations/Part_3_Steps/7_Transfer_Assembly.json',
        './animations/Part_3_Steps/8_Transfer_Tank.json',
        './animations/Part_3_Steps/9_Comb_Out.json',
        './animations/Part_3_Steps/10_Sample_Well.json',
        './animations/Part_3_Steps/11_Tank_Close.json',
        './animations/Part_3_Steps/12_Electrophoresis.json',
        './animations/Part_4_Steps/1_Gasket_Out.json',
        './animations/Part_4_Steps/2_Gasket_Open.json',
        './animations/Part_4_Steps/3_Scrape_Wells.json',
        './animations/Part_4_Steps/4_Soak_Sheets.json',
        './animations/Part_4_Steps/5_PowerBlotter_Nitrocellulose.json',
        './animations/Part_4_Steps/6_PowerBlotter_Gel.json',
        './animations/Part_4_Steps/7_PowerBlotter_FinalSheets.json',
        './animations/Part_4_Steps/8_PowerBlotter_Setup.json',
        './animations/Part_5_Steps/1_Membrane_Out.json',
        './animations/Part_5_Steps/2_TBST_Wash.json',
        './animations/Part_5_Steps/3_Ponceau_Staining.json',
        './animations/Part_5_Steps/4_TBST Wash.json',
        './animations/Part_5_Steps/5_Blocking_Buffer.json',
        './animations/Part_5_Steps/6_TBST_Fast_Wash.json',
        './animations/Part_5_Steps/7_Primary_Antibody.json',
        './animations/Part_5_Steps/8_Secondary_Antibody.json',
        './animations/Part_6_Steps/1_Luminol_Preparation.json',
        './animations/Part_6_Steps/2_Blot_Transfer.json',
        './animations/Part_6_Steps/3_Blot_Soak.json',
        './animations/Part_6_Steps/4_Load_ChemiDoc.json'
    ];
    var procedures = [ 
        'Step 1 - Dispose of the media in the petri dish',
        'Step 1 - PBS appear',
        'Step 1 - Collect the PBS with the pipette',
        'Step 1 - Add 1 mL of PBS to the petri dish',
        'Step 1 - Shake the petri dish for 5 seconds',
        'Step 1 - Dispose of the PBS in the flask',
        'Step 1 - Repeat the previous steps',
        'Step 1 - Repeat the previous steps',
        'Step 1 - Repeat the previous steps',        
        'Step 1 - Repeat the previous steps',        
        'Step 1 - Collect 400 uL of PBS in the pipette',
        'Step 1 - Add the PBS into the petri dish',
        'Step 1 - Rohit, please suggest the text for this step',        
        'Step 1 - Scraper appears',
        'Step 1 - Scrape the petri dish',
        'Step 1 - Vial appears',
        'Step 1 - Pipette 400 uL of PBS from the petri dish into the vial',
        'Step 1 - Move the vial to the centrifuge',        
        'Step 1 - Load the vial into the centrifuge',
        'Step 1 - Unload the vial from the centrifuge',
        'Step 1 - Move the vial to the ice',
        'Step 1 - Dispose of the buffer in the flask',
        'Step 1 - Mix the marker into the vial',
        'Step 1 - Move the vial to the heatblock',
        'Step 1 - Take out the marker from the heatblock',        
        'Step 1 - Load the marker into the centrifuge',
        'Step 2 - Prepare the Gasket',
        'Step 2 - Lock the Gasket',
        'Step 2 - Mount the Gasket',
        'Step 2 - Buffer Informaiton appears',
        'Step 2 - Add Resolving Buffer to the Gasket',
        'Step 2 - Add a layer of Isopropanol',
        'Step 2 - Dispose the Isopropanol',
        'Step 2 - Add Water to cleanse the solution',
        'Step 2 - Dispose off the excess of water',
        'Step 2 - Add the Stacking Buffer',
        'Step 2 - Comb the Gasket carefully',
        'Step 3 - Take the Holder out',
        'Step 3 - Take the Gasket out',
        'Step 3 - Assemble the Gasket',
        'Step 3 - Lock the Assembly',
        'Step 3 - Transfer the Assembly into the Tank',
        'Step 3 - Add the Transfer Buffer to the Assembly',
        'Step 3 - Add the Transfer Buffer to the Tank',
        'Step 3 - Take the Comb out carefully',
        'Step 3 - Add the Sample/Marker in a Well',
        'Step 3 - Close the Tank',
        'Step 3 - Start the Electrophoresis at 120V',
        'Step 4 - Take the Gasket out',
        'Step 4 - Open the Gasket',
        'Step 4 - Scrape the Wells',
        'Step 4 - Soak the Nitrocellulose blotting membrane sheets in the Transfer Buffer',
        'Step 4 - Transfer the Nitrocellulose sheet to the base of the transfer unit',
        'Step 4 - Align the Gel over the Nitrocellulose membrane',
        'Step 4 - Cover the soaking sheets over the Gel and roller is used to cover the entire membrane surface',
        'Step 4 - Setup the Power Blotter',
        'Step 5 - Take the Membrane out of the Powerblotter',
        'Step 5 - Transfer the Nitrocellulose membrane into the container and wash with TBST',
        'Step 5 - Stain the membrane with Ponceau Solution',
        'Step 5 - Wash the membrane 3 times with TBST',
        'Step 5 - Block the membrane by Blocking Buffer',
        'Step 5 - Wash the membrane with TBST in a Fast Wash twice',
        'Step 5 - Primary Antibody Incubation',
        'Step 5 - Washing with Secondary Antibody',
        'Step 6 - Luminol Preparation in a dark room',
        'Step 6 - Transfer the Blot into a black box',
        'Step 6 - Complete coverage of the Blot surface with Luminol',
        'Step 6 - Load the ChemiDoc with the Blot'
     ];
    var currentAnimation = -1;
    var animation;    

    var currentImageIndex = 0;

    var imageSprite = document.getElementById('imageSprite');

    // Create a new img element for the first image
    var img = document.createElement('img');
    img.src = images[0];

    // Add the new img element to the imageSprite div
    imageSprite.appendChild(img);

    // Then start the setInterval
    setInterval(function() {
        // Remove the current image from the imageSprite div
        if (imageSprite.firstChild) {
            imageSprite.removeChild(imageSprite.firstChild);
        }

        // Increment currentImageIndex, or reset it to 0 if it's larger than the number of images
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Create a new img element for the next image
        var img = document.createElement('img');
        img.src = images[currentImageIndex];

        // Add the new img element to the imageSprite div
        imageSprite.appendChild(img);
    }, 1000);

    document.getElementById('count').innerText = 'The images in the first drag-and-drop section are displayed here.';

    document.getElementById('startAnimations').addEventListener('click', function() {
        this.style.display = 'none'; // hide the Start button
        document.getElementById('imageSprite').style.display = 'none'; // hide the imageSprite div
        document.getElementById('prevAnimation').style.display = 'inline'; // show the Prev button
        document.getElementById('nextAnimation').style.display = 'inline'; // show the Next button
        document.getElementById('stepSelect').style.display = 'inline-block';
        currentAnimation = 0;
        playAnimation();
    });

    document.getElementById('nextAnimation').addEventListener('click', function() {
        if (currentAnimation < animations.length - 1) {
            currentAnimation++;
            playAnimation();
        }
        document.getElementById('stepSelect').value = "";
    });

    document.getElementById('prevAnimation').addEventListener('click', function() {
        if (currentAnimation > 0) {
            currentAnimation--;
            playAnimation();
        }
        document.getElementById('stepSelect').value = "";
    });    

    var stepSelect = document.getElementById('stepSelect');
    stepSelect.addEventListener('change', function() {
        var selectedStep = stepSelect.value;
        if (selectedStep !== "") {
            selectedStep = parseInt(selectedStep);
            if (selectedStep !== currentAnimation) {
                currentAnimation = selectedStep;
                playAnimation();
            }
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
            document.getElementById('count').innerText = (currentAnimation + 2) + ' : ' + filename;

            // Display the corresponding procedure step
            var procedure = procedures[currentAnimation] || '';
            document.getElementById('procedure_step').innerText = procedure;
        }

        animation.play();
    }
}