/* Password Obfuscator
Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/


const passwordObfuscate = function(userInput) {
  let password = "";
  for (let char = 0; char < userInput.length; char++) {
    if (userInput[char] === "a")  {
      password += '4';
    } else if (userInput[char] === "e")  {
      password += '3';
    } else if (userInput[char] === "o")  {
      password += '0';
    } else if (userInput[char] === "l")  {
      password += '1';
    } else {
      password += userInput[char];
    }
  }
  return password;
};

let userInput = process.argv[2];
console.log(passwordObfuscate(userInput));
