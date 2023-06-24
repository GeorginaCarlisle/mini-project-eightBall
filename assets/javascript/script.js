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
    // Need to add a way of clearing the form that doesn't also clearthe magic balls prediction
    generateAnswer();
}

function generateAnswer() {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    document.getElementById('prediction').textContent;
    switch(randomNumber) {
        case 1: document.getElementById('prediction').textContent = 'Absolutely, without a shadow of a doubt';
        break;
        case 2: document.getElementById('prediction').textContent = 'Of course, it must be so';
        break;
        case 3: document.getElementById('prediction').textContent = 'Don\'t be rediculous, of course not';
        break;
        case 4: document.getElementById('prediction').textContent = 'Don\'t shy away from the truth, this will come to pass';
        break;
        case 5: document.getElementById('prediction').textContent = 'Fear not, this will never happen';
        break;
        case 6: document.getElementById('prediction').textContent = 'Fate lies within the hands of the gods';
        break;
        case 7: document.getElementById('prediction').textContent = 'That which you fear will come true';
        break;
        case 8: document.getElementById('prediction').textContent = 'That which you hope for will come true';
        break;
        default: document.getElementById('prediction').textContent = 'Eight Ball has gone to sleep, try again'
        break;
    }    }

