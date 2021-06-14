$(document).ready(function(){
    console.log('I am in a new file now')

    // YOUR JQUERY CODE HERE
    console.log("Using JQUERY")
// $('selectior').action() -- syntax
// $('p').click();
// $('p').click(function(){
//     console.log('You clicked on P', this);
    // $(this).hide() // -- hide selected item
    // $('p').hide() // -- hide all
    // $('#id').hide() // -- hide all
    // $('.class').hide() // -- hide all
    //  });

// $('p').dblclick(function(){
// console.log('You double clicked on P', this);
// $(this).hide() // -- hide selected item
// $('p').hide() // -- hide all
// $('#id').hide() // -- hide all
// $('.class').hide() // -- hide all
    // });


// $('p').mouseenter(function(){
// console.log('You entered', this);
// $(this).hide() // -- hide selected item
// $('p').hide() // -- hide all
// $('#id').hide() // -- hide all
// $('.class').hide() // -- hide all
    // });

// $('p').hover(function(){
// console.log('You Hovered', this);
// $(this).hide() // -- hide selected item
// $('p').hide() // -- hide all
// $('#id').hide() // -- hide all
// $('.class').hide() // -- hide all
    // },
    
    // function(){
    //     console.log('Thanks for visiting')
    // });

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



// Events in jQuery
    // 1. mouse events = click, dbclick, mouseenter, mouseleave
    // 2. keyboard events = keypress, keydown, keyup
    // 3. form events = submit, change, focus, blur
    // 4. document/window events = load, resize, scroll, unload


// *********************  ON METHOD  *********************
$('p').on({
    click: function (){
    console.log('Thank you', this);
    },
    mouseleave: function(){
        console.log("Mouseleave");
    }
})
// $('#wikki').hide(1000, function (){
//     console.log('Hidden')
// })

// $('#wikki').show(1000, function (){
//     console.log('Show')
// })

// $('#but').click(function(){
//     $('#wikki').toggle(1000);
// })

// $('#but').click(function(){
//     $('#wikki').fadeIn(1000);
// })

// $('#but').click(function(){
//     $('#wikki').fadeOut(1000);
// })

// $('#but').click(function(){
//     $('#wikki').fadeToggle(1000);
// })

// $('#but').click(function(){
//     $('#wikki').fadeTo(1000);
// })
// *********************  SLIDE METHODS - CALLBACK METHOD IS OPTIONAL  *********************

// $('#wikki').slideUp(1000)
// $('#wikki').slideDown(1000)
// $('#wikki').slideToggle(1000, function(){
//     console.log('Done');
// }) 

// *********************  ANIMATE FUNCTION   *********************

// $('#wikki').animate({
//     opacity:0.3,
//     height: '150px',
//     width: '350px'
// }, 2000)

// $('#wikki').animate({opacity:0.3}, 4000);
// $('#wikki').animate({height:'300px'}, 1000);


// *********************  ADDING CSS  *********************

// $('#wikki').css('background-color', 'red')
// }); 

// *********************  AJAX IM JQUERY  *********************
$.get('https://code.jquery.com/jquery-3.6.0.js', function(data, status){alert(data);})