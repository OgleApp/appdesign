Template.profileEdit.helpers({
	myEmail: function(){
		return this.emails[0].address},
	photo:function(){ 
		return Gravatar.imageUrl(Gravatar.hash(this.emails[0].address,{secure:true}))}
})

Template.profileEdit.events({
	"submit #profile-edit-form": function(event){
		event.preventDefault();
		var street= event.target.street.value;
		var city= event.target.city.value;
		var state= event.target.state.value;
		var zipcode= event.target.zipcode.value;
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var email = event.target.email.value;
		Meteor.users.update(this._id,
			{$set:{ 
					'profile.street':street,
					'profile.city':city,
					'profile.state':state,
					'profile.zipcode':zipcode,
					'profile.firstName':firstName, 
					'profile.lastName':lastName,
					'profile.email':email}});

		Router.go('/profile/'+this._id);
		
	}
})