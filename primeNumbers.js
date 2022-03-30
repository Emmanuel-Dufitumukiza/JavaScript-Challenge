function primeNumbers(arr){

    let primeArray = new Array();
    
    for(let i=0; i<arr.length; i++){
       let count =0 ;
       for(let j=1; j<=arr[i]; j++){
           if(arr[i]%j ==0)
             count ++;
       }
       if(count == 2)
        primeArray.push(arr[i]);
    }

    return primeArray;
}

console.log(primeNumbers([21,5,3,7,8,2,9,11]))