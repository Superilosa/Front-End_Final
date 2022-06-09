//passStr : 0-არავალიდური,1-სუსტი,2-საშუალო,3-ძლიერი,4-ძალიან ძლიერი
var passStr = 0
var strKa = ["არავალიდური","სუსტი","საშუალო","ძლიერი","ძალიან ძლიერი"]
var strEn = ["invalid","weak","normal","strong","very strong"]

//რეგისტრაციის თარიღის ავტომატური დაყენება
var date = new Date()
var mm = date.getMonth()+1
if(mm<10){
    mm = "0"+mm.toString()
}
var dd = date.getDate()
if(dd<10){
    dd = "0"+dd.toString()
}
document.getElementById("date").value = date.getFullYear()+"-"+mm+"-"+dd

//ამოწმებს ჩანაწერების ვალიდურობას
function checkForm(){
    var user = document.getElementById("user").value
    if(checkEmpty(user,"მომხმარებლის სახელი","Username")){
        var mail = document.getElementById("mail").value
        if(checkEmpty(mail,"ელექტრონული ფოსტა","Email")){
            if(validEmail(mail)){
                var pass = document.getElementById("pass").value
                if(checkEmpty(pass,"პაროლი","Password")){
                    var pass2 = document.getElementById("pass2").value
                    if(pass==pass2){
                        if(passStrength(pass)){
                            var country = document.getElementById("country").value
                            if(checkEmpty(country,"ქვეყანა","Country")){
                                var town = document.getElementById("town").value
                                if(checkEmpty(town,"ქალაქი","City")){
                                    var num = document.getElementById("num").value
                                    if(checkEmpty(num,"მობილურის ნომერი","Mobile number")){
                                        if(localStorage.getItem("lang")=="ka"){
                                            alert("წარმატებული რეგისტრაცია")
                                            alert("პაროლის სირთულე: "+strKa[passStr])
                                        }else{
                                            alert("Successful registration")
                                            alert("Password strength: "+strEn[passStr])
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(localStorage.getItem("lang")=="ka"){
                            alert("პაროლები არ ემთხვევა")
                        }else{
                            alert("Passwords do not match")
                        }
                    }
                }
            }
        }
    }
}

//ამოწმებს ხომ არ არის ფორმა ცარიელი და გამოაქვს შესაბამისი შეტყობინება
function checkEmpty(f,ka,en){
    if(f.length>0){
        return true
    }
    if(localStorage.getItem("lang")=="ka"){
        alert(ka+" არ შეიძლება ცარიელი იყოს")
    }else{
        alert(en+" can't be empty")
    }
    return false
}

//ამოწმებს ელექტრონული ფოსტის ვალიდურობას
function validEmail(e){
    var sign = false
    for(let i=0;i<e.length-2;i++){
        if(e.charAt(i)=='@'&&i>0){
            sign = true
        }
        if(e.charAt(i)=='.'&&sign){
            return true   
        }
    }
    if(localStorage.getItem("lang")=="ka"){
        alert("ელექტრონული ფოსტა არ არის ვალიდური")
    }else{
        alert("Email is not valid")
    }
    return false
}

//ამოწმებს პაროლის სიმძლავრეს და გამოაქვს ინფორმაცია შესაბამის ადგილას
function passStrength(p){
    passStr = 0
    if(p.length<6){
        if(localStorage.getItem("lang")=="ka"){
            alert("პაროლი ძალიან მოკლეა")
        }else{
            alert("Password is too short")
        }
        return false
    }
    var low = false
    var up = false
    var n = false
    var s = false 
    for(let i=0;i<p.length;i++){
        let c = p.charCodeAt(i)
        if(c>=65&&c<=90){
            up = true
        }else if(c>=97&&c<=122){
            low = true
        }else if(c>=48&&c<=57){
            n = true
        }else if(c>=33&&c<=47||c>=58&&c<=64||c>=91&&c<=96||c>=123&&c<=126){
            s = true
        }
    }
    if(low||up){
        passStr++
        if(n){
            passStr++
            if(low&&up){
                passStr++
                if(s){
                    passStr++
                    return true
                }
                return true
            }
            return true
        }
        return true
    }
    if(localStorage.getItem("lang")=="ka"){
        alert("პაროლი არაა ვალიდური")
    }else{
        alert("Password is not valid")
    }
    return false
}