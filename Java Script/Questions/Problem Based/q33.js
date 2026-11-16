// Currency exchenge


const price = {
    'USD': 1,
    'EURO': 1.2,
    'INR': 96
}

function exchenge(ammount, from, to){
    if(!price[from] || !price[to]) return false;
    let usd = ammount / price[from];
    return `${usd / price[to]} ${to}`;
}


console.log(exchenge(96, 'INR', 'USD'));
