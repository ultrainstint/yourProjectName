// @ts-nocheck
// @ts-ignore
sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
    
    function (Controller, MessageToast, Log, JSONModel,MessageBox) {
        "use strict";

        
        return Controller.extend("ns.HTML5Module.controller.View1", {   
               
            
            
             onInit: function () {
                 var oModel = new sap.ui.model.json.JSONModel();

    oModel.loadData("https://raw.githubusercontent.com/karthikn1050/Products.json/master/Products.json");

    this.getView().setModel(oModel);
            this.getSplitAppObj().setHomeIcon({
                'phone': 'phone-icon.png',
                'tablet': 'tablet-icon.png',
                'icon': 'desktop.ico'
            });
        },

             	handleUploadComplete: function(oEvent) {
            var sResponse = oEvent.getParameter("status");
            
              
			if (sResponse) {
				var sMsg = "";
				
				if (m[1] == "200") {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Success)";
					oEvent.getSource().setValue("");
				} else {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Error)";
				}

				MessageToast.show(sMsg);
			}
		},

		handleUploadPress: function() {
			var oFileUploader = this.byId("fileUploader");
			oFileUploader.upload();
		},


            handleLinkPress: function () {
            MessageBox.alert("Link was clicked!");
        },

        handleObjectIdentifierPress: function () {
            MessageBox.alert("Object Identifier was clicked!");
        },

        onOrientationChange: function (oEvent) {
            var bLandscapeOrientation = oEvent.getParameter("landscape"),
                sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
            MessageToast.show(sMsg, { duration: 5000 });
        },

        onPressNavToDetail: function () {
            this.getSplitAppObj().to(this.createId("detailDetail"));
        },
        onPressNavToDetail1: function () {
            this.getSplitAppObj().to(this.createId("empty"));
        },
         onPressNavToDetail2: function () {
            this.getSplitAppObj().to(this.createId("detail"));
        },
        
             onPressConfiguration: function () {
            this.getSplitAppObj().to(this.createId("Configuration_page"));
        },
        onPressUpload: function () {
            this.getSplitAppObj().to(this.createId("UploadToDB"));
        },
        onPressTree: function(){
             this.getSplitAppObj().to(this.createId("tree"));

        },


        

        onPressDetailBack: function () {
            this.getSplitAppObj().backDetail();
        },

        onPressMasterBack: function () {
            this.getSplitAppObj().backMaster();
        },

        onPressGoToMaster: function () {
            this.getSplitAppObj().toMaster(this.createId("detail"));
        },

        onListItemPress: function (oEvent) {
            var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

            this.getSplitAppObj().toDetail(this.createId(sToPageId));
        },

        onPressModeBtn: function (oEvent) {
            var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();

            this.getSplitAppObj().setMode(sSplitAppMode);
            MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
        },
        	moveToAvailableProductsTable: function() {
			this.byId("selectedProducts").getController().moveToAvailableProductsTable();
		},

       



        getSplitAppObj: function () {
            var result = this.byId("SplitAppDemo");
            if (!result) {
                Log.info("SplitApp object can't be found");
            }
            return result;
        }

    });
});