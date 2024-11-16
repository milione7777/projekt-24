const button = document.getElementById("myButton");

function handleClick() {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "Ви натиснули кнопку!"; 
  messageDiv.style.color = "green"; 
}

button.addEventListener("click", handleClick);



// 2

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const output = document.getElementById('output');
    output.innerHTML = `<h2>Збережені дані:</h2><p>Ім'я: ${name}</p><p>Email: ${email}</p>`;
});

document.getElementById('showInfoBtn').addEventListener('click', function() {
    const extraInfo = document.getElementById('extraInfo');
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
    } else {
        extraInfo.classList.add('hidden');
    }
});
