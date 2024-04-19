document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
  
    const colorInput = document.getElementById('colorInput').value;
    const heading = document.getElementById('main-heading');
  
    heading.style.color = colorInput; // Change the color of the heading
  });
  