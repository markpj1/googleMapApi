(function (window, google) {
    //Mapster module holding methods. 
	var Mapster = (function () {
		function Mapster (element, opts) {			
			this.gMap = new google.maps.Map(element, opts);
		}
		Mapster.prototype = {
			zoom: function (level) {
				if(level) {
					this.gMap.setZoom(level);
				}
				else {
					return this.gMap.getZoom();
				}
			},
			_on: function (event, callback) {
				var self = this;
				google.maps.event.addListener(this.gMap, event, function (e) {
					callback.call(self, e)
				});				
			}			
		}; 
		return Mapster;
	}());

    //Factory function returns instance of object, creating new Object.
	Mapster.create = function (element, opts) {
		return new Mapster(element, opts);	
	}
	//ataches Mapster to window
	window.Mapster = Mapster;

}(window, google));