var url = window.location.href;
var checkoutId = url.split("/")[5];
var redirect_url = "https://www.w3schools.com?checkoutid="+ checkoutId;
console.log(redirect_url,'redirect_url???');
window.location = redirect_url
