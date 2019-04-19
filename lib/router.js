import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

exposed = FlowRouter.group();

exposed.route('/', {
	action: function () {
	BlazeLayout.render("sign_up");
	}
});

exposed.route('/sign_in', {
   name:'sign_in',
  action: function () {
  BlazeLayout.render("sign_in");
  }
});

exposed.route('/blog_name', {
  action: function () {
  BlazeLayout.render("layouts");
  // BlazeLayout.render("mainTemplate", {content: "homePage"});
  }
});

exposed.route('/blog_form', {
  action: function(prams) {
    BlazeLayout.render('blogform');
  }
 
});

exposed.route('/updateform', {
  action: function(prams) {
    BlazeLayout.render('updateform');
  }
});


exposed.route('/blogdetails', {
  action: function(prams) {
    BlazeLayout.render('blogdetails');
  }
});


exposed.route('/preview_blog', {
  action: function(prams) {
    BlazeLayout.render('previewblog');
  }
});

exposed.route('/blog_draft', {
  action: function(prams) {
    BlazeLayout.render('blogdraft');
  }
});

exposed.route('/show_case', {
  action: function(prams) {
    BlazeLayout.render('check_show_case');
  }
});