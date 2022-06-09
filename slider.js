//სლაიდერის გლობალური ცვლადები
imgs = []
for(let i=0;i<5;i++){
    imgs[i] = "images/slider/"+i+".jpg"
}
//0-პიანინო,1-გიტარა,2-სიმებიანი,3-დასარტყამი,4-ჩასაბერი

titlesKa = ["კლავიშიანი ინსტრუმენტები","გიტარები","სიმებიან-ხემიანი ინსტრუმენტები","დასარტყამები","ჩასაბერი ინსტრუმენტები"]
titlesEn = ["Keyboards","Guitars","Bowed string instruments","Percussions","Wood instruments"]

txtsKa = ["ფორტეპიანო — კლავიშებიან-სიმებიანი ინსტრუმენტების კრებითი სახელი, რომელიც მოიცავს მუსიკალურ ინსტრუმენტებს — როიალს და პიანინოს. თანამედროვე ფორტეპიანომ ისტორიული განვითარების დიდი გზა განვლო უძველესი ერთსიმიანი „მონოქორდიდან“. დინამიკურმა და ტემბრულმა შესაძლებლობებმა მრავალხმიანი ფორტეპიანო ერთ-ერთ წამყვან სოლო და თანმხლებ ინსტრუმენტად აქცია.",
"გიტარა — სიმებიანი ჩამოსაკრავი მუსიკალური საკრავი. ძირითადად იკვრება თითებით ან მედიატორით. ძირითადად იგი არსებობს ექვს, შვიდ და თორმეტსიმიანი. ტრადიციულად, გიტარა მზადდება სხვადასხვა ხისაგან, ხოლო სიმები ცხოველების ნაწლავებისაგან. თუმცა სიმების ტრადიცია არ არის შენარჩუნებული, და თანამედროვე სიმები არის ნეილონის და ფოლადის. ზოგიერთი თანამედროვე გიტარა დამზადებულია პოლიკარბონატით. არსებობს გიტარის ძირითადი ორი ოჯახი: აკუსტიკური და ელექტრო. გიტარა ვოკალის თანხლებისთვისაა მოსახერხებელი.",
"ვიოლინო —არის  სიმებიან ხემიანი საკრავი. ის ყველაზე პატარა და წვრილხმიანია ხემიან ინსტრუმენტებში. მას აქვს 4 სიმი . ალტი -  ოთხსიმიანი ხემიანი საკრავი, იგი ვიოლინოზე დიდია დამასზე დაბალი დიაპაზონი აქვს .  ჩელო, იგივე ვიოლონჩელი —არის  ხემიანი სიმებიანი მუსიკალური ინსტრუმენტი. მას აქვს 4 სიმი.. ჩელო გამოიყენება, როგორც სოლო მუსიკალური ინსტრუმენტი,-კამერულ ანსამბლებში, სიმებიან ორკესტრებში და სხვადასხვა სიმფონიურ ორკესტრში, ის არის სიდიდით  მეორე სიმებიანი ინსტრუმენტი თანამედროვე სიმფონიურ ორკესტრებში, კონტრაბასის შემდეგ.   კონტრაბასი - სიმებიან-ხემიანი მუსიკალური საკრავია. ვიოლინოს ოჯახში ყველაზე დიდი ზომისაა ,მას  დაბალი ჟღერადობა აქვს. მას აქვს 4 სიმი",
"დასარტყმელი საკრავები — მუსიკალური საკრავები, რომლებსაც ხელის, ჯოხის ან ბურთისებრი, თავზე ქეჩაგადაკრული ორი მსხვილი ხის მონაცვლეობით ან ერთდროულად დარტყმით აჟღერებენ. ამზადებენ ქვის, თიხის, ხის, ტყავის, ბრინჯაოს, სპილენძისა და ვერცხლისაგან. დასარტყმელი საკრავები ორგვარია: გარკვეული სიმაღლის ბგერის მქონე და საკრავები, რომელთაც გარკვეული სიმაღლის ბგერა არ გააჩნიათ. დასარტყმელი საკრავების უმეტესობა საანსამბლოა, იყენებენ სიმფონიურ ორკესტრებშიც. დასარტყამ საკრავებს რიტმულ საკრავებსაც უწოდებენ; მათი მთავარი დანიშნულება მუსიკალური ნაწარმოების მეტრ-რიტმის გამახვილება, მისი ნაირსახეობით წარმოდგენაა.",
"ჩასაბერი ინსტრუმენტები - ეს არის მილები, რომლებიც შეიძლება დამზადდეს ხის, ლითონის ან სხვა მასალისგან. მათ აქვთ სხვადასხვა ფორმა და გამოსცემენ სხვადასხვა ტემბრის მუსიკალურ ბგერებს, რომლებიც ამოღებულია ჰაერის ნაკადის საშუალებით. ჩასაბერი ინსტრუმენტის „ხმის“ ტემბრი დამოკიდებულია მის ზომაზე. რაც უფრო დიდია, მით მეტი ჰაერი გადის მასში, საიდანაც მისი რხევის სიხშირე უფრო დაბალია, ხოლო გამოშვებული ხმა დაბალი."]

txtsEn = ["The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material (modern hammers are covered with dense wool felt; some early pianos used leather). It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings. It was invented in Italy by Bartolomeo Cristofori around the year 1700.",
"The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may also be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier.",
"The string family is the largest family in the orchestra, accounting for over half of the total number of musicians on stage. The string instruments all have carved, hollow, wooden bodies with four strings running from top to bottom. The instruments have basically the same shape but vary in size, from the smaller VIOLINS and VIOLAS, which are played by being held firmly under the chin and either bowed or plucked, to the larger CELLOS and BASSES, which stand on the floor, supported by a long rod called an end pin. The cello is always played in a seated position, while the bass is so large that a musician must stand or sit on a very high stool in order to play it. These stringed instruments developed from an older instrument called the viol, which had six strings.",
"A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater including attached or enclosed beaters or rattles struck, scraped or rubbed by hand or struck against another similar instrument. Excluding zoomusicological instruments and the human voice, the percussion family is believed to include the oldest musical instruments.",
"A wind instrument is a musical instrument that contains some type of resonator (usually a tube) in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator. The pitch of the vibration is determined by the length of the tube and by manual modifications of the effective length of the vibrating column of air. In the case of some wind instruments, sound is produced by blowing through a reed; others require buzzing into a metal mouthpiece, while yet others require the player to blow into a hole at an edge, which splits the air column and creates the sound."]

background = document.getElementById("slider-content")
titleKa = document.querySelector('#slider-title span[lang="ka"]')
titleEn = document.querySelector('#slider-title span[lang="en"]')
textKa = document.querySelector('#slider-text span[lang="ka"]')
textEn = document.querySelector('#slider-text span[lang="en"]')

//საწყისი ინიციალიზაცია
//შემთხვევითი საწყისი სლაიდი
index = Math.floor(Math.random()*5)
setSlide(index)

function setSlide(i){
    background.style.backgroundImage = "url("+"'"+imgs[i]+"'"+")"
    titleKa.innerText = titlesKa[i]
    titleEn.innerText = titlesEn[i]
    textKa.innerText = txtsKa[i]
    textEn.innerText = txtsEn[i]
}

function slideLeft(){
    if(index==0){
        index=4
    }else{
        index--
    }
    setSlide(index)
}
function slideRight(){
    if(index==4){
        index=0
    }else{
        index++
    }
    setSlide(index)
}