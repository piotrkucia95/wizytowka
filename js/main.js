var about_me = `
    <div id="main-content">
        <div id="current-content">
            <h1>Poznajmy się!</h1>

            <p>Cześć! Nazywam się Piotr Kucia i jestem studentem Informatyki Stosowanej na Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie. Jednocześnie jestem absolwentem studiów inżynierskich na tej uczelni, na kierunku Inżynieria Materiałowa. Około 1,5 roku temu rozpocząłem intensywną i konsekwentną naukę programowania, ucząc się takich technologii, jak C++, Java, HTML/CSS, JavaScript, PHP, czy MySQL. Jestem typem samouka. Źródłem mojej wiedzy są książki, dokumentacje, kursy internetowe oraz fora tematyczne. </p>
            
            <p>Aktualnie poszukuję możliwości dalszego rozwoju, poprzez staże i praktyki. Jestem osobą ułożoną, która lubi mieć jasno postawione cele i uparcie do nich dąży. Potrafię całkowicie oddać się powierzonemu mi zadaniu. Uważam, że w realizacji celów najważniejsza jest konsekwencja oraz wytrwałość. </p>

            <p>W wolnym czasie gram na gitarze, uprawiam sport, czytam książki lub oglądam filmy. Jeżeli masz do mnie jakieś pytanie, zajrzyj do sekcji Kontakt. Pozdrawiam! </p>

        </div>
        <div id="current-aside">
            <img src="img/info.jpg"/>
        </div>
        <div class="clear"></div>
    </div>
`;

var offer = `
    <div id="main-content">
        <div id="skills-content">
            <h1>Co oferuję?</h1>

            <p class="p1">Moją przygodę z programowaniem zacząłem od nauki technologii C++. Język ten pozwolił mi na poznanie ogólnej logiki programowania oraz wprowadził mnie do programowania obiektowego. Następnie poznałem technologię Java. W tym języku nauczyłem się pisać obiektowe programy posiadające graficzny interfejs użytkownika przy wykorzystaniu biblioteki Swing, czy JavaFX. Java pozwoliła mi również na poznanie podstawowych wzorców projektowych oraz systemu kontroli wersji GIT.  Obecnie najwięcej uwagi przykładam do opanowania technologii webowych, takich jak HTML, CSS, JavaScript, PHP czy MySQL. Jeżeli interesują Cię wykonane przeze mnie projekty zapraszam na <a href="https://github.com/piotrkucia95" target="_blank">mój profil GitHub</a>. Umiejętności:</p>
            
            <div id="skill-box">

                <div class="skill" id="skill1">
                    <i class="fab fa-java"></i>
                    <p>Java</p>
                </div>
                <div class="skill" id="skill2">
                    <h3>C++</h3>
                    <p>C/C++</p>
                </div>
                <div class="skill" id="skill3">
                    <i class="fab fa-html5"></i>
                    <p>HTML 5</p>
                </div>
                <div class="skill" id="skill4">
                    <i class="fab fa-css3"></i>
                    <p>CSS 3</p>
                </div>
                <div class="skill" id="skill5">
                    <i class="fab fa-js-square"></i>
                    <p>JavaScript</p>
                </div>
                <div class="skill" id="skill6">
                    <i class="fab fa-php"></i>
                    <p>PHP</p>
                </div>
                <div class="skill" id="skill7">
                    <i class="fab fa-git"></i>
                    <p>GIT</p>
                </div>
                <div class="clear"></div>
            </div>

        </div>
    </div>
`;

var cv = `
    <div id="main-content">
        <div id="cv-container">
            <iframe src="CV.pdf" width="70%" style="border: none;"></iframe>
        </div>
    </div>
`;

var contact = `
    <div id="main-content">
        
        <h1>Skontaktuj się ze mną!</h1>
        
        <div id="contact-form">
            <form action="e-mail.php" method="post">

                <input id="imie" type="text" name="imie" placeholder="Imię i nazwisko" onfocus="this.placeholder=''" onblur="this.placeholder='Imię i nazwisko'" required />
                <input id="email" type="email" name="email" placeholder="Twój e-mail" onfocus="this.placeholder=''" onblur="this.placeholder='Twój e-mail'" required />
                <textarea id="msg" type="text" name="message" placeholder="Treść wiadomości" onfocus="this.placeholder=''" onblur="this.placeholder='Treść wiadomości'" required/>
                <input type="submit" value="Wyślij wiadomość" />
            </form>
        </div>


        <div id="contact-main">
            
            <p><i class="fas fa-phone"></i> +48 798 788 237</p>
            <p><i class="far fa-envelope"></i> piotrkucia95@gmail.com</p>
            <p><a href="https://www.facebook.com/piotrek.kucia" target="_blank"><i class="fab fa-facebook-square"></i> facebook.com/piotrek.kucia</p></a>
            <p><a href="https://www.instagram.com/kuciapp" target="_blank"><i class="fab fa-instagram"></i> instagram.com/kuciapp/</p></a>
            <p><a href="https://github.com/piotrkucia95" target="_blank"><i class="fab fa-github"></i> github.com/piotrkucia95</p></a>
            <p><a href="https://www.linkedin.com/in/piotrkucia95" target="_blank"><i class="fab fa-linkedin"></i> linkedin.com/in/piotrkucia95/</p></a>
        
        </div>
        <div class="clear"></div>
    </div>
`;


//----------------------------------------------------------------------------------------


function showAboutMe() {
    
    $("#main-content").fadeOut(300);
    
    setTimeout(function() {
        $("#main-content").replaceWith(about_me);   
    }, 300);

    $("#main-content").fadeIn(300);
    $(".current").attr('class', '');
    $("#about-me").attr('class', 'current');
}

function showOffer() {
    
    $("#main-content").fadeOut(300);
    
    setTimeout(function() {
        $("#main-content").replaceWith(offer);
    }, 300);

    $("#main-content").fadeIn(300);    
    $(".current").attr('class', '');
    $("#offer").attr('class', 'current');     
}

function showCV() {
    
    $("#main-content").fadeOut(300);
    
    if(screen.width > 1024) {
        setTimeout(function() {
            $("#main-content").replaceWith(cv);
        }, 300);

        $("#main-content").fadeIn(300);    
        $(".current").attr('class', '');
        $("#cv").attr('class', 'current');
    
    } else {
        setTimeout(function() {
            $("#main-content").replaceWith('<div id="main-content" style="padding-left: 5%;"><h1>Moje CV</h1><p style="margin-top:50px;"><a href="CV.pdf" download>Kliknij tutaj, aby pobrać CV.</a><p></div>');
        }, 300);
        
        $("#main-content").fadeIn(300);    
        $(".current").attr('class', '');
        $("#cv").attr('class', 'current');
    }
}

function showContact() {
    
    $("#main-content").fadeOut(300);
    
    setTimeout(function() {
        $("#main-content").replaceWith(contact);
    }, 300);

    $("#main-content").fadeIn(300);  
    $(".current").attr('class', '');
    $("#contact").attr('class', 'current');
        
}

function sendMessage() {
    
    $("#contact-form").replaceWith(`
        <div id="contact-form">

            <h3>Wysłano wiadomość!</h3>

        </div>
    `);
        
}


//-----------------------------------------------------------------------------------------------------


$("#about-me").on("click", showAboutMe);
$("#offer").on("click", showOffer);
$("#cv").on("click", showCV);
$("#contact").on("click", showContact);
