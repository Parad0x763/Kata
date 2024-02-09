function duplicateEncode(word) {
    let word_lower = word.toLowerCase();
    let currentChar = word_lower[0];
    let newWord = new String();
    let index = 0;
    // try {} catch (error) {

    // } finally {
    //     return 
    // }
    while (index < word.length) {
        if (word.toLowerCase().substring(index + 1, word.length).includes(word[index].toLowerCase())) {
            word_lower = word_lower.replaceAll(word[index].toLowerCase(), ")");
        } else {
            word_lower = word_lower.replace(word[index].toLowerCase(), "(");
        }

        index++;
        // currentChar = word[index].toLowerCase();
    }
    return word_lower;
}

// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));