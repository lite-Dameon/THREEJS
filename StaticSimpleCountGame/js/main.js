
      var color = 0x000000;
      // Create your main scene
      var scene = new THREE.Scene();

      // Create your main camera
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      // Create your renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      loader = new THREE.JSONLoader();

      var last_bird = null,birds=[];
      var number_of_birds = 5;
      loader.load( "../js/birdie.json", function( geometry ) {
           for(i =0; i< number_of_birds;i++){
              var mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
               mesh.scale.set( .1, .1, .1 );
               mesh.position.y = 0;
               mesh.position.x = 0;
               if(last_bird != null)
               mesh.position.x = last_bird.position.x -1;
               scene.add(mesh);
               birds.push(mesh);
               last_bird = mesh;

           }
      } );



      var i,last_cube= null;
      // for(i =0; i< 5;i++)
      // {
        var geometry = new THREE.PlaneGeometry( 10, 5, 1 );
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 )
        // var material = new THREE.MeshNormalMaterial();
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.x -= 2;
        // if(last_cube != null)
        // cube.position.x = last_cube.position.x -3;
      //  scene.add( cube );



        // last_cube = cube;
      // }
      // Set up the main camera
      camera.position.z = 5;

      //automatic resize renderer
    THREEx.WindowResize(renderer, camera);

      // Load the background texture
      var texture = THREE.ImageUtils.loadTexture( '1.jpg' );
      var backgroundMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2, 0),
          new THREE.MeshBasicMaterial({
              map: texture
          }));

      backgroundMesh .material.depthTest = false;
      backgroundMesh .material.depthWrite = false;

      // Create your background scene
      var backgroundScene = new THREE.Scene();
      var backgroundCamera = new THREE.Camera();
      backgroundScene .add(backgroundCamera );
      backgroundScene .add(backgroundMesh );

      // Rendering function
      var render = function () {
          requestAnimationFrame(render);
          renderer.autoClear = false;
          renderer.clear();
          renderer.render(backgroundScene , backgroundCamera );
          renderer.render(scene, camera);
          var j=0;
          // var result = 0;
          for(j=0; j<number_of_birds;j++){
            // if(birds[j].rotation.y > 1)
            //   result = -1;
            // else if(birds[j].rotation.y > -1)
            //   result = 1;
            birds[j].rotation.y +=  0.1;
          }
          // controls.update();
     };

     render();
