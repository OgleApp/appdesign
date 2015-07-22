Template.sell.helpers({
isOwner: function(){
	if(!(Meteor.userId()==null)){

    return (this.user == Meteor.userId()) || (Meteor.userId()=="frtJgtxe7rBdqNvHu");}
    else{
    	return false;

}}})

Template.sell.events({
	'click #saveSellItem': function(event){
		var itemName = $("#name").val();
		var itemPrice = $("#price").val();
		var itemDesciption = $("#description").val();
		var newPuzzleImage=$("#newpuzzleimage").val();

		$("#name").val("");
		$("#price").val("");
		$("#description").val("");
		$("#newpuzzleimage").val("");

	var itemData =
	{name:itemName,
	price:itemPrice,
	description:itemDesciption,
	image:newPuzzleImage


	}
	SellingItems.insert(itemData);

	}



})