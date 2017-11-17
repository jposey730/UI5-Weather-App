sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("WeatherTest2.controller.View1", {
		/**
	*@memberOf WeatherTest2.controller.View1
	*/
	Search: function () {
		//Read a input field from screen
		var mmView = this.getView();
		//It will update the model property 
		mmView.getModel().setProperty("/cityName", mmView.byId("cityInput").getValue());
		
		var weatherAPI = "ddbfcc8c94446f1c49335ca393a33509";
		// service url for Open Weather Map JSON API
		var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" +mmView.getModel().getProperty("/cityName")+ "&units=imperial" + "&APPID=" + weatherAPI+ "&callback=getJSON";
		var jsonObj = new JSONModel();
		//Ajax call with Callback function and JSONP data type
			$.ajax({
				url: weatherURL,
				//what jsonp callback is doing is receiving the payload from your Data Service 
				//and then handing it to your success handler. 
				jsonpCallback: "getJSON",
				//jsonp for cross-domain request, that means request to different domain and dataType: 
				//json for same domain-same origin request.
				dataType: "jsonp",
				success: function(data){
				
				
				//Catch the data, save it to JSON Object
				jsonObj.setData(data);
				//get object I want and save it to model
				var main  = jsonObj.getProperty("/main");
				var weather = jsonObj.getProperty("/weather");
				//setProperty-Sets the given value for the given property after validating and normalizing it, 
				//marks this object as changed
				mmView.getModel().setProperty("/Temp", main.temp);
				mmView.getModel().setProperty("/Max_Temp", main.temp_max);
				mmView.getModel().setProperty("/Min_Temp", main.temp_min);
				mmView.getModel().setProperty("/Weather_Cond", weather[0].description);
				console.log(mmView.getModel().getProperty("/"));
				
				},
				error: function(e){
					console.log(e.message);
				}
			});
		}
	});
});