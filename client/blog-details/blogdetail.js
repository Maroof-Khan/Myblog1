import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import {Blog} from './../../import/collections/insert.js';

Template.blogdetails.helpers({
  show_detail(){
              var details = [];
              $.urlParam = function(name){
              var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
              return results[1] || 0;
             }
            var blog_id  = $.urlParam('ID');

        //    Meteor.call("fetchblog_details",blog_id,function(error,result)
	       // {
	       // 	if(error){
	       // 		alert("Some error occured");
	       // 	}else{
	       // 		// alert("Successfully inserted.");
	       // 		 console.log("blogdetails ::", result);
	       // 		   return result;
	       // 	}
	       // }); 
           // console.log("det ::",det);
            //var blog_node =
            return Blog.find({"_id": blog_id}).fetch();
           

  }
})