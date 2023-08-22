function edit(arr) {
    const newArr = [...arr]
    newArr[3] = newArr[3]**2;
    return newArr;
}