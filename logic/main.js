
const gameBoard = document.querySelector('.game-board');
const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 4, 4, 0, 0],
    [0, 0, 0, 0, 0, 4, 4, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 3, 0, 0, 0],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const inventory = {
    'dirt': 0,
    'stone': 0,
    'wood': 0,
    'grass': 0,
}


const blockTypes = {
    0: 'sky',
    1: 'dirt',
    2: 'stone',
    3: 'wood',
    4: 'grass'
}
const blocksAndTools = {
    'axe': 'wood',
    'shovel': 'dirt',
    'pickaxe': 'stone'
}

const gameObject ={
    selectedTool: '',
    selectedBlock: '',
  

}

function draw() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const block = document.createElement("div");
            block.setAttribute('data-blockType', blockTypes[board[i][j]]);
            block.setAttribute('data-type', 'block');
            gameBoard.appendChild(block);
        }
    }


    

   
const allTools = document.querySelectorAll("[data-type='tool']");
    for (let elm = 0; elm < allTools.length; elm++) {
        allTools[elm].addEventListener('click', () => {
            gameObject.selectedTool = allTools[elm].getAttribute("data-toolType");
     
            
            

})
    }
    
    const allBlocks = document.querySelectorAll("[data-type='block']");
    for (let elm = 0; elm < allBlocks.length; elm++) {
        allBlocks[elm].addEventListener('click', () => {
            gameObject.selectedBlock = allBlocks[elm].getAttribute("data-blockType");
            if(gameObject.selectedTool!=''){
                if (blocksAndTools[gameObject.selectedTool]==gameObject.selectedBlock){
                    allBlocks[elm].setAttribute("data-blockType", "sky");
                    inventory[gameObject.selectedBlock]++;
                    console.log(inventory);
                }
            }
         
           
             
            
        })
    }



}






draw();
