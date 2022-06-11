//ინსტრუმენტების კლასი შეიცავს სახელს, ფოტოს ლინკს და კატეგორიას (ყველაზე ქვედა დონის)
id = 0
class Instrument{
    constructor(nKa,nEn,img,cat){
        this.nKa = nKa
        this.nEn = nEn
        this.img = img
        this.cat = cat
        this.id = id++
    }
}

//კატეგორიები:
//სიმებიანი(S)->სიმებიან-ხემიანი(X)/გიტარები(G);კლავიშიანი(K);დასარტყამი(D);ჩასაბერი(C)->ხის ჩასაბერი(W)/ლითონის ჩასაბერი(L);

//ინსტრუმენტების ელემენტების მასივში თავმოყრა
inst = [new Instrument("ვიოლინო","Violin","https://m.media-amazon.com/images/I/71UpBlUsKyL._AC_SX425_.jpg",'X'),
new Instrument("ალტი","Viola","https://upload.wikimedia.org/wikipedia/commons/c/cd/Bratsche.jpg",'X'),
new Instrument("ჩელო","Cello","https://cdn.britannica.com/70/129670-050-01FEC5FE/Cello.jpg",'X'),
new Instrument("კონტრაბასი","Contrabass","https://images.squarespace-cdn.com/content/v1/60f1dc549ab2ce72e190ab73/1627224850588-BSY76NU6HU3ZDBH2WKMA/contrabass.png",'X'),
new Instrument("ელექტრო გიტარა","Electric Guitar","https://static.turbosquid.com/Preview/2014/05/19__18_04_31/SG_packshot1.jpg0de964a1-69af-4af6-992b-49eaab4b5eb9Large.jpg",'G'),
new Instrument("აკუსტიკური გიტარა","Acounstic Guitar","https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png",'G'),
new Instrument("ბას გიტარა","Bass Guitar","https://d1aeri3ty3izns.cloudfront.net/media/31/310922/1200/preview_1.jpg",'G'),
new Instrument("ფორტეპიანო","Piano","https://asia-latinamerica-mea.yamaha.com/en/files/yus5-SH2_a_9001_836fdbb0c2f9d4af70f103276e307ee7.jpg?impolicy=resize&imwid=2000&imhei=1878",'K'),
new Instrument("აკორდეონი","Accordion","https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Akordeon_Morino_V_120_De_Luxe_firmy_Hohner.jpg/1200px-Akordeon_Morino_V_120_De_Luxe_firmy_Hohner.jpg",'K'),
new Instrument("დრამი","Drum Kit","https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/496065/15777185_800.jpg",'D'),
new Instrument("ფლეიტა","Flute","https://www.kesslerandsons.com/wp-content/uploads/solist-fl1s-flute2.jpg",'W'),
new Instrument("კლარნეტი","Clarinet","https://m.media-amazon.com/images/I/610pDavD2YL._AC_SL1277_.jpg",'W'),
new Instrument("ფაგოტი","Basson","https://www.yamaha.com/en/musical_instrument_guide/common/images/bassoon/structure_p02_06.jpg",'W'),
new Instrument("საქსაფონი","Saxophone","https://kadence.in/wp-content/uploads/2020/08/500x500-25-1200x1200.jpg",'W'),
new Instrument("საყვირი","Trumpet","http://static.keymusic.com/products/238493/XL/stagg-ws-tr115-trumpet-bb-basic.jpg",'L'),
new Instrument("ვალტორნა","French Horn","https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Yamaha_Horn_YHR-667V.tif/lossy-page1-1200px-Yamaha_Horn_YHR-667V.tif.jpg",'L'),
new Instrument("ტრომბონი","Trombone","https://media.sweetwater.com/images/items/750/YSL354-large.jpg?v=2f20df142f73dd11",'L'),
new Instrument("ტუბა","Tuba","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yamaha_Bass_tuba_YFB-822.tif/lossy-page1-1200px-Yamaha_Bass_tuba_YFB-822.tif.jpg",'L')]

//კატეგორიის ფუნქციები
function sub(x){
    subClear()
    let sub = document.getElementsByClassName("sub"+x)
    for(let i=0;i<sub.length;i++){
        sub[i].removeAttribute("hidden")
    }
}
function subClear(){
    let sub = document.getElementsByClassName("sub")
    for(let i=0;i<sub.length;i++){
        sub[i].setAttribute("hidden",true)
    }
}

//ინსტრუმენტების კატეგორიის მიხედვით გაფილტვრა
out = document.getElementById("cat-output")
cats = document.getElementsByClassName("category")
function dis(c){
    for(let i=0;i<cats.length;i++){
        cats[i].style.backgroundColor = ""
    }
    document.getElementById(c).style.backgroundColor = "orange"
    var c1
    if(c=='S'){
        c = 'X'
        c1 = 'G'
    }else if(c=='C'){
        c = 'W'
        c1 = 'L'
    }else{
        c1 = c
    }
    //ინსტრუმენტების გამოტანა
    out.innerHTML = ""
    for(let i=0;i<inst.length;i++){
        if(inst[i].cat == c||inst[i].cat == c1){
            var item = document.createElement("div")
            item.className = "item"
            var img = document.createElement("img")
            img.src = inst[i].img
            var p = document.createElement("p")
            var ka = document.createElement("span")
            ka.lang = "ka"
            ka.innerText = inst[i].nKa
            var en = document.createElement("span")
            en.lang = "en"
            en.innerText = inst[i].nEn
            if(localStorage.getItem("lang")=="ka"){
                en.setAttribute("hidden",true)
            }else{
                ka.setAttribute("hidden",true)
            }
            p.appendChild(ka)
            p.appendChild(en)
            var btn = cartBtn(inst[i].id)
            item.appendChild(img)
            item.appendChild(p)
            item.appendChild(btn)
            out.appendChild(item)
        }
    }
}

//კალათში დამატების ღილაკი
function cartBtn(i){
    var btn = document.createElement("button")
    btn.id = "i"+i
    var btnA = document.createElement("p")
    btnA.className = "A"
    var btnKa = document.createElement("span")
    btnKa.lang = "ka"
    btnKa.innerText = "დამატება"
    var btnEn = document.createElement("span")
    btnEn.lang = "en"
    btnEn.innerText = "Add"
    if(localStorage.getItem("lang")=="ka"){
        btnEn.setAttribute("hidden",true)
    }else{
        btnKa.setAttribute("hidden",true)
    }
    btnA.appendChild(btnKa)
    btnA.appendChild(btnEn)
    var btnR = document.createElement("p")
    btnR.className = "R"
    btnKa = document.createElement("span")
    btnKa.lang = "ka"
    btnKa.innerText = "ამოღება"
    btnEn = document.createElement("span")
    btnEn.lang = "en"
    btnEn.innerText = "Remove"
    if(localStorage.getItem("lang")=="ka"){
        btnEn.setAttribute("hidden",true)
    }else{
        btnKa.setAttribute("hidden",true)
    }
    btnR.appendChild(btnKa)
    btnR.appendChild(btnEn)
    btn.onclick = function(){
        setCart(i)
    }
    //check if in cart
    var cart = JSON.parse(localStorage.getItem("cart"))
    btnR.setAttribute("hidden",true)
    if(cart != null){
        for(let k=0;k<cart.length;k++){
            if(i==cart[k]){
                btnA.setAttribute("hidden",true)
                btnR.removeAttribute("hidden")
                break
            }
        }
    }
    btn.appendChild(btnA)
    btn.appendChild(btnR)
    return btn
}

//კალათაში დამატება/ამოღება
function setCart(i){
    var btnA = document.querySelector("#i"+i+" p.A")
    var btnR = document.querySelector("#i"+i+" p.R")
    var cart = JSON.parse(localStorage.getItem("cart"))
    if(cart == null){
        let arr = [i]
        localStorage.setItem("cart",JSON.stringify(arr))
        btnA.setAttribute("hidden",true)
        btnR.removeAttribute("hidden")
        return
    }
    for(let k=0;k<cart.length;k++){
        if(i==cart[k]){
            cart.splice(k,1)
            localStorage.setItem("cart",JSON.stringify(cart))
            btnR.setAttribute("hidden",true)
            btnA.removeAttribute("hidden")
            return
        }
    }
    cart.push(i)
    localStorage.setItem("cart",JSON.stringify(cart))
    btnA.setAttribute("hidden",true)
    btnR.removeAttribute("hidden")
}

//კალათის გამოტანა
//იყენებს Promise-ბს.
////პირველი Promise-ს კალათის ინფორმაცია მოაქვს localStorage-დან ცარიელი კალათის შემთხვევაში აგდებს rejects, წინააღმდეგ შემთხვევაში reslove-ს არგუმენტად გადაცემული კალათის ელემენტების მასივით
//შემდეგ აიდებს ადარებს ინსტრუმენტების მასივის აიდებს და მსგავსი აიდის არსებობის შემთხვევაში გამოაქვს ელემენტი (resolve) წინააღმდეგ შემთხვევაში (reject) ამუშავებს შეცდომას (შლის არასწორ ინდექსს localStorage-დან)
function showCart(){
    cout = document.getElementById("cart-output")
    var emptyCart = new Promise(function(reslove,reject){
        var cart = JSON.parse(localStorage.getItem("cart"))
        if(cart == null){
            reject()
        }
        reslove(cart)
    })
    emptyCart.then(
        function(cart){
            for(let k=0;k<cart.length;k++){
                let cartPromise = new Promise(function(reslove,reject){
                    for(let i=0;i<inst.length;i++){
                        if(cart[k]==inst[i].id){                           
                            reslove(i)
                        }
                    }
                    reject(k)
                })
                cartPromise.then(
                    function(index){
                        //კალათის ელემენტის გამოტანა
                        createCartItem(index)
                    },
                    function(err){
                        //კალათში არასწორი ინდექსის ამოშლა
                        removeCartIndex(err)
                    }
                )
            }
        },
        function(){
            //კალათა ცარიელია
            return
        }
    )
}

//გამოაქვს კალათის ელემენტი
function createCartItem(i){
    var item = document.createElement("div")
    item.id = "cart"+i
    item.className = "item"
    var img = document.createElement("img")
    img.src = inst[i].img
    var p = document.createElement("p")
    var ka = document.createElement("span")
    ka.lang = "ka"
    ka.innerText = inst[i].nKa
    var en = document.createElement("span")
    en.lang = "en"
    en.innerText = inst[i].nEn
    if(localStorage.getItem("lang")=="ka"){
        en.setAttribute("hidden",true)
    }else{
        ka.setAttribute("hidden",true)
    }
    p.appendChild(ka)
    p.appendChild(en)
    var btn = document.createElement("button")
    var btnKa = document.createElement("span")
    btnKa.lang = "ka"
    btnKa.innerText = "ამოღება"
    var btnEn = document.createElement("span")
    btnEn.lang = "en"
    btnEn.innerText = "Remove"
    if(localStorage.getItem("lang")=="ka"){
        btnEn.setAttribute("hidden",true)
    }else{
        btnKa.setAttribute("hidden",true)
    }
    btn.appendChild(btnKa)
    btn.appendChild(btnEn)
    btn.style.color = "red"
    btn.onclick = function(){
        removeCartItem(i)
    }
    item.appendChild(img)
    item.appendChild(p)
    item.appendChild(btn)
    cout.appendChild(item)
}

//შლის ინდექსს კალათიდან
function removeCartIndex(i){
    console.log(i)
    var cart = JSON.parse(localStorage.getItem("cart"))
    for(let k=0;k<cart.length;k++){
        if(cart[k]==i){
            cart.splice(k,1)
        }
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}

//შლის კალათის ელემენტს და შესაბამის ინდექსს
function removeCartItem(i){
    var item = document.getElementById("cart"+i)
    item.remove()
    removeCartIndex(i)
}