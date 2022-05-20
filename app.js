addEventListener('load', function(e) {

    const bt = document.querySelector("button");
    
    function floatToFraction () {
    
      const flNumb = document.querySelector("input").value;
    
      if(!validate(flNumb)) {
        document.querySelector('#test').innerHTML = "invalid input";
      }
    
      const twoParts = flNumb.toString().match(/[0-9]+/g);
    
      const decLength = twoParts[1].length;
    
      let denom = Math.pow(10, decLength);
    
      let num = Math.round(flNumb * denom);
    
      let i = denom;
      while(i >= 1) {
        console.log(num, denom, i);
        if(num % i === 0 && denom % i === 0) {
          num = num/i;
          denom = denom/i;
        }
        i--;
      }
      document.querySelector('#test').innerHTML = num + "/" + denom;
    }
    
    function validate(inp) {
      if(inp.length === 0) return false;
      if(isNaN(inp)) return false;
    }
    
    bt.addEventListener("click", floatToFraction);
     
    });