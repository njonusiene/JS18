// 2. Naudojant "https://party-wedding.glitch.me/v1/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

fetch(`https://party-wedding.glitch.me/v1/party`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const name = data.find(person => person.name === "Kristupas Lapeika")
    const vip = name ? name.VIP : false
    alert(`Ar Kristupas Lapeika yra VIP? ${vip}`)
    console.log(`Ar Kristupas Lapeika yra VIP? ${vip}`)  
  })
  .catch(e => console.log(e.message))

