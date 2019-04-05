import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

exposed = FlowRouter.group();

exposed.route('/', {
	action: function () {
	BlazeLayout.render("sign_up");
	// BlazeLayout.render("mainTemplate", {content: "homePage"});
	}
});

exposed.route('/sign_in', {
   name:'sign_in',
  action: function () {
  BlazeLayout.render("sign_in");
  // BlazeLayout.render("mainTemplate", {content: "homePage"});
  }
});

exposed.route('/blog_name', {
  action: function () {
  BlazeLayout.render("layouts");//show only blog name
  // BlazeLayout.render("mainTemplate", {content: "homePage"});
  }
});

exposed.route('/blog_form', {
   // name:'info',
  action: function(prams) {
    // import 'http://127.0.0.1:3000/quill/quill.js';
    // import 'http://127.0.0.1:3000/quill/quill.snow.css';
    // import 'http://127.0.0.1:3000/quill/image-resize.min.js';
    BlazeLayout.render('blogform');
  }
 
});

exposed.route('/updateform', {
   // name:'info',
  action: function(prams) {
    BlazeLayout.render('updateform');
  }
});

exposed.route('/blogdetails', {
   // name:'info',
  action: function(prams) {
    BlazeLayout.render('blogdetails');
  }
});


