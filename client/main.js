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
        var delta_obj = document.getElementsByClassName("editorquill")[0].innerHTML;
        if (delta_obj == "") {
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

  		   Blog.insert({
  		   	blog_id : full_id,
  		   	created_at:current_date,
  		    blog_name: blog_name ,
  		    blog_type:blog_type,
  		    blog_author_name:auther_name,
          blog_description:delta_obj,
  		    cover_image:cover_image,
  		    mark_by_admin:mark_by_admin
  		    });

          FlowRouter.go('/blog_name');

        // var myId = Blog[0]._id;
           
       // Meteor.call("insert_blog",blogName,blogType,authName,comment,image,isAdmin, function(error,result){
       // 	if(error){
       // 		alert("Some error occured");
       // 	}else{
       // 		alert("Successfully inserted.");
       // 	}
       // });     
	},

});


// Template.blogform.onRendered(function(){
//       // alert('hiiiiiiiiii');
//       import Quill from 'quill'
//       import PlainClipboard from './PlainClipboard'

//       Quill.register('modules/clipboard', PlainClipboard, true)

       // Meteor.setTimeout(function() {
      //    var toolbarOptions = [
      //                         ['bold', 'italic', 'underline', 'strike'],        
      //                         ['blockquote', 'code-block'],    
      //                         [{ 'direction': 'rtl' }],                         
      //                         ['link', 'image'],
      //                         ['clean']                                         
      //                       ];
      //  // console.log(window.)  
      //  //var current = FlowRouter.current();
      //  var url=window.location.href;
      //  var base_url = window.location.origin;
      //   var host = window.location.host;
      //   //alert(host);
      //   // alert(`${host}/quill/image-resize.min.js`);
      //  $(document).ready(function(){
      //     $.getScript('http://127.0.0.1:3000/quill/image-resize.min.js',
      //     // $.getScript(`${host}/quill/image-resize.min.js`,
      //       function(){
      //       var editor = new Quill('#form_editor' , {
      //                       modules: {
      //                              toolbar: toolbarOptions,
      //                              imageResize: {
      //                                             displaySize: true
      //                                            }
      //                              //     ,
      //                              // keyboard: true,
      //                              // undo-manager: true
      //                           },
      //                      theme: 'snow'
      //                     });
      //                     $(".ql-tooltip").remove();      
      //                     $(".ql-hidden").remove();      
      //                     $(".ql-clipboard").remove();    
      //     });
      // });
     
        

       //  class PlainClipboard extends Clipboard {
       //    onPaste (e) {
       //      alert('hiiiiii');
       //      e.preventDefault()
       //      const range = this.quill.getSelection()
       //      const text = e.clipboardData.getData('text/plain')
       //      const delta = new Delta()
       //      .retain(range.index)
       //      .delete(range.length)
       //      .insert(text)
       //      const index = text.length + range.index
       //      const length = 0
       //      editor.updateContents(delta, 'silent')
       //      editor.setSelection(index, length, 'silent')
       //      editor.scrollIntoView()
       //    }
       //  }

       // export default PlainClipboard;


    // },300)

// })




