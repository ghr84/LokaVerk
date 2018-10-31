var myDiv = document.querySelector("#container");
var svar_1 = document.querySelector("#svar_1")
var svar_2 = document.querySelector("#svar_2")
var svar_3 = document.querySelector("#svar_3")

var content = [
    {   
        label_1: 'Valletta',
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
        sp: 'Hver lét hafa eftir sér í viðtali: "We are more popular then Jesus now"',
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
var outcome = function (message){
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
    message = '<p class="message">Ýttu á hnappinn til að prófa aftur..</p>';
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
        <div class="btn-box">
            <button><a href="index.html">Snertu mig!</a></button>
        </div>
    </div>
` 
}
btn.onclick = outcome; // event 



