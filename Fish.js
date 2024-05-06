// Registering component in Collider.js
AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.fish(id, position);
      }
    },
    flyingBirds: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#terrain");
  
      //creating the bird model entity
      var fishEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      //set the gLTF model attribute
      fishEl.setAttribute("gltf-model", "Assets/Fish/scene.gltf");
  
      //set animation mixer of models with animation
      fishEl.setAttribute("animation-mixer", {});
  
      //set the static body of the physic system
      fishEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });
  
      //set the game play attribute
      birdEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      //append the bird entity as the child of the terrain entity
      terrainEl.appendChild(birdEl);
    },
  });
  