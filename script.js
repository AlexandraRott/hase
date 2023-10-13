const haeschen = document.querySelector('.haeschen');
const frameCount = 6; 
const frameWidth = 800; 

function loadHaeschenFrames() {
    const haeschenFrames = [];
    for (let i = 0; i < frameCount; i++) {
        const framePath = `hase_${i}.png`; 
        const frameImage = new Image();
        frameImage.src = framePath;
        haeschenFrames.push(frameImage);
    }
    return haeschenFrames;
}

const haeschenFrames = loadHaeschenFrames();

function animateHaeschen() {
    const frameIndex = Math.floor(Date.now() / 70) % frameCount; 
    const currentFrame = haeschenFrames[frameIndex];
    haeschen.style.backgroundImage = `url(${currentFrame.src})`;
}

setInterval(animateHaeschen, 70); 

const quellenangabe = document.querySelector('.quellenangabe a');
quellenangabe.href = "https://dribbble.com/shots/7378110-Running-White-Rabbit-Loading-Animation";