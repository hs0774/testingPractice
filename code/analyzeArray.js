const analyzeArray = arr => {
    if(arr.length===0 || !Array.isArray(arr)){
        return;
    }
    arr.sort((a,b) => {
        return a-b;
    });
    const sum =arr.reduce((total,num) => {
        return total+num;
    },0);
    let av = sum/arr.length;

    const object = {
        average:av,
        min:arr[0],
        max:arr[arr.length-1],
        length: arr.length,
    }
    return object;
}

export default analyzeArray;