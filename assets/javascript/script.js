let form = document.getElementById('ask-eightball');
form.addEventListener('submit', handleQuestion);

function handleQuestion(event) {
    event.preventDefault();
    let user = document.getElementById("name").value;
    let question = document.getElementById("question").value;
    if (user) {
        document.getElementById('insert-name').textContent = user; 
        } else {
        document.getElementById('insert-name').textContent = "Stranger"; 
        }
    document.getElementById('insert-question').textContent = question; 
}

