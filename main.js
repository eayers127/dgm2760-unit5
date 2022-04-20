// list for the trees
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cyprus']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

// add items

document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

// remove items

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0){
    trees.shift()
    listTrees()
    }
    else {
        errorElement.textContent = 'Error, there are no trees to remove'
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1){
    trees.splice(1, 1)
    listTrees()
    }
    else {
        errorElement.textContent = 'Error, there is not enough trees to remove'
    }
}

document.querySelector('#remove_tree3').onclick = () => {
    if(trees.length > 0){
    trees.pop()
    listTrees()
    }
    else{
        errorElement.textContent = 'Error, there are no trees to remove'
    }
}

// manipulate

document.querySelector('#sort_trees').onclick = () => {
    if(trees.length > 0){
    trees.sort()
    listTrees()
    }
    else{
        errorElement.textContent = 'Error, not enough trees to sort'
    }
}

document.querySelector('#lower_trees').onclick = () => {
    if(trees.length > 0){
        let lowerArray = []
        lowerArray = trees.map(tree => tree.toLowerCase())
        trees.splice(0, lowerArray.length, ...lowerArray)
        listTrees()
     }
     else{
        errorElement.textContent = 'Error, there are no trees on the list'
     }
 }

 document.querySelector('#upper_trees').onclick = () => {
    if(trees.length > 0){
        let upperArray = []
        upperArray = trees.map(tree => tree.toUpperCase())
        trees.splice(0, upperArray.length, ...upperArray)
        listTrees()
     }
     else{
        errorElement.textContent = 'Error, there are no trees on the list'
     }
 }


// get names
document.querySelector('#showName3').onclick = ()=>{
    if(trees.length > 2){
        errorElement.textContent = `tree number three is ${trees[2]}`
    }
    else{
        errorElement.textContent = 'Error, there is no tree number three'
    }
}

document.querySelector('#showName4').onclick = ()=>{
    if(trees.length > 3){
        errorElement.textContent = `tree number four is ${trees[3]}`
    }
    else{
        errorElement.textContent = 'Error, there is no tree number four'
    }
}

