function removeRandom(arr) {
    let num = Math.floor(Math.random()*10);
    const newArr = [...arr];
    newArr.splice(num,1);
    return newArr
}