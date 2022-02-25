function changeBackground() {
    document.body.style.backgroundColor = "black";
  }







  function changeBgToRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    document.body.style.backgroundColor = `#${randomColor}`;
  }


  const eventListenerButton = document.querySelector(".btn_event-listener");
  eventListenerButton.addEventListener("click", changeBgToRandom);
  eventListenerButton.addEventListener("mouseenter", changeBgToRandom);


//btn-crazy.addEventListener("click", blue)

