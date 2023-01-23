
const player_input = document.getElementById('search-player');
const btn = document.getElementById('submit-player');

const api_key = process.env.API_KEY;

btn.addEventListener('click', function(){
    var player = player_input.value;
    console.log('player: '+player+'/n'+api_key)
});

