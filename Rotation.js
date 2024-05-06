//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.03;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.03;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
//Diver Rotation
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: {type: "number", default: 0} 
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
    this.data.speedOfRotation=this.el.getAttribute("rotation")
    this.data.speedOfAscent=this.el.getAttribute("position")
  
    var rotation=this.data.speedOfRotation
    var position=this.data.speedOfAscent
  
    if (e.key === "ArrowRight") {
      if(rotation.x<15){       
        rotation.x += 0.5;
        this.el.setAttribute("rotation",rotation)   
    }      
    }
    if (e.key === "ArrowLeft") { 
      if(rotation.x>-15){        
      rotation.x -= 0.5;  
      this.el.setAttribute("rotation",rotation)
      }  
        }
    if (e.key === "ArrowUp") {
      if(rotation.z<25){        
        rotation.z += 0.5;  
        this.el.setAttribute("rotation",rotation)
    }
    if(position.y<2) {
    position.y+=0.01
    this.el.setAttribute("position", position)
    } 
    }
    if (e.key === "ArrowDown") {
      if(rotation.z>-15){        
        rotation.z -= 0.5;  
        this.el.setAttribute("rotation",rotation)
    }
    if(position.y>-2) {
      position.y-=0.01
      this.el.setAttribute("position", position)
    } 
    }
  });
 },
});