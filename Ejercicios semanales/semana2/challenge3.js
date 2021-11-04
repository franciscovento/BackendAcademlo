function arrayOfMultiples (num, length) {
  let resp = [];
  for (let i = 0; i < length; i++) {
      resp.push(num * (i+1));
    
  }
  

  return resp;
}


module.exports = arrayOfMultiples;