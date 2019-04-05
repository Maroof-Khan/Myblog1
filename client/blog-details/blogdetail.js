import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../../import/collections/insert.js';

Template.blogdetails.helpers({
  show_detail(){

              $.urlParam = function(name){
              var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
              return results[1] || 0;
             }
            var blog_id  = $.urlParam('ID');
            var blog_node = Blog.find({"_id": blog_id}).fetch();
            return blog_node;

  }
})