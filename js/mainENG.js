var about_me = `
    <div id="main-content">
        <div id="current-content">
            <h1>About Me</h1>

            <p>Hi! My name is Piotr Kucia and i'm Applied Computer Science student on AGH University of Science and Technology in Kraków, Poland. I'm also a graduate of 1st degree studies of Materials Engineering on the same university. Around 1,5 year ago I commenced to learn programming, and I learned such technologies as C++, Java, HTML/CSS, JavaScript, PHP and MySQL. I'm a type of autodidact. I'm using books, documentations, online courses and internet forums while leraning. </p>
            
            <p>Currently I'm looking for oportunity to improve by an internship. I'm a person who likes to have his goals set and I persistently pursue them. I'm able to totally give myself into my work. I think that in realization of goals the most important things are consistency and persistence. </p>

            <p>In my spare-time I like to play the guitar, do sports, read books and watch movies. If you have any questions check the Contact section and feel free to ask! Have a good day! </p>

        </div>
        <div id="current-aside">
            <img src="img/info.jpg"/>
        </div>
        <div style="clear: both;"></div>
    </div>
`;

var offer = `
    <div id="main-content">
        <div id="skills-content">
            <h1>What can I offer?</h1>

            <p class="p1">I started my programming course with C++. This language allowed me to learn the general rules of programming and the Object Oriented Programming. Then I started to learn Java technology. I learned to write programs with Graphic User Interface using Swing and JavaFX libraries. Thanks to Java I also met the most common design patterns and GIT version control system. Currently I'm giving myself mostly to web technologies such as HTML, CSS, JavaScript, PHP and MySQL. If You are interested in my projects, check <a href="https://github.com/piotrkucia95" target="_blank">my GitHub profile</a>. My Skills:</p>
            
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
                <div style="clear: both;"></div>
            </div>

        </div>
    </div>
`;

var cv = `
    <div id="main-content">
        <div id="cv-container">
            <iframe src="CVENG.pdf" width="70%" style="border: none;"></iframe>
        </div>
    </div>
`;

var contact = `
    <div id="main-content">
        
        <div id="contact-h1"><h1>Contact Me!</h1></div>
        
        
        <div id="contact-form">
            <form action="e-mailENG.php" method="post">

                <input id="imie" type="text" name="imie" placeholder="Name" onfocus="this.placeholder=''" onblur="this.placeholder='Name'" required />
                <input id="email" type="email" name="email" placeholder="E-mail" onfocus="this.placeholder=''" onblur="this.placeholder='E-mail'" required />
                <textarea id="msg" type="text" name="message" placeholder="Message" onfocus="this.placeholder=''" onblur="this.placeholder='Message'" required/>
                <input type="submit" value="Send message" />
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
        <div style="clear: both;"></div>
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
        $("#main-content").replaceWith('<div id="main-content" style="padding-left: 5%;"><h1>My CV</h1><p style="margin-top: 50px;"><a href="CVENG.pdf" download>Click here to download CV.</a><p></div>');
        
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
