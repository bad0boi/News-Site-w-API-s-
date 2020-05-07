$(document).ready(function(){ 
                    
                    $("#cookieConsent").fadeIn(200);
                    
                    $("#closeCookieConsent, .cookieConsentOK").click(function() {
                        $("#cookieConsent").fadeOut(200);
                        localStorage.setItem("cookieConsent", "You have agreed to the cookies terms and conditions");
                    });
                    
                    var storage = localStorage.getItem("cookieConsent")
                    
                    if (storage != null) {
                        $("#welcome").show();
                        $("#cookieConsent").hide();
                    }
                    
                    $(".welcomeOK").click(function() {
                        $("#welcome").hide();
                    });
    
});