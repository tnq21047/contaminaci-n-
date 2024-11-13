const dragItems = document.querySelectorAll('.drag-item');
const dropZones = document.querySelectorAll('.drop-zone');

// Función para manejar el inicio del arrastre
dragItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    });
});


dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();  
        zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('dragover');
    });

    // Cuando se suelta la imagen en una zona
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');

        const draggedItemId = e.dataTransfer.getData('text');
        const draggedItem = document.getElementById(draggedItemId);

       
        if (zone.getAttribute('data-target') === draggedItemId) {
            zone.appendChild(draggedItem);
            zone.classList.add('correct');
            draggedItem.setAttribute('draggable', 'false'); 
        } else {
            zone.classList.add('incorrect'); 
            setTimeout(() => zone.classList.remove('incorrect'), 1000); 
       
        }

    
    });
});

if (allCorrect) {
    congratulationsMessage.style.display = 'block';
}
