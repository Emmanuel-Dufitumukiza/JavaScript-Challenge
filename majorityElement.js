function hasMajorityElement(arr){

    let majorityElement = false;

    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }

        if(count > arr.length/2){
            majorityElement = arr[i];
        }
    }

   return majorityElement;
}

console.log(hasMajorityElement([3,1,3,4,4,5,3,5,3,3,3,6,3]))