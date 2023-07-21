/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let accountsSums = accounts.map(i => i.reduce((m,n) => m + n, 0))
    return Math.max(...accountsSums)
};