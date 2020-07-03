function piramide(a) {
    a=5;
    for (let i = 0; i <= a; i++) {
      let b = '';
      for (let j = 0; j < i ; j++) {
        b = b + '*';
      }
      document.write(b)
      document.write("<br>");
    }
    for (let i = a; i>=0; i--) {
        let b = '';
        for (let j = i-1; j >0 ; j--) {
          b = b + '*';
        }
        document.write(b)
        document.write("<br>");
      }
  }

 




