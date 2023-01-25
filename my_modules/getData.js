
var checkData = require('./checkData.js')

async function getData(inputPlayer){
    const player = await checkData.findID()
    const season = await checkData.findSeason(inputPlayer);

    

    return data;
}