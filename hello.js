function CheckPalindrome(string){
    const len = string.length;
        for (let count = 0; count < len / 2; count++)
        {
            if (string[count] !== string[len - 1 - count]){
                return "It is NOT a Palindrome";
            }
        }
    return "It is a Palindrome"
    }

const string = prompt("Enter a string : ");
const value = CheckPalindrome(string);
console.log(value);
