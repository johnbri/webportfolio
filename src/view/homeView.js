import '../css/Home.scss';

/*
function myFunction() {
        var x = document.getElementById("navBar");
        if (x.className === "navbar") {
          x.className += " responsive";
        } else {
          x.className = "navbar";
        }
      }*/

const homeView= () =>
<div className="app">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div class="navcontainer">
        <div class="navbar" id="navBar">
        <button class="name" onClick={() => document.location.reload(false)}> JOHN BRINK. </button>

        <a role="button" href="#about" >About me</a> 
        <a role="button" href="#ProjectsCards">My work</a> 
        <a class="contact" role="button" href = "mailto: john-brink@hotmail.com">Contact me</a>
        {/*<a href="javascript:void(0);" class="icon" onClick={myFunction()}>
            <i class="fa fa-bars"></i>
    </a>*/}
        </div>
    </div>
        
    <header className="Header" id="about">
        <div className="headerCard">
            <div class="titleContainer">
                <h3 class="title">
                    I'm a Product Designer.
                </h3>
            </div>
            
            <div class="headerText">
                
                
                <h5>
                    Hey there, I'm John. I'm currently a MSc student in Interactive 
                    Media Technology at KTH Royal institue of Technology, Stockholm. 
                    Webdesign is my jam, but more importantly, I enjoy building awesome user experiences.
                    Let's have a chat!
                </h5>
                
                <img class="johnBlob" src="john.png" alt=""></img>
            </div>
        
            <div class="buttons">
                    <a role="button" href = "mailto: john-brink@hotmail.com">CONTACT ME</a>
                    <a class="download" role="button" href="/images/myw3schoolsimage.jpg" download>DOWNLOAD CV</a>
            </div>
        </div>
        
    </header>

    <div class="ProjectsCards" id="ProjectsCards">
        <div class="titleContainer">
            <h4 class="title">My work</h4>
            <hr></hr>
        </div>
        
        <div class="UniquizCard">
            
            <span id="label1"></span>
            <div class="card">
                <div class="pics">
                    <img class="login" src="login.png" alt=""></img>
                    <img src="ingame.png" alt=""></img>
                </div>
                <div class="text">
                    <h2 class="card-title">Uniquiz</h2>
                    <p class="card-text">Uniquiz is a web-based music quiz that lets you challenge your friends with music that you all have heard before. When creating a quiz, the host selects how many tracks should be played as well as how long each track should be played. By analyzing Spotify playlists the application then picks out random songs that all players in the quiz have in common. Like any other quiz, the player with the best score wins! The application were made in React using Javascript (JSX), HTML5, CSS. Furthermore, it uses Spotify API calls to analyze playlists, and Firebase to handle accounts.</p>
                    
                </div>
            </div>
        </div>
        
        <div class="NGFCard">
            <span id="label1"></span>
            <div class="card">
                <div class="pics">
                    <img class="login" src="ngf.png" alt=""></img>
                </div>
                <div class="text">
                    <h2 class="card-title">NaturGlass-fabriken</h2>
                    <p class="card-text">NaturGlass-fabriken is a website design prototype made in Figma for a made-up icecream business. The design is based on a design brief which featured keywords like "natural ingredients", "flowery", "tasty", "happy", "ecological", and "bright". Features of the site were based both on my own assumptions of user needs, as well as must-have features from the design brief.</p>
                    
                </div>
            </div>
        </div>

        <div class="ThaiboatCard">
            <span id="label1"></span>
            <div class="card">
                <div class="pics">
                    <img src="tb.jpg" alt=""></img>
                </div>
                <div class="text">
                    <h2 class="card-title">Thaiboat 2.0</h2>
                    <p class="card-text">Thaiboat 2.0 is a high-fidelty prototype remake of the website of the restaurant Thaiboat, and was made using the free version of Wordpress as part of a course in web management. Besides a new design, the website features changes to the site's information architecture based on reflections about users needs and requirements. </p>
                    
                </div>
            </div>
        </div>

        <div class="MirowCard">
            <span id="label1"></span>
            <div class="card">
                <div class="pics">
                    <video poster="placeholder.png" controls>
                        <source src="mirow.mp4"></source>
                    </video>
                </div>
                <div class="text">
                    <h2 class="card-title">Mirow</h2>
                    <p class="card-text"> Mirow is a concept of a smart mirror that creates sponteanous opportunities for interaction between friends.
                     This concept was based on a deisgn brief that proposed that introversion is the new normal in the future, and people might need support in this environment.
                     The concept creation followed the iterative double diamond process, and low-fi as well as high-fi prototype were created using classic paper and pen and Figma.</p>
                   
                </div>
            </div>
        </div>
    </div>
</div>;



export {homeView};