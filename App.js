import './App.css';


function App() {

	return (
        <div>
            <div className="fbandword">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="Facebook" width="400" height="200" className="sekil"/>       
            <h2 className="solsoz">
                Connect with friends and the world<br/> around you on Facebook.
            </h2> 
         </div>

        <form action="" className="frm">
            <input type="email" placeholder="Email or phone number" className="mail"/><br/>
            <input type="password" placeholder="Password" className="parol"/><br/>
            <input type="submit" value="Log In" className="daxil"/><br/>
            <div className="frgt">
                <a href="" className="unutmaq">Forgot password?</a><br/>
            </div>

            <br/>
            <button type="submit" className="tezehsb">Create new account</button><br/>
        </form>

        <div className="yenipage">
            <a href="" className="sh"><p><b>Create a Page</b> for a celebrity, brand or business.</p></a>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="asagi">
            <br/>
            
            <ol>
                <li>English (US)</li>
                <li><a href="#">Azərbaycan dili</a></li>
                <li><a href="#">Türkçe</a></li>
                <li><a href="#">Русский</a></li>
                <li><a href="#">العربية</a></li>
                <li><a href="#">Deutsch</a></li>
                <li><a href="#">Français (France)</a></li>
                <li><a href="#">فارسی</a></li>
                <li><a href="#">ქართული</a></li>
                <li><a href="#">Español</a></li>
                <li><a href="#">Português (Brasil)</a></li>
                <li><input type="submit" value="+"/></li>
            </ol>
            <hr/>
            <ol>
                <li><a href="#">Sign up</a></li> 
                <li><a href="#">Log In</a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">Facebook Life</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Meta Pay</a></li>
                <li><a href="#">Oculus</a></li>
                <li><a href="#">Portal</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Bulletin</a></li>
                <li><a href="#">Local</a></li>
                <li><a href="#">Fundraisers</a></li>

                <li><a href="#">Services</a></li>
                <li><a href="#">Voting Information Center</a></li>
                <li><a href="#">Create Ad</a></li>
                <li><a href="#">Create Page</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Ad choices</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Help</a></li>
            </ol><br/>
            <small className="meta">Meta © 2022</small>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </div>

      
    );
}

export default App;
