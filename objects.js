function nestedObjects(arr){
    let myObj = {};
  for(let i=0; i<arr.length; i++){
      let splitedArray = arr[i].split(" ");
      let firstName = splitedArray[0];


      let map = new Map();
            let obj = new Map();
            obj.set("secondName",splitedArray[1].slice(0,splitedArray[1].length-1));
            obj.set("age",splitedArray[2]);

           let obj2 = {}

           obj.forEach((value, key)=>{
            obj2[key] = value;
           })

            map.set(firstName, obj2)

      map.forEach((value, key)=>{
          myObj[key] = value;
      })
      
    }
    return myObj;
}

console.log(nestedObjects(["Patrick wyne, 30","emmy dufitumukiza 19"]))