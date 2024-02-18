const gifGrid = document.querySelector('.gif-grid');
const maxGifs = 10; // Set the maximum number of GIFs to load

for (let i = 1; i <= maxGifs; i++) {
    const img = document.createElement('img');
    img.src = `data/gif_${i}.mp4`; 
    img.alt = `GIF ${i}`; 
    gifGrid.appendChild(img);
}
