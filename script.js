fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(result => {
        const img = document.createElement("img")
        img.src = result.results[0].picture.large
        img.width = 400
        img.style.marginBottom = "50px"
        document.body.appendChild(img)

        const nameContainer = document.createElement("div"); // Create a container for h1 and h2
        nameContainer.style.display = "flex"; // Set display property to flex

        const h1 = document.createElement("h1")
        h1.innerText = `${result.results[0].name.first} ${result.results[0].name.last}`
        h1.style.fontSize = "30px"; 
        nameContainer.appendChild(h1)

        const h2 = document.createElement("h2")
        const age = Number(result.results[0].dob.age)
        h2.innerText = `${age} years old`
        h2.style.fontSize = "26px"; 
        h2.style.color = "coral"
        nameContainer.appendChild(h2)

        nameContainer.style.gap = "40px";

        document.body.appendChild(nameContainer)

        const p = document.createElement("p")
        p.innerText = result.results[0].email
        p.style.color = "grey"
        document.body.appendChild(p)

        console.log(result)
    })
    .catch(error => {
        console.error('Error:', error)
        alert('Error. Please try again.')
    });