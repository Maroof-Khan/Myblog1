import { Meteor } from 'meteor/meteor';
import {Blog} from './../import/collections/insert.js';
import {UserDetail} from './../import/collections/insert.js';

Meteor.startup(() => {

});

Meteor.methods({
  // code to run on server at startup
  insert_blog(full_id,current_date,blog_name,blog_type,auther_name,blog_description,cover_image,mark_by_admin)
  {
          Blog.insert({
           blog_id : full_id,
           created_at:current_date,
          blog_name: blog_name ,
          blog_type:blog_type,
          blog_author_name:auther_name,
          blog_description:blog_description,
          cover_image:cover_image,
          mark_by_admin:mark_by_admin
          });

  		    return false;
  },
  

  // fetchblog_details(blog_id)
  //   {
  //     console.log("fetchblog_details");
  //      var blog_node = Blog.find({"_id": blog_id}).fetch();
  //      // console.log(blog_node);
  //      return blog_node;
  //   },

   delete_blog(delete_id)
    {
      Blog.remove(delete_id);
       return false;
    },

    insert_userdetail(user_name,user_email,user_password,user_id,current_date){
       UserDetail.insert({
          user_name : user_name,
          user_email:user_email,
          user_password: user_password,
          user_id: user_id,
          created_at:current_date
          });

      return false;
    },

    update_blog(url_id,updatedBlog){
       Blog.update(url_id,updatedBlog);
       return false;
    }
});
