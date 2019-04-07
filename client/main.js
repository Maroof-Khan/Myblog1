import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../import/collections/insert.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.blogform.events({
	'click #submit_blog_data':function(event,instance){
             // alert('hiiiiiiiiii');https://funkyimg.com/i/2SSkx.jpeg
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
        var cover_image =  $('#cover_image').val();
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

        $('#form')[0].reset();
        // var myId = Blog[0]._id;
           
       Meteor.call("insert_blog",full_id,current_date,blog_name,blog_type,auther_name,blog_description,cover_image,mark_by_admin, function(error,result)
       {
       	if(error){
       		alert("Some error occured");
       	}else{
       		alert("Successfully inserted.");
       	}
       }); 
       FlowRouter.go('/blog_name');    
	},

});


// Template.blogform.onRendered(function(){
//       // alert('hiiiiiiiiii');
    // },300)

// })




