AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },    
    },
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    init: function () {
      var duration = 120;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
  
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      var timer = setInterval(()=>{
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;
        } 
        else {
          this.gameOver()      
        }
      
      }, 1000 );
    },
    isCollided: function (elemntId) {
      const element = document.querySelector(elemntId);
      element.addEventListener("collide", (e) => {
        if (elemntId.includes("#ring")) {
          element.setAttribute("visible",false)
          this.upDateTargets(),
          this.upDateScore()
        } else {
          this.gameOver()
        }
      });
    },
  
  upDateTargets: function() {
    var element = document.querySelector("#targets")
    var count = element.getAttribute("text").value
    var currentTargets = parseInt(count)
    currentTargets -= 1
    element.setAttribute("text", {
      value:currentTargets
    })
  },
  
  upDateScore: function() {
    var element = document.querySelector("#score")
    var score = element.getAttribute("text").value
    var currentScore = parseInt(score)
    currentScore += 50
    element.setAttribute("text", {
      value:currentScore
    })
  },
  
  gameOver: function(){
    var element = document.querySelector("#game_over_text")
    element.setAttribute("visible",true)
    var plane = document.querySelector("#diver")
    plane.setAttribute("dynamic-body",{mass:1})
  }
    
  });