import data from './data';

(function() {
    'use strict';

    const root = document.getElementById('app');
    const images = data.images.map((image, index) => {
        const myDiv = document.createElement('div');
        myDiv.className = "item";
        myDiv.setAttribute("draggable", true);
        const newImg = document.createElement('img');
        newImg.setAttribute("src", image.url);
        newImg.setAttribute("width", "100%");
        newImg.setAttribute("height", "auto");
        newImg.style.padding = "10px";
        myDiv.appendChild(newImg);
        return myDiv;
    });

    const docFrag = document.createDocumentFragment();
    for(let i = 0; i < images.length; i++) {
        docFrag.appendChild(images[i]);
    }
    root.appendChild(docFrag);
    const draggableDiv = document.querySelectorAll('.item');


    function handleDragStart(e) {
      this.style.opacity = '0.4';  // this / e.target is the source node.
    }

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }

      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;
    }

    function handleDragEnter(e) {
      // this / e.target is the current hover target.
      this.classList.add('over');
    }

    function handleDragLeave(e) {
      this.classList.remove('over');  // this / e.target is previous target element.
    }
    function handleDrop(e) {
        // this / e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        // See the section on the DataTransfer object.

        return false;
    }

    function handleDragEnd(e) {
        // this/e.target is the source node.

        [].forEach.call(draggableDiv, function (col) {
            col.classList.remove('over');
    });
    }

    //
    const addListener = (item) => {
        item.addEventListener('dragstart', function(e) {
            this.style.opacity = '0.5';
            console.log('yeah');
        })
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    }


    draggableDiv.forEach((item) => {
        addListener(item);
    })
})();
