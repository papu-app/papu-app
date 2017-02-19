   var number = $('.number')
   counter = 0
   number.text(counter);

   $('.plus').click(function add() {

       number.text(++counter);
   })


   $('.minus').click(function subtract() {
       if (counter > 0) {
           number.text(--counter);
       }
   })
