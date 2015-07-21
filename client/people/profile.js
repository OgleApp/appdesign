Template.profile.helpers({
	ownPost:function(){ // returns true if the logged in user owns the profile being viewed
		console.log(this._id);
		console.log(Meteor.userId());
		return (this._id == Meteor.userId());},
		
	photo:function(){ // returns the URL of the gravatar photo for this email
		return Gravatar.imageUrl(Gravatar.hash(this.emails[0].address,{secure:true}))}
})