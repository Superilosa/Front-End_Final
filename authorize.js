function checkForm(){
    var user = document.getElementById("user").value
    if(user.length>0){
        var pass = document.getElementById("pass").value
        if(validPass(pass)){
            if(localStorage.getItem("lang")=="ka"){
                alert("წარმატებული ავტორიზაცია")
            }else{
                alert("Successful authorization")
            }
        }else{
            if(localStorage.getItem("lang")=="ka"){
                alert("არასწორი პაროლი")
            }else{
                alert("Incorrect password")
            }
        }
    }else{
        if(localStorage.getItem("lang")=="ka"){
            alert("არასწორი მომხმარებლის სახელი")
        }else{
            alert("Incorrect username")
        }
    }
}

function validPass(p){
    if(p.length<6){
        return false
    }
    for(let i=0;i<p.length;i++){
        let c = p.charCodeAt(i)
        if(c>=65&&c<=90||c>=97&&c<=122){
            return true
        }
    }
    return false
}