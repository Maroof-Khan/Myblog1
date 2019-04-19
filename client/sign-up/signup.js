import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import {UserDetail} from './../../import/collections/insert.js';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

 check_highlight=true;
Template.sign_up.events({
	'click .user_detail':function(event,instance){
        event.preventDefault();
        var user_name = $("#user_name").val();
         if (user_name == "") {
              alert("User name must be filled out");
              return false;
            }
        var user_email = $("#user_email").val(); 
         if (user_email == "") {
              alert("User email must be filled out");
              return false;
            }       
        var user_password = $("#user_password").val();
         if (user_password == "") {
              alert("Password must be filled out");
              return false;
            }
        var current_date =  new Date().toString();
        var random_number = Math.floor(Math.random()*100000000);
        var user_id = `blog_id_${random_number}`;

        $('#form')[0].reset();

        Meteor.call("insert_userdetail",user_name,user_email,user_password,user_id,current_date, function(error,result)
       {
        if(error){
          alert("Some error occured");
        }else{
          alert("Successfully register.");
          FlowRouter.go('/blog_name');
        }
       }); 
	},


  'click .for_login':function(event,instance){
        event.preventDefault();
       FlowRouter.go('sign_in');
  }
});

Template.check_show_case.onRendered(function(){

var HIGHLIGHT_CLASS = "highlight";
var HIGHLIGHT_ACTIVE_CLASS = "highlight-is-active";
var $body = $(document.body);
var highlightIsActive = false;
var $highlightedElement = $();
var clickBubbling = false;

$( "#btn-1" ).on( "custom1", function( e ) {
   if (highlightIsActive) return;
    var highlightQuery = $(e.target).attr('highlight');
    activateHighlight(
        $(highlightQuery)
    );
});
$( "#btn-1").trigger( "custom1");

// CLICK ELEMENT WITH "highlight" attribute (HIGHLIGHTER)

$(document).on('click', /*'[' + HIGHLIGHT_CLASS + ']',*/ function (e){
    if (highlightIsActive) return;
    deactivateHighlight();
    var highlightQuery = $(e.target).attr('highlight');
    activateHighlight(
        $(highlightQuery)
    );
});

// CLICK OUTSIDE OF HIGHLIGHT ELEMENT
$(document).on('click', function (e) {
    
    if (
        !highlightIsActive ||
      $(e.target).attr(HIGHLIGHT_CLASS)// check when HIGHLIGHTER is clicked
    ) return;
    var $highlightedParent = $(e.target).closest('.' + HIGHLIGHT_CLASS);
    if (!$highlightedParent.length || check_highlight) {
        deactivateHighlight();
         //check_highlight =1;
   }
   if(check_highlight==true){
      $("#btn-2").trigger('click'); 
      check_highlight=false;
   }
});

// HIGHLIGHT HELPERS
function activateHighlight($element) {
    $highlightedElement = $element;
    highlightIsActive = true;

    $body.addClass(HIGHLIGHT_ACTIVE_CLASS);
    $highlightedElement.addClass(HIGHLIGHT_CLASS);
}

function deactivateHighlight() {
    $body.removeClass(HIGHLIGHT_ACTIVE_CLASS);
    $highlightedElement.removeClass(HIGHLIGHT_CLASS);

    $highlightedElement = $();
    highlightIsActive = false;
}

})
