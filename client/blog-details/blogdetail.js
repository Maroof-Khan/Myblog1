import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../../import/collections/insert.js';

Template.blogdetails.helpers({
  show_detail(){
              var details = [];
              $.urlParam = function(name){
              var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
              return results[1] || 0;
             }
            var blog_id  = $.urlParam('ID');
            return Blog.find({"_id": blog_id}).fetch();          
  }
});

var blog_desc = "";
function highlightElements(e){
	 	var parent = $(e.target).parents('.blog-description');           
	 	if(parent.length > 0) {
	 		highlightText(e.target);	
	 	}
         console.log("highlightText  ::",parent[0].innerHTML);
         blog_desc = parent[0].innerHTML;
};

function highlightText(element){
		var selection = getSelectedText(); 
        highlightSpecificElement(element,[selection]);
};

function highlightSpecificElement(element, selectionWordList) {
		var self = element;
		for (var i = selectionWordList.length - 1; i >= 0; i--) {
			var selection = selectionWordList[i]
			if(selection.length >= 3) {
	            var replacement = $('<span></span>').attr({'class':'hl'}).html(selection);

	            var replacementHtml = $('<div>').append(replacement.clone()).remove().html();
	            
	            $(self).html( $(self).html().replace(selection, replacementHtml) );
        	}
		}
}

//Grab selected text
function getSelectedText(){ 
	    if(window.getSelection){ 
	        return window.getSelection().toString(); 
	    } 
	    else if(document.getSelection){ 
	        return document.getSelection(); 
	    } 
	    else if(document.selection){ 
	        return document.selection.createRange().text; 
	    } 
};

function saveBlog(){
	   var blog_id  = $.urlParam('ID');
	   var blogdesc = blog_desc;
	   Meteor.call("update_heighlited_description",blog_id,blogdesc, function(error,result)
	   {
		    if(error){
		      alert("Some error occured");
		    }else{
		      alert("Successfully save highlight text.");
		    }
	    })
};

Template.blogdetails.events({
 'mouseup .blog-description':function(event,instance){
      event.preventDefault();
      highlightElements(event);
 },

   'click .save_highlited_text':function(event,instance){
       event.preventDefault();
       saveBlog(); 
       
	}
});

