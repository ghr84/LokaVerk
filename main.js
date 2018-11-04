var myDiv = document.querySelector("#container");
var svar_1 = document.querySelector("#svar_1")
var svar_2 = document.querySelector("#svar_2")
var svar_3 = document.querySelector("#svar_3")

var content = [                         // varable sem inniheldur arrays 
    {                                   // Objects inn í arrays
        label_1: 'Valletta',            // properties inn í object
        label_2: 'Sliema',
        label_3: 'Gozo',
        title: 'Höfuðborgir',
        sp: 'Hver er höfuðborg Möltu?',
        img: 'img/capitals.png',        
    },
    {   
        label_1: 'Edward Norton',
        label_2: 'Kevin Spacey',
        label_3: 'Lou Daimond Phillips',
        title: 'Bíómyndir',
        sp: 'Hver lék raðmorðingjann í "Seven"?',
        img: 'img/movies.jpg',        
    },
    {   
        label_1: 'Barbra Streisand',
        label_2: 'Adele',
        label_3: 'Bob Dylan',
        title: 'Tónlist',
        sp: 'Hver samdi lagið: "To make you feel my love"?',
        img: 'img/music.jpg',        
    },
    {   
        label_1: 'john Lennon',
        label_2: 'Mel B',
        label_3: 'Freddie Mercury',
        title: 'Frægt fólk',
        sp: 'Hver lét hafa eftir sér í viðtali: "We are more popular then Jesus now"?',
        img: 'img/celebs.jpg',        
    },
]

var content_2 = [
    {   
        label_1: 'Canberra',
        label_2: 'Sidney',
        label_3: 'Melbourne',
        title: 'Höfuðborgir',
        sp: 'Hver er höfuðborg Ástralíu?',
        img: 'img/capitals.png',        
    },
    {   
        label_1: 'Martin Scorsese',
        label_2: 'Francis Ford Coppola',
        label_3: 'Roberto Benigni',
        title: 'Bíómyndir',
        sp: 'Hver leikstýrði "The Godfather Part:2"?',
        img: 'img/movies.jpg',        
    },
    {   
        label_1: 'Sgt Peppers lonely heart club band - Beatles',
        label_2: 'Dark side of the moon - Pink Floyd',
        label_3: 'Thriller - Micheal Jackson',
        title: 'Tónlist',
        sp: 'Hver er mest selda plata allra tíma?',
        img: 'img/music.jpg',        
    },
    {   
        label_1: 'Elvis Presley',
        label_2: 'Frank Sinatra',
        label_3: 'James Brown',
        title: 'Frægt fólk',
        sp: 'Hver lagði það í vana sinn að gefa fólki Cadilac við minnsta tilefni?"',
        img: 'img/celebs.jpg',        
    },
]
alert('Hæ! Ég ætla að leggja fyrir þig 4 spurningar. Rétt svar gefur 5 stig og rangt svar 0 stig, gangi þér vel!')
for (var i = 0; i < content.length; i++ ) {   
myDiv.innerHTML +=

`       <div class="card">
            <img src="${content[i].img}"/>
            <p>${content[i].sp}</p>
            <label>${content[i].label_1}</label>
            <input id="svar_1${i}" type="radio" name="sp1${i}" value="${content.label_1}"/>
            <label>${content[i].label_2}</label>
            <input id="svar_2${i}" type="radio" name="sp1${i}" value="${content.label_2}"/>
            <label>${content[i].label_3}</label>
            <input id="svar_3${i}" type="radio" name="sp1${i}" value="${content.label_3}"/>
        </div>
        `
}

myDiv.innerHTML += `
    <div class="button-box">
        <button id="btn">Loka Svar!?</button> 
    </div>
`

var stig = 0;
var btn = document.querySelector("#btn");

var outcome = function (message, message_2){
    var svar1 = document.getElementById("svar_10");  // Það eru 4 spurningar og 3 svar valmöguleikar á hverri spurningu. 
    var svar2 = document.getElementById("svar_21");  // (<input id="svar_1"><input id="svar_2"><input id="svar_3">)   
    var svar3 = document.getElementById("svar_32");  // Sem gefur okkur 12 svarmöguleika í heildina. Og til þess að hver 
    var svar4 = document.getElementById("svar_13");  // spurning fá sér ID þegar og eftir að for loopan keyrir gefum við 
    if (svar1.checked == true) {                     // hverri spurningu var'ið i(for(var i = 0; i < content.length; i++))   
        stig += 5;                                   // ->(<input id="svar_1${i}"><input id="svar_2${i}"><input id="svar_3${i}">)
    }                                                // og í kjölfarið verður id-ið þeirra svar_10, svar_20, svar_30 og í næsta 
    if (svar2.checked == true) {                     // cardi svar_11, svar_21, svar_31 - svar_12, svar_22, svar_32 ogsfr
        stig += 5;                                   // Svo finnum við réttu svörin og búum til varable fyrir hvert rétt svar
    }                                                // og þegar ýtt er á hnappinn keyrir functionið og ef var = svar1 er jafnt og true 
    if (svar3.checked == true) {                     // og er checked þá bætast við 5 stig við var = stig sem er svo sýnt í gegnum html<h2>
        stig += 5;
    }
    if (svar4.checked == true) {
        stig += 5;
    }
    message = '<p class="message">Ýttu á hnappinn til að prófa aftur..</p>';  //parameters í outcome function .. eða varables sem innihalda strengi sem 
    message_2 = '<p class="message">Viltu fá nýjar spurningar?</p>';          //sýna sig þegar outcome keyrist og notandinn er færður á aðra síðu sem sýnir stigafjölda .. 
    myDiv.innerHTML = `                                                       
    <div class="counter">
        <div class="header-box">
            <h1>Þú fékkst ..</h1>
        </div>
        <div class="stig-box">
            <p class="stig">${stig}  </p><h2>Stig</h2>
        </div>
        <div class="msg-box">
            <p class="message">${message}</p>
        </div>
        <div class="btn-holder">
            <button><a href="index.html">Snertu mig</a></button>
        </div>
        <div class="msg-box_2">
            <p class="message">${message_2}</p>
        </div>
        <div class="btn-holder_2">
            <button id="btn_2">Snertu mig aftur</button>                        
        </div>
    </div>     
`                                                                
var btn_2 = document.querySelector("#btn_2");               //btn_2 loadar content2
var newFunction = function(){
    myDiv.innerHTML = ''
    for (var i = 0; i < content_2.length; i++ ) {  
        myDiv.innerHTML += `
        <div class="card">
            <img src="${content_2[i].img}"/>
            <p>${content_2[i].sp}</p>
            <label>${content_2[i].label_1}</label>
            <input id="svar_1${i}" type="radio" name="sp1${i}" value="${content_2.label_1}"/>
            <label>${content_2[i].label_2}</label>
            <input id="svar_2${i}" type="radio" name="sp1${i}" value="${content_2.label_2}"/>
            <label>${content_2[i].label_3}</label>
            <input id="svar_3${i}" type="radio" name="sp1${i}" value="${content_2.label_3}"/>
        </div>
                `
        }
        
        myDiv.innerHTML += `
            <div class="button-box">
                <button id="btn_3">Loka Svar!?</button> 
            </div>
        `
        var btn_3 = document.querySelector("#btn_3");
        btn_3.onclick = outcome;
}

btn_2.onclick = newFunction; //event

}

btn.onclick = outcome; // event




// //////////////////////////



//Byrjun á pælingu hjá Smára 

// var newFunction = function(a){
//     myDiv.innerHTML = ''
//     for (var i = 0; i < a.length; i++ ) {  
//         myDiv.innerHTML += `
//         <div class="card">
//             <img src="${a[i].img}"/>
//             <p>${a[i].sp}</p>
//             <label>${a[i].label_1}</label>
//             <input id="svar_1${i}" type="radio" name="sp1${i}" value="${a.label_1}"/>
//             <label>${a[i].label_2}</label>
//             <input id="svar_2${i}" type="radio" name="sp1${i}" value="${a.label_2}"/>
//             <label>${a[i].label_3}</label>
//             <input id="svar_3${i}" type="radio" name="sp1${i}" value="${a.label_3}"/>
//         </div>
//                 `
//         }
        
//         myDiv.innerHTML += `
//             <div class="button-box">
//                 <button id="btn_3">Loka Svar!?</button> 
//             </div>
//         `
//         var btn_3 = document.querySelector("#btn_3");
//         btn_3.onclick = outcome;
// }
    