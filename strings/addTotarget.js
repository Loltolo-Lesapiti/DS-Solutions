const Reverse_string = (input) => {
  let index = input.length - 1;
  let new_String = "";
  while (index >= 0) {
    new_String = new_String + input[index];
    index -= 1;
  }
  return new_String;
};

//Alternative solution that splits the string into an array or a list and uses reverse and then join later.

const alt_reverse = (input) => {
  return input.split("").reverse().join("");
};

console.log(alt_reverse("Loltolo"));
