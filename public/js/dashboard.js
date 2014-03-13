'use strict';
//var data = require('../../data.json');

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
    var name = $(this).closest('.individualtasks').attr('id');
    var id = $(this).closest('.individualtasks').attr('name');
    var task = $(this).closest('.tasktitles').attr('id');
    var taskid = $(this).closest('.tasktitles').attr('taskid');
    
    
    $('input:checkbox').on('change', function () {
        var input = $(this).next('h2');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
            data.Group[req.session.groupID].Members[id].Tasks[taskid].check = checked;
            console.log(data.Group[req.session.groupID].Members[id].Tasks[taskid]);
        } else {
            $(input).css('textDecoration', 'none');
        }
    });
    
   $(".details").hide(); 
  $(".tasktitles").click(function(){      
      var cur = $(this).next('.details');
     console.log(cur); $(this).next('.details').toggle();
  });

    
    

    $('.invite').click(analytics);
    
}

function analytics(e){
     
   ga("send","event","invite","click");    
}

