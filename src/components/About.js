import './About.css';

function About() {
    return (
    <div class="about-body">
        <div class="about-section">
            <h1>About TechHelp</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.</p>
        </div>

        <h2 id="team">TechHelp Team</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src="image1.png" alt="Money Heist Berlin"></img>
                    <div class="container-photos">
                        <h2>Berlin</h2>
                        <p class="title">Professional and Charming Psychopath</p>
                        <p>Random stuff about this person</p>
                        <p>email@email.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src="image2.png" alt="Money Heist Denver"></img>
                    <div class="container-photos">
                        <h2>Denver</h2>
                        <p class="title">Sensitive Hot-head</p>
                        <p>Random stuff about this person</p>
                        <p>email@email.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src="image3.png" alt="Money Heist Professor"></img>
                    <div class="container-photos">
                        <h2>Professor</h2>
                        <p class="title">Mastermind</p>
                        <p>Random stuff about this person</p>
                        <p>email@email.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;