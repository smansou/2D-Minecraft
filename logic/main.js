



const gameBoard = document.querySelector('.game-board');
const board = [

    //////?  sky ==> 0  dirt==> 1  stone ==> 2  wood ==> 3  grass ==> 4 leaf ==> 5 ///////

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const inventory = {
    'dirt': 0,
    'stone': 0,
    'wood': 0,
    'grass': 0,
    'leaf': 0
}


const blockTypes = {
    0: 'sky',
    1: 'dirt',
    2: 'stone',
    3: 'wood',
    4: 'grass',
    5: 'leaf',
    
}
const blocksAndTools = {
    'axe': ['wood'],
    'shovel': ['dirt', 'grass'],
    'pickaxe': ['stone'],
    'shears': ['leaf']

}

const gameObject = {
    selectedTool: '',
    selectedBlock: '',
    selectedResource: '',
    status: "building"


}

function updateInventory() {
    document.querySelector(".woodCount").innerHTML = inventory["wood"];
    document.querySelector(".stoneCount").innerHTML = inventory["stone"];
    document.querySelector(".dirtCount").innerHTML = inventory["dirt"];
    document.querySelector(".grassCount").innerHTML = inventory["grass"];
    document.querySelector(".leafCount").innerHTML = inventory["leaf"];
}
updateInventory();
document.querySelector(".game-board").addEventListener('click', () => { updateInventory() });

function start() {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const block = document.createElement("div");
            block.setAttribute('data-blockType', blockTypes[board[i][j]]);
            block.setAttribute('data-type', 'block');
            gameBoard.appendChild(block);
        }
    }



    const allResources = document.querySelectorAll("[data-type='resource']");
    for (let elm = 0; elm < allResources.length; elm++) {
        allResources[elm].addEventListener('click', () => {
            gameObject.selectedResource = allResources[elm].getAttribute("class");
            if (inventory[`${gameObject.selectedResource}`]>0){
            gameObject.status = "building";
            allTools.forEach((e) => { e.setAttribute("data-selected", "off") })
            allResources.forEach((e) => { e.setAttribute("data-selected", "off") })
            document.querySelector(`.${gameObject.selectedResource}`).setAttribute("data-selected", "on");

         }
         })
    
    }


    const allTools = document.querySelectorAll("[data-type='tool']");
    for (let elm = 0; elm < allTools.length; elm++) {



        allTools[elm].addEventListener('click', () => {

            gameObject.status = "collecting";
            gameObject.selectedTool = allTools[elm].getAttribute("data-toolType");
            allTools.forEach((e) => { e.setAttribute("data-selected", "off") })
            allResources.forEach((e) => { e.setAttribute("data-selected", "off") })
            document.querySelector(`.${gameObject.selectedTool}`).setAttribute("data-selected", "on");




        })
    }


    const allBlocks = document.querySelectorAll("[data-type='block']");
    for (let elm = 0; elm < allBlocks.length; elm++) {
        allBlocks[elm].addEventListener('click', () => {

            //! check if building or collecting/////////////////////////////

            if (gameObject.status === "collecting") {
                gameObject.selectedBlock = allBlocks[elm].getAttribute("data-blockType");

                if (blocksAndTools[gameObject.selectedTool][0] === gameObject.selectedBlock || blocksAndTools[gameObject.selectedTool][1] === gameObject.selectedBlock) {
                    allBlocks[elm].setAttribute("data-blockType", "sky");
                    inventory[gameObject.selectedBlock]++;

                }

            }
            if (gameObject.status === "building") {
                //! check if block is empty(sky) ==> check if resource count in inventory is more than zero.==>place
                if (allBlocks[elm].getAttribute("data-blockType") === "sky") {
                    if (inventory[gameObject.selectedResource] > 0) {
                        allBlocks[elm].setAttribute("data-blockType", gameObject.selectedResource);
                        inventory[gameObject.selectedResource]--;
                    }
                }
            }
        })
    }



}
 




start();
