$(document).ready(function() {
	$("#q1").click(function(){
        $("#a1").slideToggle("slow");
	});
  
	$("#q2").click(function(){
        $("#a2").slideToggle("slow");
	});
	
	$("#q3").click(function(){
        $("#a3").slideToggle("slow");
	});
	
	$("#q4").click(function(){
        $("#a4").slideToggle("slow");
	});
	
	$("#q5").click(function(){
        $("#a5").slideToggle("slow");
	});
});

$(window).on('load', function() {
	$('div').fadeIn("fast");
	$('p').fadeIn("fast");
	$('h1').fadeIn("fast");
});