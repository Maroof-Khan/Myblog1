import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import {UserDetail} from './../../import/collections/insert.js';
// import './../bootstrap-link/bootstrap-link.html';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Template.sign_in.events({
	'click .for_signin':function(event,instance){
        // alert('signin');
        event.preventDefault();
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
       
        var User_Detail = UserDetail.find({"user_email":user_email,"user_password":user_password}).fetch();
        if(User_Detail.length){
        	if(user_email == User_Detail[0].user_email && user_password == User_Detail[0].user_password){
        	   alert('email and password matches');
               FlowRouter.go('/blog_name');        
               }
           //  if(user_password == User_Detail[0].user_password){
        	  // alert('password matches');
           //     // FlowRouter.go('/');
           //  }
	        // else{
	        // 	alert('password is not correct');
	        // }
        }
        else{
        	alert('Your email or password is not correct');
        }
        
	},


  'click .for_signup':function(event,instance){
       // alert('signin');
       FlowRouter.go('/');
    }

});