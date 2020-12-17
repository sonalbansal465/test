var url = window.location.href;
var checkoutId = url.split("/")[5];
var redirect_url = "https://www.w3schools.com?checkoutid="+ checkoutId;
window.location = redirect_url
