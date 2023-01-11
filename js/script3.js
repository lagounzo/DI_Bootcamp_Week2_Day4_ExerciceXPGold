/* @author N'ZO LAGOU
 * @description DI-Bootcamp Week2 Day4 ExerciceXPGold: SwapCase
 */


//Write a JavaScript function which takes a string as an argument and swaps the case of each character.
/**
 * takes a string as an argument and swaps the case of each character.
 * @param phrasing
 */
function swapCase(phrasing) {
    let phrasingSwap = "";
    for (let i = 0; i < phrasing.length; i++) {
        if (("" + phrasing.charAt(i)) == ("" + phrasing.charAt(i)).toUpperCase()) {
            phrasingSwap += ("" + phrasing.charAt(i)).toLowerCase();
        } else {
            phrasingSwap += ("" + phrasing.charAt(i)).toUpperCase().trim();
        }
    }
    return phrasingSwap.trim();
}

console.log(swapCase("The Quick Brown Fox"));