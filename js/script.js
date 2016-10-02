$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dnf = {};

var homeHtmlUrl = "snippets/home-snippet.html";
var aboutUsUrl = "snippets/about-snippet.html";
var blogUrl = "snippets/blog-snippet.html";
var getInvolvedUrl = "snippets/get-involved-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {


// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtmlUrl, function(responseText){
  	document.querySelector('#main-content')
  	.innerHTML=responseText;
  },
  false); // end ajaxUtils request

// load about-snippet
dnf.loadAboutUsSnippet = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutUsUrl, function(responseText){
      document.querySelector('#main-content')
      .innerHTML=responseText;
    });
};

// load blog-snippet
dnf.loadBlogSnippet = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    blogUrl, function(responseText){
      document.querySelector('#main-content')
      .innerHTML=responseText;
    });
};

// load get-involved
dnf.loadGetInvolvedSnippet = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    getInvolvedUrl, function(responseText){
      document.querySelector('#main-content')
      .innerHTML=responseText;
    });
};

// load contact
dnf.loadContactSnippet = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutUsUrl, function(responseText){
      document.querySelector('#main-content')
      .innerHTML=responseText;
    });
};

});
// *** finish **


global.$dnf = dnf;

})(window);