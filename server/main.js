import { Meteor } from 'meteor/meteor';
import {Blog} from './../import/collections/insert.js';
import {UserDetail} from './../import/collections/insert.js';

Meteor.startup(() => {

});

Meteor.methods({
  insert_blog(full_id,current_date,blog_name,blog_type,
        auther_name,blog_description,cover_image,mark_by_admin,savein_draft=false)
  {
        // console.log("savein_draft",savein_draft);
          Blog.insert({
           blog_id : full_id,
           created_at:current_date,
           savein_draft : savein_draft,
           blog_name: blog_name ,
           blog_type:blog_type,
           blog_author_name:auther_name,
           blog_description:blog_description,
           cover_image:cover_image,
           mark_by_admin:mark_by_admin
          });
  		    return false;
  },


  // insert_preview_blog(/*preview_blog,full_id,current_date,blog_name,blog_type,auther_name,blog_description,cover_image,mark_by_admin*/)
  // {
  //          alert('hiii insert_preview_blog');
  //         Blog.insert({
  //          blog_id : full_id,
  //          created_at:current_date,
  //          preview_blog : preview_blog,
  //          blog_name: blog_name ,
  //          blog_type:blog_type,
  //          blog_author_name:auther_name,
  //          blog_description:blog_description,
  //          cover_image:cover_image,
  //          mark_by_admin:mark_by_admin
  //         });

  //         return false;
  // },
  
   delete_blog(delete_id)
    {
      Blog.remove(delete_id);
       return false;
    },

    insert_userdetail(user_name,user_email,user_password,user_id,current_date){
       UserDetail.insert({
          user_name : user_name,
          user_email : user_email,
          user_password : user_password,
          user_id : user_id,
          created_at : current_date
          });

      return false;
    },

    update_blog(url_id,updatedBlog){
       Blog.update(url_id,updatedBlog);
       return false;
    },

    save_heighlited_description(blog_id,blogdesc){
      Blog.update({"_id":blog_id},{$set:{"blog_description":blogdesc}});
      return false;
    },

    add_columnfor_heighlited_description(blog_id,highlighted_text_array){
      console.log("highlighted_text_array11  ::",highlighted_text_array);
      // Blog.update({"_id":blog_id},
      //   {$set:{"highlight_text_array":highlighted_text_array}},{multi:true});
    }
});
