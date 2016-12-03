import data from './data';

const root = document.getElementById('app');
const container = document.createElement('div');
const images = data.images.map((image, index) => {
    const myDiv = document.createElement('div');
    myDiv.setAttribute("height", "168");
    myDiv.setAttribute("width", "324");
    myDiv.style.border = "1px solid grey";
    myDiv.className = "item";
    myDiv.setAttribute("id", `item${index}`);
    const elem = document.createElement('img');
    elem.setAttribute("src", image.url);
    elem.setAttribute("height", "168");
    elem.setAttribute("width", "324");
    elem.style.padding = "10px";
    myDiv.appendChild(elem);
    return myDiv;
});

const docFrag = document.createDocumentFragment();
for(let i = 0; i < images.length; i++) {
    docFrag.appendChild(images[i]);
}
container.appendChild(docFrag);
root.appendChild(container);

for(let i = 0; i < 3; i++) {
    addListener(`item${i}`);
}
function addListener(item) {
    document.getElementById(`${item}`).addEventListener('click', function(e) {
        console.log('Yeah it is working!!', e.target);
    })
}
