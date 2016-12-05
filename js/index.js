import data from './data';

(function() {
    'use strict';

    const root = document.getElementById('app');
    const images = data.images.map((image, index) => {
        const myDiv = document.createElement('div');
        myDiv.className = "item";
        myDiv.classList.add("col-xs-3");
        myDiv.setAttribute("draggable", true);
        myDiv.setAttribute("margin", '10');
        const newImg = document.createElement('img');
        newImg.setAttribute("src", image.url);
        newImg.setAttribute("width", "100%");
        newImg.setAttribute("height", "200px");
        newImg.style.padding = "10px";
        myDiv.appendChild(newImg);
        return myDiv;
    });

    const docFrag = document.createDocumentFragment();

    for(let i = 0; i < images.length; i++) {
        docFrag.appendChild(images[i]);
    }
    const wrapper = document.createElement('div');
    wrapper.classList.add("container");

    wrapper.appendChild(docFrag);
    root.appendChild(wrapper);


    const addListener = (item) => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
    }

    const draggableDiv = document.querySelectorAll('.item');

    draggableDiv.forEach((item) => {
        addListener(item);
    });

    let dragSrcEl = null;
    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the column we dropped on.
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    function handleDragEnd(e) {
        draggableDiv.forEach((item) => {
            item.classList.remove('over');
        });
    }
})();
