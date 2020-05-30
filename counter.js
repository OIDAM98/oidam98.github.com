const section = document.getElementById('counter');
const text = document.createElement('h2');

fetch('https://62n52ezwl8.execute-api.us-west-2.amazonaws.com/Prod/counter/')
    .then(res => res.json())
    .then(visitor => {
        text.innerText = `You are visitor #${visitor.Visits}`;
        section.appendChild(text);
    })
    .catch(e => {
        console.error(e)
        text.innerText = "There was an error obtaining visitors, sorry"
        section.appendChild(text);
    });