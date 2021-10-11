const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs')
const connection = new solanaWeb3.Connection("https://fragrant-bitter-sound.solana-mainnet.quiknode.pro/8a6cee2a1b6d44f3ad57a2fbd3af1be61defc820/")
let pointage = {}

let rarities = JSON.parse(fs.readFileSync('raritiesstash.json'))
console.log(Object.keys(rarities).length)
setTimeout(async function(){
let mints = JSON.parse(fs.readFileSync('mintsstash.json'))
console.log(Object.keys(mints).length)
let owners = []

totals = []
for (var mint in mints){
	let done = false

		total = 0 
	while(done == false){
		for (var trait in mints[mint]){
		total+=1/(rarities[mints[mint][trait].value] / 10000*10)
	}

	totals.push(total)
	console.log(total)
try {
	
	console.log(1)
accounts = await connection.getProgramAccounts(new solanaWeb3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), {       "encoding": "jsonParsed",  "filters": [   {"dataSize": 165   }, {  "memcmp": {  "offset": 0, "bytes": mint}}  ] })
console.log(accounts)
}
catch(err){
	for (var i in err.branch[0]){
		if(err.branch[0][i].account.data.parsed.info.tokenAmount.uiAmount == 1){
	console.log(err.branch[0][i].account.data.parsed.info.owner)
	try {
		if (!Object.keys(pointage).includes(err.branch[0][i].account.data.parsed.info.owner)){
			pointage[err.branch[0][i].account.data.parsed.info.owner] = 0
		}
		pointage[err.branch[0][i].account.data.parsed.info.owner]+=total
	console.log(Object.keys(pointage).length)
done = true 
}
catch(err){

}
}
}
}
}
}
t = 0
c = 0
fs.writeFileSync('pointagestash.json', JSON.stringify(pointage))
for (var total in totals){
	t += totals[total]
	c += 1
}
console.log(c)
console.log(t / c)
//fs.writeFileSync('raritiesstash.json', JSON.stringify(rarities))
console.log(owners)
},1)