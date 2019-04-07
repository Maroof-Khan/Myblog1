import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import {UserDetail} from './../../import/collections/insert.js';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


Template.sign_up.events({
	'click .user_detail':function(event,instance){
       // alert('hiiiiii');
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
        // alert(`${user_name} ${user_email} ${user_password}`);

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

          // FlowRouter.go('/blog_name');
	},


  'click .for_login':function(event,instance){
       // alert('hiiiiii');
        event.preventDefault();
       FlowRouter.go('sign_in');
  }
});