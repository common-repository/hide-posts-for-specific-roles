jQuery(document).on('ready', function($){
    
	//Postbox
    postboxes.save_state = function(){
        return;
    };
    postboxes.save_order = function(){
        return;
    };
    postboxes.add_postbox_toggles();

    //Select all
    jQuery('input[name="select-all"]').click(function(event) {

    	var selectAllPostId = jQuery(this).attr('data-selectallpostid');
        var selectAllPostIdInput = jQuery('input[data-postid="'+selectAllPostId+'"]');

	    if(this.checked) {
	        // Iterate each checkbox
	        selectAllPostIdInput.each(function() {
	            this.checked = true;                        
	        });
	    }else{
	        // Iterate each checkbox
	        selectAllPostIdInput.each(function() {
	            this.checked = false;                        
	        });
	    }
	});
	jQuery('input[name="select-all-less-administrator"]').click(function(event) {

    	var selectAllLAPostId = jQuery(this).attr('data-selectalllapostid');
        var selectAllLAPostIdInput = jQuery('input[data-postid="'+selectAllLAPostId+'"]').not('input[data-role="administrator"]');

	    if(this.checked) {
	    	jQuery('input[name="select-all"]').checked = false;
	        // Iterate each checkbox
	        selectAllLAPostIdInput.each(function() {
	            this.checked = true;                        
	        });
	    }else{
            selectAllLAPostIdInput.each(function() {
                this.checked = false;                        
            });
        }
	});

	//Search/Filter
    jQuery(".hpfsr-filter").on('keyup search', function(e){

        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
 
        // Retrieve the input field text and reset the count to zero
        var filter = jQuery(this).val(), count = 0;
        
        // Retrieve the input class for get currrent post type
        var box_id = jQuery(this).attr("id");
        //console.log(box_id);
 
        // Loop through the comment list
        jQuery("#"+box_id+" ul li.hpfsr-post-name span").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if (jQuery(this).text().search(new RegExp(filter, "i")) < 0) {
                jQuery(this).closest("li").fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                jQuery(this).closest("li").show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        jQuery("#filter-count-"+box_id+" strong").text(count);
    });
	
});