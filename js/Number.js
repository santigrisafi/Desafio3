class Number {
  find_max = (nums) => {
    let max_num = Number.NEGATIVE_INFINITY; //Sirve para sacar el menor entre un arreglo de numeros
    for (let num of nums) {
      //For Each hace un get de cada numero del arreglo de nums
      if (num > max_num) {
        max_num = num;
      }
    }
    return max_num;
  };
}
