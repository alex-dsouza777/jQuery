$(document).ready(function(){
    // YOUR JQUERY CODE HERE
    console.log("Using JQUERY")
// $('selectior').action() -- syntax
// $('p').click();
$('p').click(function(){
    console.log('You clicked on P', this);
    // $(this).hide() // -- hide selected item
    // $('p').hide() // -- hide all
    // $('#id').hide() // -- hide all
    // $('.class').hide() // -- hide all
     });

     // There are three main types of selectrors
// 1. element selectror
// $('p').click(); // --example of element selector which click on all p


// 2. id selector 
// $('#second').click();


// 3. class selector
// $('.odd').click();

// 4. other selector
// $('*').click(); //-- all elements
//  $('p.odd').click(); //-- odd elements
// $('p:first').click()  //-- First element 
})