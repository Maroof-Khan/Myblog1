import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../../import/collections/insert.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.updateform.events({
	'submit .form-register':function(event,instance){
		 event.preventDefault();
        var blog_name = $("#blog_name").val();
        var blog_type = $("#blog_type").val();        
        var auther_name = $("#auther_name").val();
        var delta_obj = document.getElementsByClassName("editorquill")[0].innerHTML;

         var cover_image =  $('#cover_image').val();
          // COVER IMAGE VALIDATION
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
        
        // var isAdmin = event.target.istrue.checked;
         // var mark_by_admin = $('#checked_id').val();
         var mark_by_admin =document.getElementById("checked_id").checked;
         var current_date =  new Date().toString();
         var random_number = Math.floor(Math.random()*100000000);
         var full_id = `blog_id_${random_number}`
         $('#form')[0].reset();
            $.urlParam = function(name){
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                return results[1] || 0;
            }
            var url_id  = $.urlParam('ID');            
            // var blog_node = Blog.find().fetch();
            var updatedBlog = {
                                blog_id : full_id,
                                created_at:current_date,
                                blog_name: blog_name ,
                                blog_type:blog_type,
                                blog_author_name:auther_name,
                                blog_description:delta_obj,
                                cover_image:cover_image,
                                mark_by_admin:mark_by_admin
                              }
           Meteor.call("update_blog",url_id,updatedBlog, function(error,result)
           {
            if(error){
              alert("Some error occured");
            }else{
              alert("Successfully inserted.");
              FlowRouter.go('/blogdetails');
            }
           }); 
       
	}
});


Template.updateform.helpers({
  update_form(){

              $.urlParam = function(name){
              var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
              return results[1] || 0;
             }
            var blog_id  = $.urlParam('ID');
            var blog_node = Blog.find({"_id": blog_id}).fetch();
            return blog_node;
  }
})


Template.updateform.onRendered(function(){
  Meteor.setTimeout(function() {
         var toolbarOptions = [
                              ['bold', 'italic', 'underline', 'strike'],        
                              ['blockquote', 'code-block'],    
                              [{ 'direction': 'rtl' }],                         
                              ['link', 'image'],
                              ['clean']                                         
                            ];
       $(document).ready(function(){
          $.getScript('http://127.0.0.1:3000/quill/image-resize.min.js',
            function(){
            var editor = new Quill('#update_editor' , {
                            modules: {
                                   toolbar: toolbarOptions,
                                   imageResize: {
                                        displaySize: true
                                       }
                                },
                           theme: 'snow'
                          });
                          $(".ql-tooltip").remove();      
                          $(".ql-hidden").remove();      
         // FOR REMOVING TEXT FORMET WHEN COPY AND PASTE                 
        editor.clipboard.addMatcher (Node.ELEMENT_NODE, function (node, delta) {
              var plaintext = node.innerText;
              var Delta = Quill.import('delta');
              return new Delta().insert(plaintext);
          });

          });
      });

    },300)
})
