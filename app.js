
const arr = ["a","quick","brown","fox"]
let result = "";
for (let i = 0; i < arr.length; i++) {
      if(arr[i].length > result.length)   {
        result = arr[i]+"..."
      }
}
console.log(result)