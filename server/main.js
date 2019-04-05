
import { Meteor } from 'meteor/meteor';
import {Blog} from './../import/collections/insert.js';

Meteor.startup(() => {

});

Meteor.methods({
  // code to run on server at startup

  insert_blog(blogName,blogType,authName,comment,image,isAdmin){
  	    // console.log("inside main server");
  		// console.log("inside server ::"+blogName+" & "+blogType+" "+authName+" "+comment+" "+image+" "+isAdmin);

  		//    Blog.insert({
  		//     blogName: blogName ,
  		//     blogType:blogType,
  		//     authName:authName,
  		//     comment:comment,
  		//     imageUrl:image,
  		//     isAdmin:isAdmin
  		// });
    //        var blog = Blog.find().fetch();
    //          console.log(blog);
  		       return false;
  },

});
