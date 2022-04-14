//Example fetch using pokemonapi.co
document.querySelector('.button').addEventListener('click', getFetch)

function getFetch(){
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

            fetch(`https://api.pexels.com/v1/search?query=${data.name}`,{
              headers: {
              Authorization: "563492ad6f917000010000018be4c61f98004329b4003a4e20673201"
                }
              })
              .then(res => res.json()) // parse response as JSON
              .then(data => {
                document.querySelector('.reward-pic').src = data.photos[0].src.medium
              })
              .catch(err => {console.log(err)})

          })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  setTimeout(() => document.querySelector('.reward').classList.add('hidden'),7000)
}