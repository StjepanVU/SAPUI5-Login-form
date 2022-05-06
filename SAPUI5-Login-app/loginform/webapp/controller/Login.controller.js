sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("ns.loginform.controller.Login", {
            onInit: function () {
                
            },

            prepareData: async function() {
                var email = this.getView().byId("email").getValue();
                var password = this.getView().byId("password").getValue();

                return {
                    "email": email,
                    "password": password,
                };
            },

            prepareRequest: function() {
                let urlpost = "http://127.0.0.1:8000/api/login";
                let xhr = new XMLHttpRequest();
                xhr.open("POST", urlpost, true);
                xhr.setRequestHeader("Accept","application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
                //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                xhr.onreadystatechange = function() {
                    
                    if(xhr.status == 200) {
                        console.log("Connection established, response from backend:" + xhr.responseText);
                        MessageToast.show("Sign in successful");
                        /*
                        if(responseObject.hasOwnProperty('success')) {
                            MessageToast.show("Connection established");
                        }
                        */
                        // Redirect to CV Maker
                        var view = sap.ui.view({id:"idPage", viewName:"MainView", type:sap.ui.core.mvc.ViewType});
                        oShell.setContent(view); // or oPanel.setContent()      
                        
                    }
                    else {
                        console.log("Connection unsuccessful");
                        MessageToast.show("Sign in failed");
                    }
                }
                return xhr;
            },

            onSignInPress: async function() { 
                let data = await this.prepareData();
                let xhr = this.prepareRequest();
                xhr.send(JSON.stringify(data));
                console.log("Sign in pressed");
            }
        });
    });
