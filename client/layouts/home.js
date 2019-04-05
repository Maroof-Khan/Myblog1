import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../../import/collections/insert.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Template.registerHelper("entries",function(){
// 	return "Global aaaa";
// })

Template.layouts.helpers({
		log(){
             var blog_node = Blog.find().fetch();
         	 return blog_node;
		}
	 });


Template.layouts.events({
	'click .edit_class':function(event,instance){
		 event.preventDefault();
         var create_id = this._id;
         location.href = `updateform?ID=${create_id}`;
		}
	});

Template.layouts.events({
	'click .show_details':function(event,instance){
		 event.preventDefault();
         var create_id = this._id;
         location.href = `blogdetails?ID=${create_id}`;
		}
	});

Template.layouts.events({
	'click .create_class':function(event,instance){
		 event.preventDefault();
		 FlowRouter.go('/blog_form');
		}
	});

Template.layouts.events({
	'click .delete_class':function(event,instance){
		 event.preventDefault();
		 var delete_id = this._id;
		 var conf = confirm("Do you want to delete this blog ?? It will remove your all details from database!! ");
		 if(conf){
		 	 Blog.remove(delete_id);
		 }
		}
	});
