//ენების გადამრთველი ფუნქცია. მცირე ნაწილში გამოყენებული Promise-ც
if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang") == "ka"
}else if(localStorage.getItem("lang") == "en"){
    new Promise((resolve)=>{
        localStorage.setItem("lang","ka")
        resolve()
    }).then(()=>swLang())
}
function swLang(){
    var ka = document.querySelectorAll('[lang="ka"]')
    var en = document.querySelectorAll('[lang="en"]')
    if(localStorage.getItem("lang")=="ka"){
        showHide(en,ka)
        localStorage.setItem("lang","en")
    }else{
        showHide(ka,en)
        localStorage.setItem("lang","ka")
    }
}

function showHide(sh,hd){
    for(let txt of hd){
        txt.setAttribute("hidden",true)
    }
    for(let txt of sh){
        txt.removeAttribute("hidden")
    }
}