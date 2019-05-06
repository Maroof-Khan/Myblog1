import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import {Blog} from './../../import/collections/insert.js';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


// Template.blogdraft.helpers({
//    show_draft(){
//    	     console.log("inside blogdraft --");
//    	     var show_draft = Blog.find({"savein_draft": true}).fetch();
//    	     console.log("draft_blog ::",show_draft);
//          return show_draft;
//    }
// })

// Template.blogdraft.events({
// 	'click #create_blog' : function(events,instance){
// 		 FlowRouter.go('/blog_form')
// 	}
// })