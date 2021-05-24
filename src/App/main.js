import './main.scss'
const dayjs = require("dayjs")
const axios = require("axios");
const ProgressBar = require('progressbar.js')
const {$, dataLayer, currency} = window
const Mailcheck = require('mailcheck');

// let footer_main_page_url = `https://www.greenpeace.org/taiwan/?ref=2021-plastic_policy_petition`
// let footer_donate_url = `https://supporter.ea.greenpeace.org/tw/s/donate?campaign=plastics&ref=2021-plastic_policy_petition-footer`
// let footer_privacy_url = `https://www.greenpeace.org/taiwan/policies/privacy-and-cookies/?ref=2021-plastic_policy_petition`

window.directTo = function (url) {
    window.open(url, '_blank');
}

const memberList = require("./ourMember.json");

window.showSlider = function (evt, index) {
    $('.square-btn').removeClass("active")
    $(evt).addClass("active")
}

function renderMemberList () {
    let btnHTML = ``;
    let owlCarouselHTML  = ``
    let mobileOwlCarouselHTML  = ``
    
    for (let i of memberList) {
        console.log(i)
        btnHTML += `<div class="col-sm-4 padding-two no-padding-left">
            <a class="square-btn btn ${i.index === 0 ? "active" : ""}" href="#square-btn-tab-${i.index}" aria-controls="square-btn-tab-${i.index}" role="tab" data-toggle="tab" onclick="showSlider(this, ${i.index})">${i.name}</a>
        </div>`

        owlCarouselHTML += `<div role="tabpanel" class="tab-pane ${i.index === 0 ? "active" : ""}" id="square-btn-tab-${i.index}">
        <div class="__navigation_left __navigation_left-${i.index}">
            <h4><i class='fa fa-angle-left'></i></h4>
        </div>
        <div class="__navigation_right __navigation_right-${i.index}">
            <h4><i class='fa fa-angle-right'></i></h4>
        </div>
        <div class="owl-carousel owl-theme owl-our-members" id="owl-carousel-card-${i.index}">`;

        for (let d of i.data) {
            mobileOwlCarouselHTML += `
            <div class="item">
                <div class="owl-item-img">
                    <img src="${d.img}" alt="">
                </div>
                <div class="owl-item-title">
                    <h5>${d.title}</h5>
                </div>
                <div class="owl-item-description">
                    <p>${d.description}</p>
                </div>
                <div class="owl-item-footer">
                    <span class="item-year">${d.targetYear}</span> 年完成 <span class="item-percent">${d.targetPercent}</span> 
                </div>
            </div>`

            owlCarouselHTML += `
                <div class="item">
                    <div class="owl-item-img">
                        <img src="${d.img}" alt="">
                    </div>
                    <div class="owl-item-title">
                        <h5>${d.title}</h5>
                    </div>
                    <div class="owl-item-description">
                        <p>${d.description}</p>
                    </div>
                    <div class="owl-item-footer">
                        <span class="item-year">${d.targetYear}</span> 年完成 <span class="item-percent">${d.targetPercent}</span> 
                    </div>
                </div>`
        }

        owlCarouselHTML += '</div></div>'
    }
    
    $("#square-btn-container").html(btnHTML);
    $("#owl-our-members-container").html(owlCarouselHTML);
    $('#mobile-owl-our-members').html(mobileOwlCarouselHTML)
    $(`#mobile-owl-our-members`).owlCarousel({
        items : 2,
        pagination: false
    });
    let owlMobile = $(`#mobile-owl-our-members`).data('owlCarousel');
    $(`.__navigation_right_mobile`).click(function () {
        owlMobile.next() 
    })

    $(`.__navigation_left_mobile`).click(function () {
        owlMobile.prev() 
    })

    for (let i of memberList) {
        
        $(`#owl-carousel-card-${i.index}`).owlCarousel({
            items : 3,
            itemsDesktop : [1440,2],
            pagination: false,
        });
        
        let owl = $(`#owl-carousel-card-${i.index}`).data('owlCarousel');

        $(`.__navigation_right-${i.index}`).click(function () {
            owl.next() 
        })

        $(`.__navigation_left-${i.index}`).click(function () {
            owl.prev() 
        })
    }
    
}

$(document).ready(function() {
    console.log( "ready!" );
    $("._show-bg").click(function () {
        $(".__show-bg").fadeIn();
        $(".__show-slider").hide();
        $(".__tab_changing").addClass("col-sm-6")
        $(".__tab_changing").removeClass("col-sm-5")
    })
    $("._show-slider").click(function () {
        $(".__show-bg").hide();
        $(".__show-slider").fadeIn();
        $(".__tab_changing").removeClass("col-sm-6")
        $(".__tab_changing").addClass("col-sm-5")
    })
    // initProgressBar();
    createYearOptions();
    renderMemberList();
    initForm();
    checkEmail();
    init();
});

function createYearOptions() {
    console.log(createYearOptions);
    let currYear = new Date().getFullYear()
    $("#birth-year").append(`<option select value="">出生年份</option>`);
    for (var i = 0; i < 80; i++) {
        let option = `<option value="01/01/${currYear-i}">${currYear-i}</option>`

        $("#birth-year").append(option);
        // $('#en__field_supporter_NOT_TAGGED_6').append(option);
    }
}

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
        var error = ValidationForm("user-form");
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

}

function ValidationForm(id) {
    var error = false;
    $(`#${id} input[type=text]`).each(function (index) {
        if (index == 0 || index == 1 || index == 2) {
            if ($(this).val() == null || $(this).val() == "") {
                $(`#${id}`).find("input:eq(" + index + ")").addClass("required-error");
                error = true;
            }
            else {
                $(`#${id}`).find("input:eq(" + index + ")").removeClass("required-error");
            }
        }
        // email
        else if (index == 3) {
            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                $(`#${id}`).find("input:eq(" + index + ")").addClass("required-error");
                error = true;
            } else {
                $(`#${id}`).find("input:eq(" + index + ")").removeClass("required-error");
            }
        }

    });
    return error;
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

async function addEnterprise () {

    var error = ValidationForm("ent-form");
    let k = $("#ent-knowledge").val()
    if (!k) {
        $(`#ent-knowledge`).addClass("required-error");
    }
    if (error) {
        console.log("form validating error")
        return 
    }

    $(`#ent-knowledge`).removeClass("required-error");

    console.log("adding enterprise data")
    const appScript = `https://script.google.com/macros/s/AKfycbzS4_qLUhmgrUJGG8dTetsbd9Te_RcUzLjeE-Ko30vDkiXLY9CnzgRGJgcK44ghp3gl-w/exec`
    let ipRes = await axios.get("https://api.ipify.org?format=json");
    let ip = ipRes.data.ip;

    let postData = {
        "rows": [
            {
                "ip": ip,
                "name": $("#ent-name").val(),
                "contact_name": $("#ent-contact-name").val(),
                "contact_position": $("#ent-contact-position").val(),
                "contact_email": $("#ent-contact-email").val(),
                "knowledge": $("#ent-knowledge").val(),
                "receive_news": $("#ent-optin").prop("checked")
            }
        ]
    }

    console.log(postData)
    await axios.post(appScript + `?sheetName=Enterprises`, postData, { headers: {'Content-Type': 'text/plain;charset=utf-8'}});
}

window.addEnterprise = addEnterprise;