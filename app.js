// container
const container = document.querySelector('#container')

// create divs
// divArray = []
for (i =0; i< 16; i++) {
    let newDiv = document.createElement('div')
    newDiv.setAttribute('style', 'height: 10px; width:10px; background: blue;')
    container.append(newDiv)
}
