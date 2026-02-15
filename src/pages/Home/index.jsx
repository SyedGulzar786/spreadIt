import "./style.scss"
import LOGO from "../../assets/Images/SpreadItLogo.png"
const HomePage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logoDiv">
          <img src={LOGO} alt="logo" className="logo" />
        </div>
        <div>
          <ul className="tabs">
            <li className="tab">How It Works</li>
            <li className="tab">Download</li>
            <li className="tab">Upgrade</li>
            <li className="tab">Feedback</li>
            <li className="tab">Login/Register</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default HomePage;