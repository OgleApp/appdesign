Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});
Router.route('/itemdisplay/:_id',
	{name:'itemdisplay',
	data: function(){ 
		return SellingItems.findOne({_id:this.params._id})}});
Router.route('/itembuy', {name:"itembuy"});
Router.route('/sell', {name:'sell'});
Router.route('/flyboys', {name:'flyboys'});
Router.route('/playfarer', {name:'playfarer'});
Router.route('/Buy', {name:'buy'});
Router.route('/', {name: 'welcome'});
Router.route('/people',{name:'people'});
Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 

		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
