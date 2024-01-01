
 document.querySelector(".control-buttons span").onclick = function () {
    let YourName = prompt("whats your name");
    if(YourName == null || YourName == ""){
        document.querySelector(".name span").innerHTML = "Unknown";
    }else{
        document.querySelector(".name span").innerHTML = YourName;
 
    }
    document.querySelector(".control-buttons").remove()

 }

 var duration = 4000;

 var memoryGame = document.querySelector(".memory-game-blocks");
  var blocks  = Array.from(memoryGame.children);

  var orderRange = [...Array(blocks.length).keys()];
  shufle(orderRange);



  blocks.forEach((block, index)=> {
    block.style.order = orderRange[index];
    block.addEventListener("click", function () {
        flipBlock(block);
    

    })
  });

  function flipBlock(selectedBlock){
    selectedBlock.classList.add('is-flipped');
     let allFlippedBlocks = blocks.filter(block=> block.classList.contains("is-flipped"));
     if(allFlippedBlocks.length == 2){
        stopCklick() 
        checkMatchBlock(allFlippedBlocks[0], allFlippedBlocks[1]) ;
    }else{

     }

  }

  function stopCklick(){
    memoryGame.classList.add('no-click');
    setInterval(()=>{
        memoryGame.classList.remove('no-click');

    }, duration)
  };

  function checkMatchBlock(firstBlock, secondBlock){
    let tries = document.querySelector('.tries span');
    if (firstBlock.dataset.technologe === secondBlock.dataset.technologe){
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped"); 
        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match"); 
    }else{
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setInterval(()=>{
            firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");
    
        }, duration);
    }

  }
  function shufle(array) {
    var current = array.length;
    var temp;
    
    while( current > 0){
        var random =  Math.floor(Math.random() * current);
        current -- ;
         temp = array[current];
         array[current] = array[random];
         array[random] = temp;

    }

    return array;
  }

  