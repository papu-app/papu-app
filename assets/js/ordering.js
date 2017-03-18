   var number = $('.number')
   counter = 1
   number.text(counter);

   $('.plus').click(function add() {

       number.text(++counter);
   })


   $('.minus').click(function subtract() {
       if (counter > 1) {
           number.text(--counter);
       }
   })


   $('.plus').on("click", function() {
       var result = counter * 29.90;
       $('.result').text(result.toFixed(2))
   });

   $('.minus').on("click", function() {
       var result = counter * 29.90;
       $('.result').text(result.toFixed(2))
   });
