function sum(one, two){
    var total = one + two;
    return total;
}

function divide(one, two){
    var total = one / two;
    return total;
}

var total = 0;

module.exports = {
    sum: sum,
    divide: divide,
    total: total
}

