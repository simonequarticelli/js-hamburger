// Appare il simbolo delle 3 linee solo quando lo schermo è < 1000px,
// al click del simbolo appare un div che copre l’intero schermo con i link alle sezioni del sito.
// Un click sul simbolo X, fa scomparire il div


// $('.header-right > a').click(function() {
//   $('.hamburger-menu').fadeIn(1000);
// });
//
// $('.close').click(function(){
//   $('.hamburger-menu').fadeOut(1000);
// });


$(document).ready(function() { //<-- ready --> a documento finito fai questo
   $('.header-right > a').click(function() {
       $('.hamburger-menu').addClass('active');
   });
   $('.close').click(function() {
       $('.hamburger-menu').removeClass('active');
   });
});
