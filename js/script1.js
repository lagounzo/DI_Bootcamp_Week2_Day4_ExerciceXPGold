//Write a program to check whether a string is blank or not.

/**
 * Prend en parametre un mot et nous retourne s'il est vide ou pas
 * @param word
 */
function isBlank(word) {
    return word.trim() == '';
}

console.log(isBlank(''));
console.log(isBlank('abc'));