//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  document.querySelector('.reward').classList.remove('hidden')
  fetch('https://www.dnd5eapi.co/api/magic-items/')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        fetch(`https://www.dnd5eapi.co${data.results[Math.floor(Math.random()*data.count)].url}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            document.querySelector('.reward-name').innerText = data.name
            document.querySelector('.description').innerHTML = data.desc[0] + '<br>' + data.desc[1]

            /*fetch(`https://api.pexels.com/v1/search?query=${data.name}`,{
              headers: {
              Authorization: "563492ad6f917000010000018be4c61f98004329b4003a4e20673201"
                }
              })*/
              fetch(`https://imsea.herokuapp.com/api/1?q=${data.name}`, {
                headers: {
                  'Access-Control-Allow-Origin': 'same-origin'
                }
              })
              .then(res => res.json()) // parse response as JSON
              .then(data => {
                document.querySelector('img').src = data.results[0]
              })
              /*.then(data => {
                document.querySelector('img').src = data.photos[0].src.medium
              })*/
              .catch(err => {console.log(err)})

          })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}