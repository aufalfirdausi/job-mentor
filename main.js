// Sembunyikan flowers container sebelum animasi dimulai
const flowersContainer = document.querySelector('.flowers');
flowersContainer.style.opacity = '0';
flowersContainer.style.pointerEvents = 'none';

const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    // Tampilkan flowers container
    flowersContainer.style.opacity = '1';
    flowersContainer.style.pointerEvents = 'auto';
    
    // Sembunyikan tombol
    startButton.style.display = 'none';
});