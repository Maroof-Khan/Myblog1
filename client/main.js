import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../import/collections/insert.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';

import {Images} from './../import/collections/insert.js';

Template.blogform.events({
	'click #savein_draft_blog':function(event,instance){
        //funkyimg.com/i/2SSkx.jpeg
        event.preventDefault();
        //GET DATA FROM FORM AND APPLY FORM VALIDATION
		    var savein_draft = true;
        var blog_name = $("#blog_name").val();
         if (blog_name == "") {
              alert("Blog Name must be filled out");
              return false;
            }
        var blog_type = $("#blog_type").val();  
        if (blog_type == "") {
              alert("Blog type must be filled out");
              return false;
            }       
        var auther_name = $("#auther_name").val();
         if (auther_name == "") {
              alert("Author Name must be filled out");
              return false;
            } 
        var blog_description = document.getElementsByClassName("editorquill")[0].innerHTML;
        if (blog_description == "") {
              alert("Description must be filled out");
              return false;
            }
        var cover_image1 =  $('#fileName').val();
        var cover_image = cover_image1.replace("C:\\fakepath\\", "");
         if (cover_image == "") {
              alert("File must be upload");
              return false;
            }

        $('INPUT[type="file"]').change(function () {
          var ext = this.value.match(/\.(.+)$/)[1];
          switch (ext) {
              case 'jpg':
              case 'jpeg':
              case 'png':
                  $('#bt').attr('disabled', false);
                  break;
              default:
                  alert('This is not an allowed file type.');
                  this.value = '';
          }
        });
        var mark_by_admin =document.getElementById("checked_id").checked;
        var current_date =  new Date().toString();
        var random_number = Math.floor(Math.random()*100000000);
        var full_id = `blog_id_${random_number}`;
        $('#form')[0].reset();
       Meteor.call("insert_blog",full_id,current_date,blog_name,blog_type,
        auther_name,blog_description,cover_image,mark_by_admin,savein_draft,function(error,result)
       {
       	if(error){
       		alert("Some error occured");
       	}else{
       		alert("Successfully inserted.");
           FlowRouter.go('/blog_draft');
       	}
       }); 
	},

  'click #preview_blog':function(event,instance){
       event.preventDefault();
        //GET DATA FROM FORM AND APPLY FORM VALIDATION
        var blog_name = $("#blog_name").val();
         if (blog_name == "") {
              alert("Blog Name must be filled out");
              return false;
            }
        var blog_type = $("#blog_type").val();  
        if (blog_type == "") {
              alert("Blog type must be filled out");
              return false;
            }       
        var auther_name = $("#auther_name").val();
         if (auther_name == "") {
              alert("Author Name must be filled out");
              return false;
            } 
        var blog_description = document.getElementsByClassName("editorquill")[0].innerHTML;
        if (blog_description == "") {
              alert("Description must be filled out");
              return false;
            }
        var cover_image1 =  $('#fileName').val();
        var cover_image = cover_image1.replace("C:\\fakepath\\", "");
         if (cover_image == "") {
              alert("File must be upload");
              return false;
            }
        $('INPUT[type="file"]').change(function () {
          var ext = this.value.match(/\.(.+)$/)[1];
          switch (ext) {
              case 'jpg':
              case 'jpeg':
              case 'png':
                  $('#bt').attr('disabled', false);
                  break;
              default:
                  alert('This is not an allowed file type.');
                  this.value = '';
          }
        });
        var mark_by_admin =document.getElementById("checked_id").checked;
        // alert(mark_by_admin);
        var current_date =  new Date().toString();
        var random_number = Math.floor(Math.random()*100000000);
        var full_id = `blog_id_${random_number}`;

         var preview_blog =[{
           blog_name:blog_name,
           blog_type:blog_type,
           auther_name:auther_name,
           blog_description:blog_description,
           cover_image:cover_image,
           mark_by_admin:mark_by_admin,
           current_date:current_date,
           full_id:full_id
         }]
         console.log("pre blog ::",preview_blog);
         Session.set("preview_blog_details", preview_blog);
         console.log("preview_blog",Session.get("preview_blog_details"));
         FlowRouter.go('/preview_blog')

  },

  'click #cancel':function(event,instance){
       event.preventDefault();
      var conf = confirm("Sure you want to leave this page ??");
      if(conf){
        FlowRouter.go('/blog_draft'); 
      }
  }

});




