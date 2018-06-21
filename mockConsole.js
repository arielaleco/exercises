

$(document).ready(function () {
             
    PrintThis("Starting", "");    
    //----------------------------------------------------------------------------------
    newFunction();
    
    PrintThis("The end !!!!!", "RTL");
    
    //----------------------------------------------------------------------------------

   // PrintThis(JSON.stringify(persons));
   // $('html, body').animate({ scrollTop: 3000 }, '50');

    window.scrollTo(0,document.body.scrollHeight);


});

function PrintThis(printedStr, className) {
    var fakeConsole = $("#mimic-console");
    console.log("in PrintThis");   
    var oldVal = fakeConsole.html();
    fakeConsole.html(oldVal + "<p class=" + className + ">" + printedStr + "</p>");
}

function newFunction() {
    
    DoExcercise();
}
