
import "./main.scss";
const dayjs = require("dayjs");
const axios = require("axios");
const ProgressBar = require("progressbar.js");
const { $, dataLayer, currency } = window;
const Mailcheck = require("mailcheck");

// let footer_main_page_url = `https://www.greenpeace.org/taiwan/?ref=2021-plastic_policy_petition`
// let footer_donate_url = `https://supporter.ea.greenpeace.org/tw/s/donate?campaign=plastics&ref=2021-plastic_policy_petition-footer`
// let footer_privacy_url = `https://www.greenpeace.org/taiwan/policies/privacy-and-cookies/?ref=2021-plastic_policy_petition`

window.directTo = function (url) {
  window.open(url, "_blank");
};

const memberList = require("./ourMember");
const newsList = require("./news");

window.showSlider = function (evt, index) {
  // if($(evt).hasClass('active')){
  //   $(".square-btn").removeClass("active");
  //   $('#tab-all').click();
  // }else{
  //   $(".square-btn").removeClass("active");
  //   $(evt).addClass("active");
  //   $('#type_title span').text($(evt).text());
  // }
  // console.log($(evt).text())
  
  //console.log($(evt).text());
  
};

let perPage = $(window).width() > 1024 ? 12 : 9;
function renderMemberList() {
  let btnHTML = ``;
  let owlCarouselHTML = ``;
  let mobileOwlCarouselHTML = ``;
  $("#square-btn-container").html(btnHTML);
  $("#owl-our-members-container").html(owlCarouselHTML);
  $("#mobile-owl-our-members").html(mobileOwlCarouselHTML);
  let allMembers = [];
  btnHTML += `
  <a class="square-btn btn __paragraph active" id="tab-all" style="display:none;" href="#square-btn-tab-all" aria-controls="square-btn-tab-all" role="tab" data-toggle="tab" onclick="showSlider(this, 'all')">全部產業別</a>
  `;
  for (let i of memberList) {
    console.log(i.name);
    if(i.data.length > 0){
        btnHTML += `
              <a class="square-btn btn __paragraph" href="#square-btn-tab-${
        i.index
      }" aria-controls="square-btn-tab-${
        i.index
      }" role="tab" data-toggle="tab" onclick="showSlider(this, ${i.index})">${i.name}</a>
          `;

      owlCarouselHTML += `<div role="tabpanel" class="tab-pane" id="square-btn-tab-${i.index}">
          <!--div class="__navigation_left __navigation_left-${i.index}">
              <h4><i class='fa fa-angle-left'></i></h4>
          </div>
          <div class="__navigation_right __navigation_right-${i.index}">
              <h4><i class='fa fa-angle-right'></i></h4>
          </div-->
          <div class="owl-carousel owl-theme owl-our-members" id="owl-carousel-card-${
            i.index
          }">`;
        for (let d of i.data) {
          d.cate = i.name;
          allMembers.push(d);
          mobileOwlCarouselHTML += `
              <div class="item">
                  <div class="owl-item-type">${i.name}</div>
                  <div class="owl-item-img">
                      <img src="${d.img}" alt="">
                  </div>
                  <div class="owl-item-title">
                      ${d.title}
                  </div>
                  <div class="owl-item-description">
                      <p>${d.description}</p>
                  </div>
                  <div class="owl-item-footer">
                  ${d.goal}
                  </div>
              </div>`;
        }
    }
    
    /*for (let d of i.data) {
      mobileOwlCarouselHTML += `
            <div class="item">
                <div class="owl-item-type">${i.name}</div>
                <div class="owl-item-img">
                    <img src="${d.img}" alt="">
                </div>
                <div class="owl-item-title">
                    ${d.title}
                </div>
                <div class="owl-item-description">
                    <p>${d.description}</p>
                </div>
                <div class="owl-item-footer">
                ${d.goal}
                </div>
            </div>`;

      owlCarouselHTML += `
                <div class="item">
                    <div class="owl-item-type">${i.name}</div>
                    <div class="owl-item-img">
                        <img src="${d.img}" alt="">
                    </div>
                    <div class="owl-item-title">
                        ${d.title}
                    </div>
                    <div class="owl-item-description">
                        <p>${d.description}</p>
                    </div>
                    <div class="owl-item-footer">
                    ${d.goal}
                    </div>
                </div>`;
      
      allMembers += `
                <div class="item">
                    <div class="owl-item-type">${i.name}</div>
                    <div class="owl-item-img">
                        <img src="${d.img}" alt="">
                    </div>
                    <div class="owl-item-title">
                        ${d.title}
                    </div>
                    <div class="owl-item-description">
                        <p>${d.description}</p>
                    </div>
                    <div class="owl-item-footer">
                    ${d.goal}
                    </div>
                </div>`;
    }*/

    owlCarouselHTML += `</div><div class="member-pagi" id="pagination-${i.index}"></div></div>`;
  }
  owlCarouselHTML += `<div role="tabpanel" class="tab-pane active" id="square-btn-tab-all">
      <!--div class="__navigation_left __navigation_left-all">
          <h4><i class='fa fa-angle-left'></i></h4>
      </div>
      <div class="__navigation_right __navigation_right-all">
          <h4><i class='fa fa-angle-right'></i></h4>
      </div-->
      <div class="owl-carousel owl-theme owl-our-members" id="owl-carousel-card-all"></div><div class="member-pagi" id="pagination-all"></div></div>`;

  $("#square-btn-container").html(btnHTML);
  $("#owl-our-members-container").html(owlCarouselHTML);
  $("#mobile-owl-our-members").html(mobileOwlCarouselHTML);
  $(`#mobile-owl-our-members`).owlCarousel({
    items: 1,
    pagination: false,
    afterInit: countCaroysel,
    afterMove: countCaroysel
  });
  function countCaroysel(e){
    $('#mb-our-members-count').text(`${this.currentItem+1}/${this.itemsAmount}`);
  }
  // let owlMobile = $(`#mobile-owl-our-members`).data("owlCarousel");
  // console.log(owlMobile)
  // $(`.__navigation_right_mobile`).click(function () {
  //   owlMobile.next();
  // });

  // $(`.__navigation_left_mobile`).click(function () {
  //   owlMobile.prev();
  // });
  
  
  let pagiOptions = {
    pageSize: perPage,
    pageRange: 1,
    prevText: '',
    nextText: '',
    ellipsisText: '⋯',
  }
  for(let i = 0; i < memberList.length+1; i++){
    if(i < memberList.length && memberList[i].data.length > 0){
      $('#pagination-' + i).pagination({
        dataSource: memberList[i].data,
        pageSize: pagiOptions.pageSize,
        pageRange: pagiOptions.pageRange,
        prevText: pagiOptions.prevText,
        nextText: pagiOptions.nextText,
        ellipsisText: pagiOptions.ellipsisText,
        callback: function(data, pagination) {
          var dataHtml = '';
          $.each(data, function (index, d) {
            dataHtml += `
            <div class="item">
                <div class="owl-item-type">${memberList[i].name}</div>
                <div class="owl-item-img">
                    <img src="${d.img}" alt="">
                </div>
                <div class="owl-item-title">
                    ${d.title}
                </div>
                <div class="owl-item-description">
                    <p>${d.description}</p>
                </div>
                <div class="owl-item-footer">
                ${d.goal}
                </div>
            </div>`;
          });
          $('#owl-carousel-card-' + i).html(dataHtml);
        },
        afterInit: function(){
          if($('#pagination-' + i).pagination('getTotalPage') <= 1){
            $('#pagination-' + i).css('opacity',0);
          }
          $(window).one('clear', function(){
            $('#pagination-' + i).pagination('destroy');
          });
        }
      })
      $('#pagination-' + i).addHook('beforePaging',function(){
        $('html, body').animate({scrollTop: $('#type_title').offset().top - $('.navbar').height()});
      });
    }else{
      $('#pagination-all').pagination({
        dataSource: allMembers,
        pageSize: pagiOptions.pageSize,
        pageRange: pagiOptions.pageRange,
        prevText: pagiOptions.prevText,
        nextText: pagiOptions.nextText,
        ellipsisText: pagiOptions.ellipsisText,
        callback: function(data, pagination) {
          var dataHtml = '';
          $.each(data, function (index, d) {
            dataHtml += `
            <div class="item">
                <div class="owl-item-type">${d.cate}</div>
                <div class="owl-item-img">
                    <img src="${d.img}" alt="">
                </div>
                <div class="owl-item-title">
                    ${d.title}
                </div>
                <div class="owl-item-description">
                    <p>${d.description}</p>
                </div>
                <div class="owl-item-footer">
                ${d.goal}
                </div>
            </div>`;
          });
          $('#owl-carousel-card-all').html(dataHtml);
        },
        afterInit: function(){
          $(window).one('clear', function(){
            $('#pagination-all').pagination('destroy');
          });
        },
      });
      $('#pagination-all').addHook('beforePaging',function(){
        $('html, body').animate({scrollTop: $('#type_title').offset().top - $('.navbar').height()});
      });
    }
  }
  // for (let i of memberList) {
  //   $(`#owl-carousel-card-${i.index}`).owlCarousel({
  //     items: 4,
  //     itemsDesktop: [1440, 4],
  //     pagination: false,
  //   });

  //   let owl = $(`#owl-carousel-card-${i.index}`).data("owlCarousel");

  //   $(`.__navigation_right-${i.index}`).click(function () {
  //     owl.next();
  //   });

  //   $(`.__navigation_left-${i.index}`).click(function () {
  //     owl.prev();
  //   });
  // }

  
}

function renderNewsList(){
  let pagiOptions = {
    pageSize: 10,
    pageRange: 1,
    prevText: '',
    nextText: '',
    ellipsisText: '⋯',
  }

  $('#newsList').pagination({
    pageSize: pagiOptions.pageSize,
    pageRange: pagiOptions.pageRange,
    prevText: pagiOptions.prevText,
    nextText: pagiOptions.nextText,
    ellipsisText: pagiOptions.ellipsisText,
    dataSource: newsList,
    callback: function(data,pagination) {
      console.log(data)
      var html = newsItemTemp(data);
      $('#newsList .news-list').html(html);
    }
  })
  function newsItemTemp(data){
    var htmlStr = "";
    $.each(data, function(index, item){
      htmlStr += `<!-- start news item -->
      <li class="news-item">
        <a class="news-link" href="${item.url}" target="_blank">
          <span class="news-date">${item.date}</span>
          <span class="news-tag">【${item.tag}】</span>
          <span class="news-title">${item.title} ></span>
        </a>
      </li>
      <!-- end news item -->`
    });
    return htmlStr
  }
}

$(document).ready(function () {
  console.log("ready!");
  // set news number
  $('.__news_no').each(function(index, item){
    $(this).text('0' + (index+1));
  });
  $("._show-bg").click(function () {
    $(".__show-bg").fadeIn();
    $(".__show-slider").hide();
    $(".__tab_changing").addClass("col-sm-6");
    $(".__tab_changing").removeClass("col-sm-12");
  });
  $("._show-slider").click(function () {
    $(".__show-bg").hide();
    $(".__show-slider").fadeIn();
    $(".__tab_changing").removeClass("col-sm-6")
    $(".__tab_changing").addClass("col-sm-12")
  });
  $("._show-slider").click();
  // initProgressBar();
  createYearOptions();
  renderMemberList();
  initForm();
  checkEmail();
  init();
  $(document).on('click', '.square-btn', function(e){
    console.log('click tab')
    if($(this).hasClass('active')){
      $(".square-btn").removeClass("active");
      $('#tab-all').click();
      e.stopPropagation();
    }else{
      $(".square-btn").removeClass("active");
      $(this).addClass("active");
      $('#type_title span#cate-name').text($(this).text());
    }
  });
  $(window).on('resize', function(){
    if($(window).width() > 1024 && perPage != 12){
      perPage = 12;
      $(window).trigger('clear');
      renderMemberList();
    }else if($(window).width() <= 1024 && perPage != 9){
      perPage = 9;
      $(window).trigger('clear');
      renderMemberList();
    }

  });

  renderNewsList();

});

function createYearOptions() {
  console.log(createYearOptions);
  let currYear = new Date().getFullYear();
  $("#userBirthYear").append(`<option select value="">出生年份</option>`);
  for (var i = 0; i < 80; i++) {
    let option = `<option value="01/01/${currYear - i}">${
      currYear - i
    }</option>`;

    $("#userBirthYear").append(option);
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
    "yahoo.com.hk",
  ];
  let topLevelDomains = ["com", "net", "org"];

  $("#userEmail").on("blur", function () {
    console.log($("#userEmail").val());
    Mailcheck.run({
      email: $("#userEmail").val(),
      domains: domains, // optional
      topLevelDomains: topLevelDomains, // optional
      suggested: (suggestion) => {
        $(".email-suggestion").remove();

        console.log(`suggested : ${suggestion.full}`);
        $(
          `<div class="email-suggestion">您想輸入的是 <strong id="emailSuggestion">${suggestion.full}</strong> 嗎？</div>`
        ).insertAfter("#userEmail");

        $(".email-suggestion").click(function () {
          $("#userEmail").val($("#emailSuggestion").html());
          $(".email-suggestion").remove();
        });
      },
      empty: () => {
        // this.emailSuggestion = null
      },
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
  console.log("init form");

  $("#architecture-contact-button").click(function () {
    let error = false;

    let data = {
      userFirstName: $("#userFirstName").val(),
      userLastName: $("#userLastName").val(),
      userPhone: $("#userPhone").val(),
      userEmail: $("#userEmail").val(),
      userBirthYear: $("#userBirthYear").val(),
    };

    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        $(`#${key}`).addClass("required-error");
        error = true;
      } else if (
        key === "userEmail" &&
        !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(
          data[key]
        )
      ) {
        $(`#${key}`).addClass("required-error");
        error = true;
      } else if (key === "userPhone") {
        console.log(data[key]);
        const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(
          data[key]
        );
        const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(
          data[key]
        );
        const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(
          data[key]
        );

        if (!phoneReg6 && !phoneReg7 && !phoneReg8) {
          $(`#${key}`).addClass("required-error");
          error = true;
        }
      } else {
        $(`#${key}`).removeClass("required-error");
      }
    });

    if (error) {
      console.log("form validating error");
      return;
    }

    console.log("form passed");

    $('#mc-form [name="Email"]').val(data.userEmail);
    $('#mc-form [name="LastName"]').val(data.userLastName);
    $('#mc-form [name="FirstName"]').val(data.userFirstName);
    $('#mc-form [name="MobilePhone"]').val(data.userPhone);
    $('#mc-form [name="OptIn"]').val($("#userOptin").prop("checked"));
    $('#mc-form [name="Birthdate"]').val(
      dayjs(data.userBirthYear).format("YYYY-MM-DD")
    );
    // $('#mc-form [name="CampaignData1__c"]').val($('#campaign-data-1').val());
    // $('#mc-form [name="CampaignData2__c"]').val($('#campaign-data-2').val());
    // collect values from form
    let formData = new FormData();
    Object.keys($("#mc-form input")).forEach(function (el) {
      let e = $("#mc-form input")[el];
      let v = null;
      if (e.type === "checkbox") {
        // console.log(e)
        v = $("#userOptin").prop("checked");
      } else {
        v = e.value;
      }
      formData.append(e.name, v);
      console.log("use", e.name, v);
    });

    // need testing
    $(".loading-cover").fadeIn();
    return fetch($("#mc-form").attr("action"), {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        $(".loading-cover").fadeOut();
        $(".form-block").hide();
        $(".thank-you-block").removeClass("hidden");
        $(".thank-you-words").html("系統將自動發送公民手冊至您的電子信箱．");
        sendPetitionTracking("2021-climate-re10x10");
        if (response.ok) {
          return response.json();
        }
        throw {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          type: response.type,
        };
      })
      .then((response) => {
        if (response) {
          console.log("mc form posted");
          console.log("response", response);
          window.pageJson.pageNumber = 2;
        }
      })
      .catch((error) => {
        console.log(error);
        $(".loading-cover").fadeOut();
      });
  });
};

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("utm_source") === "dd") {
    $(".donate-btn").hide();
    $(".share-section").removeClass("col-md-4");
    $(".share-section").removeClass("col-sm-6");
    $(".share-section").addClass("col-md-8");
    $(".share-section").addClass("col-sm-12");
    $(".slider-typography").css("position", "relative");
    $(".slider-typography").css("padding-top", "15%");
    $(".line-share-img").hide();

    switch (urlParams.get("utm_content")) {
      case "tp":
        $(".line-link").attr("href", "http://act.gp/GPLINE_tp");
        $(".tp-line").show();
        break;
      case "tc":
        $(".tc-line").show();
        $(".line-link").attr("href", "http://act.gp/GPLINE_tc");
        break;
      case "ks":
        $(".ks-line").show();
        $(".line-link").attr("href", "http://act.gp/GPLINE_ks");
        break;
      default:
        $(".tp-line").show();
        $(".line-link").attr("href", "http://act.gp/GPLINE_tp");
        break;
    }
  } else {
    $(".line-share-section").hide();
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
    event: "gaEvent",
    eventCategory: "petitions",
    eventAction: "signup",
    eventLabel: eventLabel,
    eventValue: eventValue,
  });

  window.dataLayer.push({
    event: "fbqEvent",
    contentName: eventLabel,
    contentCategory: "Petition Signup",
  });

  window.uetq = window.uetq || [];
  window.uetq.push("event", "signup", {
    event_category: "petitions",
    event_label: eventLabel,
    event_value: 0,
  });
}

async function addEnterprise() {
  let error = false;
  let data = {
    entName: $("#entName").val(),
    entContactName: $("#entContactName").val(),
    entContactEmail: $("#entContactEmail").val(),
    entContactPhone: $("#entContactPhone").val(),
    entContactPosition: $("#entContactPosition").val(),
    entKnowledge: $("#entKnowledge").val(),
  };

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      $(`#${key}`).addClass("required-error");
      error = true;
    } else if (key === "entContactPhone") {
      console.log(data[key]);
      const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(data[key]);
      const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(
        data[key]
      );
      const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(
        data[key]
      );

      if (!phoneReg6 && !phoneReg7 && !phoneReg8) {
        $(`#${key}`).addClass("required-error");
        error = true;
      } else {
        $(`#${key}`).removeClass("required-error");
      }
    } else {
      $(`#${key}`).removeClass("required-error");
    }
  });

  if (error) {
    console.log("form validating error");
    return;
  }

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      $(`#${key}`).removeClass("required-error");
    }
  });

  $(".loading-cover").fadeIn();
  try {
    console.log("adding enterprise data");
    const appScript = `https://script.google.com/macros/s/AKfycbzS4_qLUhmgrUJGG8dTetsbd9Te_RcUzLjeE-Ko30vDkiXLY9CnzgRGJgcK44ghp3gl-w/exec`;
    let ipRes = await axios.get("https://api.ipify.org?format=json");
    let ip = ipRes.data.ip;

    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get("utm_source") || "";

    let postData = {
      rows: [
        {
          ip: ip,
          name: data.entName,
          contact_name: data.entContactName,
          contact_position: data.entContactEmail,
          contact_phone: data.entContactPhone.toString(),
          contact_email: data.entContactPosition,
          knowledge: data.entKnowledge,
          receive_news: $("#ent-optin").prop("checked"),
          created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          utm_source: utm_source,
        },
      ],
    };

    console.log(postData);
    await axios.post(appScript + `?sheetName=Enterprises`, postData, {
      headers: { "Content-Type": "text/plain;charset=utf-8" },
    });
  } catch (err) {
    console.log(err);
  } finally {
    $(".loading-cover").hide();
    $(".form-block").hide();
    $(".thank-you-block").removeClass("hidden");
    $(".thank-you-words").html("你的資料已成功送出，請靜候專人與您聯繫．");
  }
}

window.addEnterprise = addEnterprise;
