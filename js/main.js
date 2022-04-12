//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch('https://www.dnd5eapi.co/api/magic-items/')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        fetch(`https://www.dnd5eapi.co${data.results[Math.floor(Math.random()*data.count)].url}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.name
            document.querySelector('h3').innerHTML = data.desc[0] + '<br>' + data.desc[1]

          })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}