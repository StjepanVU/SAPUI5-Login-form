sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller, MessageToast, JSONModel) {
	"use strict";

	var pdfUrl = '';

	return Controller.extend("ns.loginpagemodule.controller.MainView", {
		onInit: function () {
			var oData = {
				"country": [
					{
						"code": "+7 840",
						"name": "Abkhazia"
					},
					{
						"code": "+93",
						"name": "Afghanistan"
					},
					{
						"code": "+355",
						"name": "Albania"
					},
					{
						"code": "+213",
						"name": "Algeria"
					},
					{
						"code": "+1 684",
						"name": "American Samoa"
					},
					{
						"code": "+376",
						"name": "Andorra"
					},
					{
						"code": "+244",
						"name": "Angola"
					},
					{
						"code": "+1 264",
						"name": "Anguilla"
					},
					{
						"code": "+1 268",
						"name": "Antigua and Barbuda"
					},
					{
						"code": "+54",
						"name": "Argentina"
					},
					{
						"code": "+374",
						"name": "Armenia"
					},
					{
						"code": "+297",
						"name": "Aruba"
					},
					{
						"code": "+247",
						"name": "Ascension"
					},
					{
						"code": "+61",
						"name": "Australia"
					},
					{
						"code": "+672",
						"name": "Australian External Territories"
					},
					{
						"code": "+43",
						"name": "Austria"
					},
					{
						"code": "+994",
						"name": "Azerbaijan"
					},
					{
						"code": "+1 242",
						"name": "Bahamas"
					},
					{
						"code": "+973",
						"name": "Bahrain"
					},
					{
						"code": "+880",
						"name": "Bangladesh"
					},
					{
						"code": "+1 246",
						"name": "Barbados"
					},
					{
						"code": "+1 268",
						"name": "Barbuda"
					},
					{
						"code": "+375",
						"name": "Belarus"
					},
					{
						"code": "+32",
						"name": "Belgium"
					},
					{
						"code": "+501",
						"name": "Belize"
					},
					{
						"code": "+229",
						"name": "Benin"
					},
					{
						"code": "+1 441",
						"name": "Bermuda"
					},
					{
						"code": "+975",
						"name": "Bhutan"
					},
					{
						"code": "+591",
						"name": "Bolivia"
					},
					{
						"code": "+387",
						"name": "Bosnia and Herzegovina"
					},
					{
						"code": "+267",
						"name": "Botswana"
					},
					{
						"code": "+55",
						"name": "Brazil"
					},
					{
						"code": "+246",
						"name": "British Indian Ocean Territory"
					},
					{
						"code": "+1 284",
						"name": "British Virgin Islands"
					},
					{
						"code": "+673",
						"name": "Brunei"
					},
					{
						"code": "+359",
						"name": "Bulgaria"
					},
					{
						"code": "+226",
						"name": "Burkina Faso"
					},
					{
						"code": "+257",
						"name": "Burundi"
					},
					{
						"code": "+855",
						"name": "Cambodia"
					},
					{
						"code": "+237",
						"name": "Cameroon"
					},
					{
						"code": "+1",
						"name": "Canada"
					},
					{
						"code": "+238",
						"name": "Cape Verde"
					},
					{
						"code": "+ 345",
						"name": "Cayman Islands"
					},
					{
						"code": "+236",
						"name": "Central African Republic"
					},
					{
						"code": "+235",
						"name": "Chad"
					},
					{
						"code": "+56",
						"name": "Chile"
					},
					{
						"code": "+86",
						"name": "China"
					},
					{
						"code": "+61",
						"name": "Christmas Island"
					},
					{
						"code": "+61",
						"name": "Cocos-Keeling Islands"
					},
					{
						"code": "+57",
						"name": "Colombia"
					},
					{
						"code": "+269",
						"name": "Comoros"
					},
					{
						"code": "+242",
						"name": "Congo"
					},
					{
						"code": "+243",
						"name": "Congo, Dem. Rep. of (Zaire)"
					},
					{
						"code": "+682",
						"name": "Cook Islands"
					},
					{
						"code": "+506",
						"name": "Costa Rica"
					},
					{
						"code": "+385",
						"name": "Croatia"
					},
					{
						"code": "+53",
						"name": "Cuba"
					},
					{
						"code": "+599",
						"name": "Curacao"
					},
					{
						"code": "+537",
						"name": "Cyprus"
					},
					{
						"code": "+420",
						"name": "Czech Republic"
					},
					{
						"code": "+45",
						"name": "Denmark"
					},
					{
						"code": "+246",
						"name": "Diego Garcia"
					},
					{
						"code": "+253",
						"name": "Djibouti"
					},
					{
						"code": "+1 767",
						"name": "Dominica"
					},
					{
						"code": "+1 809",
						"name": "Dominican Republic"
					},
					{
						"code": "+670",
						"name": "East Timor"
					},
					{
						"code": "+56",
						"name": "Easter Island"
					},
					{
						"code": "+593",
						"name": "Ecuador"
					},
					{
						"code": "+20",
						"name": "Egypt"
					},
					{
						"code": "+503",
						"name": "El Salvador"
					},
					{
						"code": "+240",
						"name": "Equatorial Guinea"
					},
					{
						"code": "+291",
						"name": "Eritrea"
					},
					{
						"code": "+372",
						"name": "Estonia"
					},
					{
						"code": "+251",
						"name": "Ethiopia"
					},
					{
						"code": "+500",
						"name": "Falkland Islands"
					},
					{
						"code": "+298",
						"name": "Faroe Islands"
					},
					{
						"code": "+679",
						"name": "Fiji"
					},
					{
						"code": "+358",
						"name": "Finland"
					},
					{
						"code": "+33",
						"name": "France"
					},
					{
						"code": "+596",
						"name": "French Antilles"
					},
					{
						"code": "+594",
						"name": "French Guiana"
					},
					{
						"code": "+689",
						"name": "French Polynesia"
					},
					{
						"code": "+241",
						"name": "Gabon"
					},
					{
						"code": "+220",
						"name": "Gambia"
					},
					{
						"code": "+995",
						"name": "Georgia"
					},
					{
						"code": "+49",
						"name": "Germany"
					},
					{
						"code": "+233",
						"name": "Ghana"
					},
					{
						"code": "+350",
						"name": "Gibraltar"
					},
					{
						"code": "+30",
						"name": "Greece"
					},
					{
						"code": "+299",
						"name": "Greenland"
					},
					{
						"code": "+1 473",
						"name": "Grenada"
					},
					{
						"code": "+590",
						"name": "Guadeloupe"
					},
					{
						"code": "+1 671",
						"name": "Guam"
					},
					{
						"code": "+502",
						"name": "Guatemala"
					},
					{
						"code": "+224",
						"name": "Guinea"
					},
					{
						"code": "+245",
						"name": "Guinea-Bissau"
					},
					{
						"code": "+595",
						"name": "Guyana"
					},
					{
						"code": "+509",
						"name": "Haiti"
					},
					{
						"code": "+504",
						"name": "Honduras"
					},
					{
						"code": "+852",
						"name": "Hong Kong SAR China"
					},
					{
						"code": "+36",
						"name": "Hungary"
					},
					{
						"code": "+354",
						"name": "Iceland"
					},
					{
						"code": "+91",
						"name": "India"
					},
					{
						"code": "+62",
						"name": "Indonesia"
					},
					{
						"code": "+98",
						"name": "Iran"
					},
					{
						"code": "+964",
						"name": "Iraq"
					},
					{
						"code": "+353",
						"name": "Ireland"
					},
					{
						"code": "+972",
						"name": "Israel"
					},
					{
						"code": "+39",
						"name": "Italy"
					},
					{
						"code": "+225",
						"name": "Ivory Coast"
					},
					{
						"code": "+1 876",
						"name": "Jamaica"
					},
					{
						"code": "+81",
						"name": "Japan"
					},
					{
						"code": "+962",
						"name": "Jordan"
					},
					{
						"code": "+7 7",
						"name": "Kazakhstan"
					},
					{
						"code": "+254",
						"name": "Kenya"
					},
					{
						"code": "+686",
						"name": "Kiribati"
					},
					{
						"code": "+965",
						"name": "Kuwait"
					},
					{
						"code": "+996",
						"name": "Kyrgyzstan"
					},
					{
						"code": "+856",
						"name": "Laos"
					},
					{
						"code": "+371",
						"name": "Latvia"
					},
					{
						"code": "+961",
						"name": "Lebanon"
					},
					{
						"code": "+266",
						"name": "Lesotho"
					},
					{
						"code": "+231",
						"name": "Liberia"
					},
					{
						"code": "+218",
						"name": "Libya"
					},
					{
						"code": "+423",
						"name": "Liechtenstein"
					},
					{
						"code": "+370",
						"name": "Lithuania"
					},
					{
						"code": "+352",
						"name": "Luxembourg"
					},
					{
						"code": "+853",
						"name": "Macau SAR China"
					},
					{
						"code": "+389",
						"name": "Macedonia"
					},
					{
						"code": "+261",
						"name": "Madagascar"
					},
					{
						"code": "+265",
						"name": "Malawi"
					},
					{
						"code": "+60",
						"name": "Malaysia"
					},
					{
						"code": "+960",
						"name": "Maldives"
					},
					{
						"code": "+223",
						"name": "Mali"
					},
					{
						"code": "+356",
						"name": "Malta"
					},
					{
						"code": "+692",
						"name": "Marshall Islands"
					},
					{
						"code": "+596",
						"name": "Martinique"
					},
					{
						"code": "+222",
						"name": "Mauritania"
					},
					{
						"code": "+230",
						"name": "Mauritius"
					},
					{
						"code": "+262",
						"name": "Mayotte"
					},
					{
						"code": "+52",
						"name": "Mexico"
					},
					{
						"code": "+691",
						"name": "Micronesia"
					},
					{
						"code": "+1 808",
						"name": "Midway Island"
					},
					{
						"code": "+373",
						"name": "Moldova"
					},
					{
						"code": "+377",
						"name": "Monaco"
					},
					{
						"code": "+976",
						"name": "Mongolia"
					},
					{
						"code": "+382",
						"name": "Montenegro"
					},
					{
						"code": "+1664",
						"name": "Montserrat"
					},
					{
						"code": "+212",
						"name": "Morocco"
					},
					{
						"code": "+95",
						"name": "Myanmar"
					},
					{
						"code": "+264",
						"name": "Namibia"
					},
					{
						"code": "+674",
						"name": "Nauru"
					},
					{
						"code": "+977",
						"name": "Nepal"
					},
					{
						"code": "+31",
						"name": "Netherlands"
					},
					{
						"code": "+599",
						"name": "Netherlands Antilles"
					},
					{
						"code": "+1 869",
						"name": "Nevis"
					},
					{
						"code": "+687",
						"name": "New Caledonia"
					},
					{
						"code": "+64",
						"name": "New Zealand"
					},
					{
						"code": "+505",
						"name": "Nicaragua"
					},
					{
						"code": "+227",
						"name": "Niger"
					},
					{
						"code": "+234",
						"name": "Nigeria"
					},
					{
						"code": "+683",
						"name": "Niue"
					},
					{
						"code": "+672",
						"name": "Norfolk Island"
					},
					{
						"code": "+850",
						"name": "North Korea"
					},
					{
						"code": "+1 670",
						"name": "Northern Mariana Islands"
					},
					{
						"code": "+47",
						"name": "Norway"
					},
					{
						"code": "+968",
						"name": "Oman"
					},
					{
						"code": "+92",
						"name": "Pakistan"
					},
					{
						"code": "+680",
						"name": "Palau"
					},
					{
						"code": "+970",
						"name": "Palestinian Territory"
					},
					{
						"code": "+507",
						"name": "Panama"
					},
					{
						"code": "+675",
						"name": "Papua New Guinea"
					},
					{
						"code": "+595",
						"name": "Paraguay"
					},
					{
						"code": "+51",
						"name": "Peru"
					},
					{
						"code": "+63",
						"name": "Philippines"
					},
					{
						"code": "+48",
						"name": "Poland"
					},
					{
						"code": "+351",
						"name": "Portugal"
					},
					{
						"code": "+1 787",
						"name": "Puerto Rico"
					},
					{
						"code": "+974",
						"name": "Qatar"
					},
					{
						"code": "+262",
						"name": "Reunion"
					},
					{
						"code": "+40",
						"name": "Romania"
					},
					{
						"code": "+7",
						"name": "Russia"
					},
					{
						"code": "+250",
						"name": "Rwanda"
					},
					{
						"code": "+685",
						"name": "Samoa"
					},
					{
						"code": "+378",
						"name": "San Marino"
					},
					{
						"code": "+966",
						"name": "Saudi Arabia"
					},
					{
						"code": "+221",
						"name": "Senegal"
					},
					{
						"code": "+381",
						"name": "Serbia"
					},
					{
						"code": "+248",
						"name": "Seychelles"
					},
					{
						"code": "+232",
						"name": "Sierra Leone"
					},
					{
						"code": "+65",
						"name": "Singapore"
					},
					{
						"code": "+421",
						"name": "Slovakia"
					},
					{
						"code": "+386",
						"name": "Slovenia"
					},
					{
						"code": "+677",
						"name": "Solomon Islands"
					},
					{
						"code": "+27",
						"name": "South Africa"
					},
					{
						"code": "+500",
						"name": "South Georgia and the South Sandwich Islands"
					},
					{
						"code": "+82",
						"name": "South Korea"
					},
					{
						"code": "+34",
						"name": "Spain"
					},
					{
						"code": "+94",
						"name": "Sri Lanka"
					},
					{
						"code": "+249",
						"name": "Sudan"
					},
					{
						"code": "+597",
						"name": "Suriname"
					},
					{
						"code": "+268",
						"name": "Swaziland"
					},
					{
						"code": "+46",
						"name": "Sweden"
					},
					{
						"code": "+41",
						"name": "Switzerland"
					},
					{
						"code": "+963",
						"name": "Syria"
					},
					{
						"code": "+886",
						"name": "Taiwan"
					},
					{
						"code": "+992",
						"name": "Tajikistan"
					},
					{
						"code": "+255",
						"name": "Tanzania"
					},
					{
						"code": "+66",
						"name": "Thailand"
					},
					{
						"code": "+670",
						"name": "Timor Leste"
					},
					{
						"code": "+228",
						"name": "Togo"
					},
					{
						"code": "+690",
						"name": "Tokelau"
					},
					{
						"code": "+676",
						"name": "Tonga"
					},
					{
						"code": "+1 868",
						"name": "Trinidad and Tobago"
					},
					{
						"code": "+216",
						"name": "Tunisia"
					},
					{
						"code": "+90",
						"name": "Turkey"
					},
					{
						"code": "+993",
						"name": "Turkmenistan"
					},
					{
						"code": "+1 649",
						"name": "Turks and Caicos Islands"
					},
					{
						"code": "+688",
						"name": "Tuvalu"
					},
					{
						"code": "+1 340",
						"name": "U.S. Virgin Islands"
					},
					{
						"code": "+256",
						"name": "Uganda"
					},
					{
						"code": "+380",
						"name": "Ukraine"
					},
					{
						"code": "+971",
						"name": "United Arab Emirates"
					},
					{
						"code": "+44",
						"name": "United Kingdom"
					},
					{
						"code": "+1",
						"name": "United States"
					},
					{
						"code": "+598",
						"name": "Uruguay"
					},
					{
						"code": "+998",
						"name": "Uzbekistan"
					},
					{
						"code": "+678",
						"name": "Vanuatu"
					},
					{
						"code": "+58",
						"name": "Venezuela"
					},
					{
						"code": "+84",
						"name": "Vietnam"
					},
					{
						"code": "+1 808",
						"name": "Wake Island"
					},
					{
						"code": "+681",
						"name": "Wallis and Futuna"
					},
					{
						"code": "+967",
						"name": "Yemen"
					},
					{
						"code": "+260",
						"name": "Zambia"
					},
					{
						"code": "+255",
						"name": "Zanzibar"
					},
					{
						"code": "+263",
						"name": "Zimbabwe"
					}
				]
			};

			// set model 
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		handleHide: function(){
			var checkbox_phone= this.getView().byId("checkbox_phone");
			
			if(checkbox_phone.getSelected() === true){
				MessageToast.show("Your phone number will be hidden in downloaded PDF/dox");
			}
		},

		isTypeText: function (metaName) {
			if (
				metaName === "sap.m.Input"   ||
				metaName === "sap.m.Text"   ||
				metaName === "sap.m.TextArea" ||
				metaName === "sap.m.DatePicker" ||
				metaName === "sap.m.RatingIndicator"
			){
				return true;
			}
			return false;
		},

		prepareJobExperience: function () {
			const jobData = [];
			var workExperienceForm = this.getView().byId("workExperienceForm");
			var contentList = workExperienceForm.getContent();

			for(var b = 0; b < contentList.length; b++) {
				var field = contentList[b];
				if (!this.isTypeText(field.getMetadata().getName())){
					continue;
				}

				if (field.getName() === "job_title"){
					var fieldGroup = {};
				}

				fieldGroup[field.getName()] = field.getValue();

				if (field.getName() === "end_date"){
					if (fieldGroup["job_title"] !== ""){
						jobData.push(fieldGroup);
					}
				}
			}
			return jobData;
		},

		prepareEducation: function () {
			const educationData = [];
			var educationForm = this.getView().byId("educationForm");
			var contentList = educationForm.getContent();

			for(var b = 0; b < contentList.length; b++) {
				var field = contentList[b];
				if (!this.isTypeText(field.getMetadata().getName())){
					continue;
				}

				if (field.getName() === "educationTitle"){
					var fieldGroup = {};
				}

				fieldGroup[field.getName()] = field.getValue();

				if (field.getName() === "description"){
					if (fieldGroup["educationTitle"] !== ""){
						educationData.push(fieldGroup);
					}
				}
			}
			return educationData;
		},

		prepareLanguageSkills: function () {
			const addLanguageData = [];
			var languageSkillsForm = this.getView().byId("languageSkillsForm");
			var contentList = languageSkillsForm.getContent();

			for(var b = 0; b < contentList.length; b++) {
				var field = contentList[b];
				if (!field.hasStyleClass("languageValue")){
					continue;
				}

				if (field.hasStyleClass("languageSkill")){
					var fieldGroup = {};
				}

				fieldGroup[this.getLanguageFieldName(field)] = field.getValue();

				if (field.hasStyleClass("languageRate")){
					if (fieldGroup[field.getValue()] !== ""){
						addLanguageData.push(fieldGroup);
					}
				}
			}
			return addLanguageData;
		},

		getLanguageFieldName: function (field) {
			if (field.hasStyleClass("languageRate")){
				return "language_rating";
			}
			return "language_name";
		},

		handleUploadComplete: function () {
			console.log("dp: handleUploadComplete: init");
		},

		handleUploadProgress: function () {
			console.log("dp: handleUploadProgress: init");
		},

		handleUploadStart: function () {
			console.log("dp: handleUploadStart: init");
		},

		getProfilePhoto: async function (oEvent) {
			try {
				var oFileUploader = this.getView().byId("profilePhoto");
				var domRef = oFileUploader.getFocusDomRef();
				let file = domRef.files[0];
				if(typeof file === "undefined") {
					return "";
				}
				const { width, height, image_data } = await this.getImageParams(file);
				return image_data;
			} catch(err) {
				console.log(err);
			}
		},
		getImageParams: async function (file) {
			return new Promise((resolve, reject) => {
				var reader = new FileReader()
				reader.onload = async (e) => {
					var image = new Image()
					image.src = e.target.result
					await image.decode()
					resolve({ width: image.width, height: image.height, image_data: image.src })
				}
				reader.readAsDataURL(file);
			})
		},

		prepareData: async function () {
			var profile_photo = await this.getProfilePhoto();
			var username = this.getView().byId("name").getValue();
			var preposition = this.getView().byId("preposition").getValue();
			var surname = this.getView().byId("surname").getValue();
			var adresa = this.getView().byId("address").getValue();
			var address_number = this.getView().byId("address_number").getValue();
			var zip_code = this.getView().byId("zip_code").getValue();
			var city = this.getView().byId("city").getValue();
			var country = this.getView().byId("country").getValue();
			var country_code = this.getView().byId("country_code").getValue();
			var broj = this.getView().byId("phone").getValue();
			var checkbox_phone = this.getView().byId("checkbox_phone").getSelected();
			var email = this.getView().byId("mail").getValue();
			var date_of_birth = this.getView().byId("date_of_birth").getValue();

			var selectedGender = this.getView().byId("gender").getSelectedItem();
			var gender = "";
			if (selectedGender !== null){
				gender = selectedGender.getText();
			}

			var nationality = this.getView().byId("nationality").getValue();
			var life_philosophy = this.getView().byId("life_philosophy").getValue();

			var job = this.prepareJobExperience();
			var education = this.prepareEducation();
			var language = this.prepareLanguageSkills();
			console.log("language: ", language);

			return {
				"profile_photo": profile_photo,
				"full_name": username,
				"preposition": preposition,
				"surname": surname,
				"address": adresa,
				"address_number": address_number,
				"zip_code": zip_code,
				"city": city,
				"country": country,
				"country_code": country_code,
				"phone_number": broj,
				"checkbox_phone": checkbox_phone,
				"email": email,
				"date_of_birth": date_of_birth,
				"gender": gender,
				"nationality": nationality,
				"life_philosophy": life_philosophy,
				"education": education,
				"language": language,
				"job": job,
			};
		},


		onExperienceAdd: function(oEvent) {
			var workExperienceForm = this.getView().byId("workExperienceForm");
			var toolbarDivider = new sap.m.Toolbar({
				width: "100%",
				height:"1px"
			});
			toolbarDivider.addStyleClass("toolbarDivider");
			workExperienceForm.addContent(toolbarDivider);
			workExperienceForm.addContent(new sap.m.Label({ text: "Job Title" }));
			workExperienceForm.addContent(new sap.m.Input({ name: "job_title", placeholder: "enter job title"  }));
			workExperienceForm.addContent(new sap.m.Label({ text: "Company name" }));
			workExperienceForm.addContent(new sap.m.Input({ name: "company_name", placeholder: "enter company name" }));
			workExperienceForm.addContent(new sap.m.Label({ text: "Job description" }));
			workExperienceForm.addContent(new sap.m.TextArea({ name: "job_description", placeholder: "enter job description", showExceededText: true, maxLength: 500, growing: true, growingMaxLines: 7, width: "100%"   }));
			workExperienceForm.addContent(new sap.m.Label({ text: "Start date" }));
			workExperienceForm.addContent(new sap.m.DatePicker({ name:"start_date", placeholder: "enter start date" }));
			workExperienceForm.addContent(new sap.m.Label({ text: "End Date" }));
			workExperienceForm.addContent(new sap.m.DatePicker({ name:"end_date", placeholder: "enter end date" }));
		},

		onEducationAdd: function(oEvent) {
			var educationForm = this.getView().byId("educationForm");
			var toolbarDivider = new sap.m.Toolbar({
				width: "100%",
				height:"1px"
			});
			toolbarDivider.addStyleClass("toolbarDivider");
			educationForm.addContent(toolbarDivider);
			educationForm.addContent(new sap.m.Label({ text: "Title" }));
			educationForm.addContent(new sap.m.Input({ name: "educationTitle", placeholder: "enter education title", required: true }));
			educationForm.addContent(new sap.m.Label({ text: "Time and location" }));
			educationForm.addContent(new sap.m.Input({ name: "time_location", placeholder: "enter time and location", required: true }));
			educationForm.addContent(new sap.m.Label({ text: "Institution" }));
			educationForm.addContent(new sap.m.Input({ name: "institution", placeholder: "enter name", required: true }));
			educationForm.addContent(new sap.m.Label({ text: "Description" }));
			educationForm.addContent(new sap.m.TextArea({ name:"description", showExceededText: true, maxLength: 500, growing: true, growingMaxLines: 7, width: "100%" }));
		},

		onLanguageSkill: function(oEvent) {
			var languageSkillsForm = this.getView().byId("languageSkillsForm");

			var label = new sap.m.Label({ text: "Language" });
			languageSkillsForm.addContent(label);

			var  input = new sap.m.Input({ name: "languageSkill", placeholder: "enter here", width: "100%" });
			input.addStyleClass("languageValue languageSkill");
			languageSkillsForm.addContent(input);

			var ratingIndicator = new sap.m.RatingIndicator({ maxValue: 6,  tooltip: "Rating Tooltip", iconUnselected: "sap-icon://circle-task", iconSelected: "sap-icon://circle-task-2", iconHovered: "sap-icon://circle-task-2" });
			ratingIndicator.addStyleClass("languageValue languageRate");
			languageSkillsForm.addContent(ratingIndicator);
		},

		// ############################POST
		prepareRequest: function () {
			let urlpost = "http://127.0.0.1/api/post-cv";

			let xhr = new XMLHttpRequest();
			xhr.open("POST", urlpost);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");
			// got response from backend
			xhr.onreadystatechange = function () {

				// state: done/received
				if (xhr.readyState === 4) {
					console.log("gotResponseFromBackend: init");
					console.log("response from backend: "+xhr.responseText);

					let responseObject = JSON.parse(xhr.responseText);

					if (responseObject.hasOwnProperty('success')){
						MessageToast.show("Your CV is complited.");
						pdfUrl = responseObject.pdf;
						const idDownloadPdf = document.getElementsByClassName("idDownloadPdf");
						idDownloadPdf[0].style.visibility = 'visible';

						const pdfSpinner = document.getElementsByClassName("pdfSpinner");
						pdfSpinner[0].style.visibility = 'hidden';

					}else{
						const pdfSpinner = document.getElementsByClassName("pdfSpinner");
						pdfSpinner[0].style.visibility = 'hidden';
						// MessageToast.show("ERROR: please check your form!");

						console.log("responseObject is here:");
						console.log(responseObject["errors"]);

						var message = "";

						for (let inputName in responseObject["errors"]) {
							console.log("inputName: " + inputName);

							console.log("result is: ");
							console.log(responseObject["errors"][inputName]);

							var givenErrors = responseObject["errors"][inputName];
							message += givenErrors + "\n\n";
						}

						console.log("message: " + message);
						MessageToast.show(message,
							{
								duration: 10000,
							});
						$( ".sapMMessageToast" ).addClass( "sapMMessageToastDanger " );
					}
					console.log("gotResponseFromBackend: end");
				}
			};

			return xhr;
		},

		//send data
		onSaveCVPress: async function(){
			let data = await this.prepareData();
			let xhr = this.prepareRequest();

			console.log("dp: onSaveCVPress data: " );
			console.log(data);

			xhr.send(JSON.stringify(data));

			const collection = document.getElementsByClassName("pdfSpinner");
			collection[0].style.visibility = 'visible';

			const idDownloadPdf = document.getElementsByClassName("idDownloadPdf");
			idDownloadPdf[0].style.visibility = 'hidden';
		},

		getPDF: function(){
			console.log('pdfUrl 3: '+pdfUrl);

			window.open(pdfUrl,'_blank');
		}
	});
});
