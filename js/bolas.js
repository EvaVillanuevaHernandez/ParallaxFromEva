
const myMenuOptions = [
  {
    color: "green",

  }, {
    color: "red",

  }, {
    color: "blue",

  },
];
AFRAME.registerComponent('bolas', {

  init: function () {

    let myMenuContent = "";
    let pos = 0;
    for (let i = 0; i < myMenuOptions.length; i++) {
      myMenuContent +=
        `<a-sphere position=" 0 ${pos}  0" radius="0.5" 
         color="${myMenuOptions[i].color}"></a-sphere>`;
      pos -= 1.2;
    }

    const myMenu = document.getElementById("my-menu");
    myMenu.innerHTML = myMenuContent;
  }
});