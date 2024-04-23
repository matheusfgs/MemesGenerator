    function primaryRequest() {
        const valores= fetch('https://api.imgflip.com/get_memes').then(batata=>{

        batata.json().then(bacon=>{
  
            console.log(bacon.data)
            
            var btn=document.querySelector('#botao')

            btn.addEventListener('click',()=>{
                    var img = document.querySelector('#img')

                    img.src=bacon.data.memes[Math.floor(Math.random()*100)].url
                    legenda()

            })

        }) 
  
        })
          
    }
    function legenda(){
        fetch('https://api.quotable.io/random').then(legenda=> legenda.json()
        .then(dados=>{

                     var legenda = document.querySelector("#legenda")

                     legenda.innerHTML = `${dados.content}`

        }))
    }

primaryRequest()
    
   