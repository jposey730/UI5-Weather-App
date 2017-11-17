sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			//JSON Format
			var dictionary = 
			{
				temp: "",
				maxTemp: "",
				minTemp: ""
			
			};
			//create a JSON model, fill in the data and bind the table to this model
			var oModel = new JSONModel();
			//set the data for the modeal
			oModel.setData(dictionary);
		
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}

	};
});