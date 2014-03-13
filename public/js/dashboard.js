'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
    
    $('input:checkbox').on('change', function () {
        var input = $(this).next('h2');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    });

    $('.tasktitles').click(addTaskDetails);
    $('.invite').click(analytics);
    
}

function analytics(e){
     
   ga("send","event","invite","click");    
}

function addTaskDetails(e) {
    e.preventDefault();
    var name = $(this).closest('.individualtasks').attr('id');
    console.log(name);
    var task = $(this).closest('.tasktitles').attr('id');
    console.log(task);
    
    console.log($(this).closest('.taskitems'));
  
}