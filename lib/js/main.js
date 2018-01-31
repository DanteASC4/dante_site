var box1 = new Typed('#content1', {
  strings: ["I am Dante Rivera, a rising developer, a picture of me is coming soon but for now.. \nLet me tell you a little about myself...^250 \n \nSome of my passions are:\n- Coding, I really just fell in love with it, I can\'t stop learning new things \n- Video Games(League mostly) \n- Fun coding projects(I made a python script to send people a few hundred emails\n  and maybe ~50 texts) \n \n \nI grew up for a few years in Long Island, then when I turned 6 me and my mom moved to the city. At a young age technology quickly became a part of my life. I got a silver ps2 in 2nd or 3rd grade. I played it a ridiculous amount, since then I have only dived deeper into the world of technology. I intend to continue to do so, now not just through use of it but production as well. I will hone my skills in coding for much of the rest of my life!\n\nSome of my traits:\n- I can befriend anyone who is not really mean \n \nIf you are interested, here is my contact info: \nEmail Zexovon@gmail.com"],
  typeSpeed: 20,
  backSpeed: 100,
  loop: false,
  showCursor: false,
  onStringTyped: function(){
    var typed6 = new Typed('#skillset', {
      strings: ['What can I do? \n  My skills are as follows:\n- javascript\n- CSS\n- HTML\n- Python\n- Photoshop\n\n Current to-learn list:\n- SQL\n- Godot game engine\n- Sass\n\nAnd much much more...\nI\'ll include a chart below to show what I believe to be my skill level in each of the above skills.'],
      typeSpeed: 10,
      backSpeed: 100,
      loop: false,
      showCursor: false
    });
  console.log("bob")

  }
});
console.log("bob")


var radarChart = new Chart(datCanvas, {
    type: 'radar',
    data: datData,
    options: chartOptions
});

var datData = {
  labels: ["Javascript", "CSS", "HTML", "Python", "Photoshop"],
  datasets: [{
    label: "My Skills",
    backgroundColor: "rgba(200,0,0,0.5)",
    data: [75, 60, 80, 55, 60],
  }]
};




var chartOptions = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 100,
      stepSize: 25
    },
    pointLabels: {
      fontSize: 16
    }
  },

};
