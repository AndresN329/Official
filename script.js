onload = () => {
  document.body.classList.remove("container");
};

// Lógica para index.html
if (document.getElementById('loginBtn')) {
  document.getElementById('loginBtn').addEventListener('click', function() {
    const input = document.getElementById('florInput').value.trim().toLowerCase();
    const errorMsg = document.getElementById('errorMsg');
    if (input === 'frog dog' || input === 'sapoperro') {
      window.location.href = 'carta.html';
    } else {
      errorMsg.textContent = 'Wrong answer. You know the answer :)';
    }
  });
}


//Segundo sobre
document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('carta-container');

  envelope.addEventListener('click', function() {
    envelope.classList.toggle('open');
  });
});

//solucion a la carta
document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('carta-container');

  envelope.addEventListener('click', function() {
    envelope.classList.add('open');
  });

  // The function to be called by the button
  window.irAFlores = function() {
    // You can also add a class to trigger the closing animation if you have one
    // For now, we will just delay the redirect
    
    // Set a delay (in milliseconds) before redirecting to the next page
    setTimeout(function() {
      window.location.href = "Flower.html"; // Replace with the actual URL
    }, 800); // This delay should match the duration of your CSS animation (0.8s = 800ms)
  };
});