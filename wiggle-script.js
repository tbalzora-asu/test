// Select the header element with the ID 'test-header'
const header = document.getElementById('test-header');

// Initialize a variable to track the angle for the wiggle effect
let angle = 0;

// Function to apply the wiggle effect
function wiggleEffect() {
    angle += 5;

// Use sine and cosine (x,y) motion functions for smooth oscillation
    const wiggleX = Math.sin(angle * (Math.PI / 180)) * 20;
    const wiggleY = Math.cos(angle * (Math.PI / 180)) * 5;

// Apply the calculated transformations to the header
    header.style.transform = `translate(${wiggleX}px, ${wiggleY}px)`;

// Must use requestAnimationFrame to call wiggleEffect continuously
    requestAnimationFrame(wiggleEffect);
}

// Calls to the wiggle animation
wiggleEffect();
