$(document).ready(function() {
	$('#shopping-item').keydown(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			var listItem = $(this).val();
			console.log(listItem);
			$('#shopping-list').append('<li class="list-group-item"><i class="fa fa-check-square-o fa-3"></i>' + listItem + '<i class="fa fa-trash-o"></i></li>');
		}	
	});
	$('.list-group-item').mouseover(function() {
		$('input.checkbox').css('display', 'inline-block');
	});
	$('.list-group-item').mouseleave(function() {
		$('input.checkbox').css('display', 'none');
	});
	$('ul').on('click', '.fa-check-square-o', function(event) {		
		if ($(this).parent().hasClass('completed')) {
			$(this).parent().removeClass('completed');
		}
		else {
			$(this).parent().addClass('completed');
		}
	});
	$('ul').on('click', '.fa-trash-o', function(event) {
		$(this).parent().slideUp();
	})
});

function newItem(){
	var listItem = $(this).val();

}


/*1. document ready
2. keydown enter
3. function newItem () {
	//add text
	var listItem = $(this).val();
	// append ("<li>" + listItem + "</li>"") add checkbox and delete icon (child of li)as well within li
	// 
}
4. Use CSS to display the checkbox and delete icon (set to hidden by default)
5. function removeItem {
	// add click event on trash icon
	// $(this).parent("<li>").remove();
}
6. function  completeItem {
	// .toggleClass()
} */
