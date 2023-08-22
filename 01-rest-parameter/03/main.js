function mergeObjects(...obj){
    return obj.reduce((acc,obj) => {
        for(let key in obj){
            if (!acc[key]) acc[key] = obj[key];
        }
        return acc
    },{})
}