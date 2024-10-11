const menuButton = document.getElementById('menu-button');
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('show'); 
    });
});

const navMenu = document.getElementById('nav-menu');
function handleResize() {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide');
    } else {
        navMenu.classList.add('hide');
    }
}
window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);

function viewerTemplate(imageUrl, altText) {
    return `
        <div class="viewer" style="display: flex;">
            <button class="close-viewer">X</button>
            <img src="${imageUrl}" alt="${altText}">
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    const viewerContainer = document.createElement('div'); 
    viewerContainer.classList.add('viewer-container'); 
    document.body.appendChild(viewerContainer); 

    const galleryImages = document.querySelectorAll('.Gallery img'); 

    
    function openViewer(src, alt) {
        viewerContainer.innerHTML = viewerTemplate(src, alt); 

       
        viewerContainer.querySelector('.viewer').style.display = 'flex';
    }

   
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            openViewer(image.src, image.alt); 
        });
    });

    
    viewerContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-viewer')) {
            viewerContainer.innerHTML = ''; 
        }
    });

    
    viewerContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            event.stopPropagation(); 
        }
    });
});