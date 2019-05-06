// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { Meteor } from 'meteor/meteor';
// import {Blog} from './../../import/collections/insert.js';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// // Template.registerHelper("entries",function(){
// // 	return "Global aaaa";
// // })

// Template.layouts.helpers({
// 		log(){
//              var blog_node = Blog.find({},{sort :{created_at : -1}}).fetch();
//          	 return blog_node;
// 		}
// });


// Template.layouts.events({
// 	'click .edit_class':function(event,instance){
// 		 event.preventDefault();
//          var create_id = this._id;
//          location.href = `updateform?ID=${create_id}`;
// 		},

//      'click .show_details':function(event,instance){
// 		 event.preventDefault();
//          var create_id = this._id;
//          location.href = `blogdetails?ID=${create_id}`;
// 		},

// 	 'click .create_class':function(event,instance){
// 		 event.preventDefault();
// 		 FlowRouter.go('/blog_form');
// 		},
     
//      'click .delete_class':function(event,instance){
// 		 event.preventDefault();
// 		 var delete_id = this._id;
// 		 var conf = confirm("Do you want to delete this blog ?? It will remove your all details from database!! ");
// 		 if(conf){
// 		 	   Meteor.call("delete_blog",delete_id, function(error,result)
// 		       {
// 		       	if(error){
// 		       		alert("Some error occured");
// 		       	}else{
// 		       		alert("Successfully deleted.");
// 		       	}
// 		       }); 
// 		 }
// 		}

// });
