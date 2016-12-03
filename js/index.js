import data from './data';

const root = document.getElementById('app');
const images = data.images.map((image, index) => {
    const myDiv = document.createElement('div');
    myDiv.className = "item";
    myDiv.setAttribute("id", `item${index}`);
    const elem = document.createElement('img');
    elem.setAttribute("src", image.url);
    elem.setAttribute("height", "168");
    elem.setAttribute("width", "100%");
    elem.style.padding = "10px";
    myDiv.appendChild(elem);
    return myDiv;
});

const docFrag = document.createDocumentFragment();
for(let i = 0; i < images.length; i++) {
    docFrag.appendChild(images[i]);
}

root.appendChild(docFrag);

for(let i = 0; i < 3; i++) {
    addListener(`item${i}`);
}
function addListener(item) {
    document.getElementById(`${item}`).addEventListener('click', function(e) {
        console.log('Yeah it is working!!', e.target);
    })
}
