function doubleAndReturnArgs(arr,...num) {
    return [...arr,...num.map(x=>x*2)]
}