// Function to create petals and add them to the flower
function createPetals() {
  const flowerContainer = document.getElementById('flower-container');
  const numPetals = 12;
  const angleStep = 360 / numPetals;

  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    // Rotate each petal by the correct angle and move it outward from the center
    petal.style.transform = `rotate(${i * angleStep}deg) translateY(-40px)`;
    flowerContainer.appendChild(petal);

    // Apply animation delay to each petal
    setTimeout(() => {
      petal.style.animationDelay = `${i * 0.2}s`;
    }, i * 200);
  }
}

// Function to animate the center of the flower
function animateCenter() {
  const center = document.querySelector('.center');
  center.style.animationDelay = '4s'; // Appear after the petals
}

// Function to animate the stem
function animateStem() {
  const stem = document.querySelector('.stem');
  stem.style.animationDelay = '0s'; // Start immediately
}

// Call the functions to animate the flower
animateStem();
createPetals();
animateCenter();
