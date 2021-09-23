async function getGithub () {
    fetch('https://api.github.com/users/Gabriel-Valin')
        .then(response => response.json())
        .then(data => {
            displayInHtml(data)
        })
        .catch(error => console.error(error))
}

function displayInHtml (response) {
    console.log(response)
    document.getElementById('name-github').innerText = response.name
    document.getElementById()
} 


getGithub()