class Numbers {
  numbers = [];
  addNumbers = () => {
    for (let i = 0; i < 4; i++) {
      let num = parseInt(prompt("Ingrese el numero " + i));
      this.numbers.push([num]);
    }
    return this.numbers;
  };
}
