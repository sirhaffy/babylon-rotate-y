// * !! * Things on the ToDo list: 
//     - Limit only to zoom a little and rotate in Y only.
//     - Transparent ground plane with shadow.
//     - Material that picks up clicked textures by user.
//     - Slow animation to show that is can turn.

window.addEventListener('DOMContentLoaded', function(){

    // Get the canvas DOM element
    var canvas = document.getElementById('renderCanvas'); 

    // Load the Babylon 3D engine
    var engine = new BABYLON.Engine(canvas, true); 

    var createScene = function(){

        // # Scene setup
            var scene = new BABYLON.Scene(engine);

            // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene); // XYZ
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 5, 100, new BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);

            camera.setTarget(BABYLON.Vector3.Zero()); // target the camera to scene origin
            camera.attachControl(canvas, false); // attach or add the camera to the canvas

        // # Lights
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene); // aiming 0,1,0 - meaning, to the sky

        // # Geometry

            // OBJ Import

                // Remote
                // BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/sirhaffy/babylon/master/assets/models/", "Knapp.01.006.baked.size.obj", scene, function (meshes) {          
                //     scene.createDefaultCameraOrLight(true, true, true);
                //     // scene.createDefaultEnvironment();
                //     meshes.scaling = new BABYLON.Vector3(10, 10, 10);
                // });

                // Local
                BABYLON.SceneLoader.ImportMesh("", "./assets/models/", "Knapp.01.006.baked.size.obj", scene, function (meshes) {          
                    scene.createDefaultCameraOrLight(true, true, true);
                    // scene.createDefaultEnvironment();
                    meshes.scaling = new BABYLON.Vector3(10, 10, 10);
                });

        // # Materials

        // * !! * ToDo - Here we shall have a material that picks up clicked textures.

            // var materialBox = new BABYLON.StandardMaterial("texture1", scene);
            // materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green

        // #Animation
        // * !! * ToDo - Here we shall have a slow animation that turns the models in Y.

            //Create a scaling animation at 30 FPS

            // var animationBox = new BABYLON.Animation("tutoAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    
            //Here we have chosen a loop mode, but you can change to :
            //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
            //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
            //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

            // Animation keys
            // var keys = [];
            //At the animation key 0, the value of scaling is "1"
            // keys.push({
            //     frame: 0,
            //     value: 1
            // });

            //At the animation key 20, the value of scaling is "0.2"
            // keys.push({
            //     frame: 20,
            //     value: 0.2
            // });

            //At the animation key 100, the value of scaling is "1"
            // keys.push({
            //     frame: 100,
            //     value: 1
            // });

            //Adding keys to the animation object
            // animationBox.setKeys(keys);

            //Then add the animation object to box1
            // box1.animations.push(animationBox);

            //Finally, launch animations on box1, from key 0 to key 100 with loop activated
            // scene.beginAnimation(box1, 0, 100, true);

                //Applying materials
                // box1.material = materialBox;


        // # Scene launch
            return scene;
            }

            var scene = createScene();

            // run the render loop
            engine.runRenderLoop( function() {
                scene.render();
            });

            // The canvas/window resize event handler, make a wrapper div.
            window.addEventListener( 'resize', function() {
                engine.resize();
            });
});
