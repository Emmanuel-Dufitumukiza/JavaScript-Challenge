function sortArrayDesc(myArr){
    
    let arr = myArr;
    myArr = []

    function checkPrime(num){
        let count =0 ;
        for(let j=1; j<=num; j++){
            if(num%j ==0)
              count ++;
        }
        if(count == 2)
         return true;
         return false;
    }

    for(let i=0; i<arr.length; i++){
        for(let a= 0; a<arr.length; a++){            
            if(arr[a]<arr[a+1]){
                let temp = arr[a];
                arr[a] = arr[a+1];
                arr[a+1] = temp;
            }
        }
    }

    for(let j=0; j<arr.length; j++){
        let isPrime = checkPrime(arr[j])

        if(!isPrime){
            myArr.push(arr[j])
        }
    }
    
    return myArr;
}

console.log(sortArrayDesc([7,6,5,9,2,11,4]))