function twoSums(numbs, target) {
    let indexResp = [];
   for (let i = 0; i < numbs.length; i++) {
       const element = numbs[i];
       const missing = target - element;

    if (numbs.indexOf(missing, i + 1) !== -1) {
        indexResp.push(numbs.indexOf(element))
        indexResp.push(numbs.lastIndexOf(missing))
        return indexResp;
      
    }
       
       
   }
}

twoSums([2,7,11,15], 9)

module.exports = twoSums;