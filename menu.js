//გვერდის თავში ტვირთავს მენიუს
//(გამოყენებულია XMLHttpRequest)

var request = new XMLHttpRequest()
request.open("GET","menu.html")
request.send()
request.onload = function(){
    if(request.status >= 200 && request.status < 300){
        document.getElementById("menu-section").innerHTML = request.responseText
        var langScript = document.createElement("script")
        langScript.src = "lang.js"
        langScript.defer = true
        document.body.appendChild(langScript)
    }else{
        console.log("Error loading menu. Status code: "+request.status)
    }
}