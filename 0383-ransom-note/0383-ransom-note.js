/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (i in ransomNote) {
        let match = magazine.indexOf(ransomNote[i])
        if (match == -1) {
            return false
        }
        //remove char if match
        magazine = magazine.slice(0, match) + magazine.slice(match+1)
    }
    return true
};