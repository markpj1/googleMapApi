(function(window, google, mapster) {


var options = mapster.MAP_OPTIONS,

element = document.getElementById('map'),
//map 
map = mapster.create(element, options);


map._on('click', function (e) {
	alert('clicked');
	console.log('this is event', e);
	console.log('this', this);
});

map._on('dragend', function () {
	alert('drag end');
})
}(window, google, window.Mapster || (window.Mapster = {})));