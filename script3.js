// 3. Organizuojate vestuves - pasiimkite informaciją iš "https://party-wedding.glitch.me/v1/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".
const dataPlace = document.getElementById("dataPlace");

fetch("https://party-wedding.glitch.me/v1/wedding")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(guest => {
            const newRow = document.createElement("tr")
            newRow.innerHTML =
                `
                <td>${guest.name}</td>
                <td>${guest.plusOne ? '+' : '-'}</td>
                <td>${guest.attending ? '+' : '-'}</td>
                `
            dataPlace.querySelector('tbody').append(newRow)
        })
    })
    .catch(error => {
        console.error('Klaida:', error)
    })