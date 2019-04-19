import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';


import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


Template.previewblog.helpers({
	show_preview(){
		console.log("session data ::",Session.get("preview_blog_details"));
		return Session.get("preview_blog_details");
	}
})

Template.previewblog.events({
	'click #edit_blog' : function(){
        FlowRouter.go('/blog_form')
	},

	'click #submit_blog' : function(){
		alert("submit");
	}
})
