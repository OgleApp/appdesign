Template.layout.helpers({
	isOwner: function(){
	if(!(Meteor.userId()==null)){

    return (this.user == Meteor.userId()) || (Meteor.userId()=="frtJgtxe7rBdqNvHu");}
    else{
    	return false;
    }
}})