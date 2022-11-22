const word = "racecar";
let reverseWord='';
const letter = [];
// push, pop
for(let i=0; i<word.length; i++) {
    letter.push(word[i]);
}

for(let i=0; i<word.length; i++) {
    reverseWord+=letter.pop();
}

if(reverseWord === word) {
    console.log(reverseWord," Word is palindrome ");
}else {
    console.log(reverseWord," Word is palindrome ");
}
