// add
function add(x, y) {
    if(typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }else {
        return undefined
    }
}

module.exports = add;
