// Generate Text base Bar Charts

function getBarChart(table){
    for(let data of table){
        let bar = ""
        for(let i = 1; i<= data; i++){
            bar += '* '
        }
        console.log(bar);
    }
}

getBarChart([2, 5, 3, 6, 9])