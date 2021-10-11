const fs = require('fs')


let rarities = JSON.parse(fs.readFileSync('pointagestash.json'))
console.log(Object.keys(rarities).length)
let owners = []
let total = 1170099*10
let csv = "wallet,points,%\n"
for (var rare in rarities){
	csv+=rare +',' + rarities[rare].toString() + ',' + (rarities[rare] / total * 100).toString() + '\n'
}

fs.writeFileSync('pointagestash.csv', csv)