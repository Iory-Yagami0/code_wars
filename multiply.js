function multiply(num){
    let r = (''+num).length;
      if (num<0) r = r - 1
      return num * (5**r)
    }