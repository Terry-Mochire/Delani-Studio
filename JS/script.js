$(function(){
    //Function to toggle what we do icons and descriptions
    $('#design').click(function(){
        $('#design img').toggle();
        $('.design p').toggle();
    });
    $('#development').click(function(){
        $('#development img').toggle();
        $('.development p').toggle();
    });
    $('#product').click(function(){
        $('#product img').toggle();
        $('.product p').toggle();
    });
    // Function to hover on Portfolio section.
    $('#work1').mouseover(function(){   
        $('#work1 img').hide();
        $('#project1').show();
    });
    $('#work1').mouseout(function(){
        $('#project1').hide();
        $('#work1 img').show();
    });
    $('#work2').mouseover(function(){   
        $('#work2 img').hide();
        $('#project2').show();
    });
    $('#work2').mouseout(function(){
        $('#project2').hide();
        $('#work2 img').show();
    });
    $('#work3').mouseover(function(){   
        $('#work3 img').hide();
        $('#project3').show();
    });
    $('#work3').mouseout(function(){
        $('#project3').hide();
        $('#work3 img').show();
    });
    $('#work4').mouseover(function(){   
        $('#work4 img').hide();
        $('#project4').show();
    });
    $('#work4').mouseout(function(){
        $('#project4').hide();
        $('#work4 img').show();
    });
    $('#work5').mouseover(function(){   
        $('#work5 img').hide();
        $('#project5').show();
    });
    $('#work5').mouseout(function(){
        $('#project5').hide();
        $('#work5 img').show();
    });
    $('#work6').mouseover(function(){   
        $('#work6 img').hide();
        $('#project6').show();
    });
    $('#work6').mouseout(function(){
        $('#project6').hide();
        $('#work6 img').show();
    });
    $('#work7').mouseover(function(){   
        $('#work7 img').hide();
        $('#project7').show();
    });
    $('#work7').mouseout(function(){
        $('#project7').hide();
        $('#work7 img').show();
    });
    $('#work8').mouseover(function(){   
        $('#work8 img').hide();
        $('#project8').show();
    });
    $('#work8').mouseout(function(){
        $('#project8').hide();
        $('#work8 img').show();
    });
    //function to output current year
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('year').innerHTML= year;
});