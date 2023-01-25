
const player_input = document.getElementById('search-player');
const btn = document.getElementById('submit-player');
const resp = document.getElementById('response');


/* btn.addEventListener('click', function(){
    var data = {player: 'LordKnedlik'};
    console.log(data)
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/submit');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(data));
 
}); */


btn.addEventListener('click', function () {
    var player = player_input.value;

    console.log(player)

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            player: player
        })
    }).then(res => {
        if (res.ok) {
            resp.outerHTML = res.statusText;
            console.log('fetch was successful');
            console.log(res);
        }
    })
        .catch(err => {
            console.log('Error');
            console.error(err);
        })
});

