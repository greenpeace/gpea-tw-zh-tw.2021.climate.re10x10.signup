import './main.scss'
const dayjs = require("dayjs")
const ProgressBar = require('progressbar.js')
const {$, dataLayer, currency} = window
const Mailcheck = require('mailcheck');

// let footer_main_page_url = `https://www.greenpeace.org/taiwan/?ref=2021-plastic_policy_petition`
// let footer_donate_url = `https://supporter.ea.greenpeace.org/tw/s/donate?campaign=plastics&ref=2021-plastic_policy_petition-footer`
// let footer_privacy_url = `https://www.greenpeace.org/taiwan/policies/privacy-and-cookies/?ref=2021-plastic_policy_petition`

// window.directTo = function (type) {
//     switch (type){
//         case 'main':
//             window.open(footer_main_page_url, '_blank');
//             break
//         case 'donate':
//             window.open(footer_donate_url, '_blank');
//             break
//         case 'privacy':
//             window.open(footer_privacy_url, '_blank');
//             break
//         default: 
//         window.open(footer_privacy_url, '_blank');
//     }
// }

$(document).ready(function() {
    console.log( "ready!" );
    // initProgressBar();
    // createYearOptions();
    initForm();
    checkEmail();
    init();
});

/**
 * email suggestion / email correction
 */
function checkEmail() {    
	let domains = [
		"me.com",
		"outlook.com",
		"netvigator.com",
		"cloud.com",
		"live.hk",
		"msn.com",
		"gmail.com",
		"hotmail.com",
		"ymail.com",
		"yahoo.com",
		"yahoo.com.tw",
		"yahoo.com.hk"
	];
	let topLevelDomains = ["com", "net", "org"];

	$("#email").on('blur', function() {
        console.log($("#email").val())
		Mailcheck.run({
			email: $("#email").val(),
			domains: domains, // optional
			topLevelDomains: topLevelDomains, // optional
			suggested: (suggestion) => {      
                $('.email-suggestion').remove();
                $(`<div class="email-suggestion">您想輸入的是 <strong id="emailSuggestion">${suggestion.full}</strong> 嗎？</div>`).insertAfter("#email");
                
                $(".email-suggestion").click(function() {
                    $("#email").val($('#emailSuggestion').html());
                    $('.email-suggestion').remove();
                });
			},
			empty: () => {
				// this.emailSuggestion = null
			}
		});
	});
}

const resolveEnPagePetitionStatus = () => {
	let status = "FRESH";
	// console.log(window);
	if (window.pageJson.pageNumber === 2) {
		status = "SUCC"; // succ page
	} else {
		status = "FRESH"; // start page
	}

	return status;
};

const initForm = () => {
    console.log('init form')

    $("#architecture-contact-button").click(function () {
        var error = ValidationArchitectureContactForm();
        console.log(error)
        if (error) {

            console.log("form passed")
            $('#mc-form [name="Email"]').val($('#email').val())
            $('#mc-form [name="LastName"]').val($('#last-name').val());
            $('#mc-form [name="FirstName"]').val($('#first-name').val());
            $('#mc-form [name="MobilePhone"]').val($('#mobile').val());
            $('#mc-form [name="OptIn"]').val($('#optin').prop('checked'));
            $('#mc-form [name="Birthdate"]').val(dayjs($('#birth-year').val()).format("YYYY-MM-DD"));
            $('#mc-form [name="CampaignData1__c"]').val($('#campaign-data-1').val());
            $('#mc-form [name="CampaignData2__c"]').val($('#campaign-data-2').val());
            // collect values from form
            let formData = new FormData();
            Object.keys($("#mc-form input")).forEach(function (el) {
                let e = $("#mc-form input")[el]
                let v = null;
                if (e.type === "checkbox") {
                    // console.log(e)
                    v = $('#optin').prop('checked');
                } else {
                    v = e.value;
                }
                formData.append(e.name, v);
                console.log('use', e.name, v)
            });
            
            // need testing
            $(".loading-cover").fadeIn();
            return fetch($("#mc-form").attr("action"), {
                method: "POST",
                body: formData,
            }).then((response) => {
                $(".loading-cover").fadeOut();
                if (response.ok) {
                    return response.json()
                } 
                throw({
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    type: response.type,
                })
            }).then((response) => {
                if (response) {
                    console.log("mc form posted")
                    console.log('response', response)
                    window.pageJson.pageNumber = 2;
                    $(".page-1").hide();
                    $(".page-2").show();
                    // footer_main_page_url += `_tkpage`;
                    // footer_donate_url += `_tkpage`;
                    // footer_privacy_url += `_tkpage`;
                    // sendPetitionTracking('2021-plastic_policy');
                }
            }).catch((error) => {
                console.log(error);
                this.formLoading = false;
                
            });
        }
    });

    function ValidationArchitectureContactForm() {
        var error = true;
        $('#architecturecontactform input[type=text]').each(function (index) {
            if (index == 0 || index == 1) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#architecturecontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#architecturecontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            // email
            else if (index == 2) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#architecturecontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#architecturecontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

}

function init () {
    
    const EN_PAGE_STATUS = resolveEnPagePetitionStatus()
	// console.log("EN_PAGE_STATUS", EN_PAGE_STATUS)
	if (EN_PAGE_STATUS==="FRESH") {
    
        $(".page-2").hide();

	} else if (EN_PAGE_STATUS==="SUCC") {
        
        $('.page-1').hide();
        $('.page-2').show();
        $("section").hide();
        $("#home").show();
    }
    
    $(".loading-cover").fadeOut();

}

/**
 * Send the tracking event to the ga
 * @param  {string} eventLabel The ga trakcing name, normally it will be the short campaign name. ex 2019-plastic_retailer
 * @param  {[type]} eventValue Could be empty
 * @return {[type]}            [description]
 */
function sendPetitionTracking(eventLabel, eventValue) {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
	    'event': 'gaEvent',
	    'eventCategory': 'petitions',
	    'eventAction': 'signup',
	    'eventLabel': eventLabel,
	    'eventValue' : eventValue
	});

	window.dataLayer.push({
	    'event': 'fbqEvent',
	    'contentName': eventLabel,
	    'contentCategory': 'Petition Signup'
	});

	window.uetq = window.uetq || [];  
	window.uetq.push ('event', 'signup', {'event_category': 'petitions', 'event_label': eventLabel, 'event_value': 0});
}