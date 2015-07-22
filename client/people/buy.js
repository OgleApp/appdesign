Template.itemLine.rendered= function(){







}
Template.buy.helpers({
	items:function(){
		return SellingItems.find().fetch();
	},

})
