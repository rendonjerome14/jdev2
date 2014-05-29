var Person = Backbone.Model.extend({
 	defaults: {
	   	name: 'Jerome',
	  	age: 22,
	   	occupation: 'worker'
   } 
});

var PersonView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		console.log('hi there');
	}

});
// var Person = Backbone.Model.extend({
//   defaults: {
//   	name: 'Jerome',
//   	age: 22,
//   	occupation: 'worker'
//   },

//   validate: function(attrs)
//   {
//   	if (attrs.age < 0){
//   		return 'Age must be positive';
//   	}

//   	if ( ! attrs.name ){
//   		return 'Name should not be blank';
//   	}
//   },

//   work: function() {
//   	return this.get('name') + ' is working';
//   }
// });

// // var Person = function(config) {
// // 	this.name = config.name;
// // 	this.age = config.age;
// // 	this.occupation = config.occupation;
// // }

// // Person.prototype.work = function(){
// // 	return this.name + ' is working';
// // }