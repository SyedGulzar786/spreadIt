import "./style.scss"
import LOGO from "../../assets/Images/SpreadItLogo.png"
import { MdOutlineTextFields } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { useState } from "react";

const HomePage = () => {
  const [type, setType] = useState("text")
  return (
    <div>
      <div className="container ps-5 pe-5">
        <div className="heade-navbar row align-items-center">
          <div className="logoDiv col-6 d-flex justify-content-">
            <img src={LOGO} alt="logo" className="logo" />
          </div>
          <div className="col-6">
            <ul className="tabs d-flex justify-content-end list-unstyled gap-5">
              <li className="tab">How It Works</li>
              <li className="tab">Download</li>
              <li className="tab">Upgrade</li>
              <li className="tab">Feedback</li>
              <a className="text-decoration-none webTab">Login/Register</a>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ps-5 pe-5 d-flex justify-content-center">
        <div className="mainCard d-flex">
          <div className="cardSidebar pt-4">
            <div onClick={() => setType("text")} className={`p-4 ${type === "text" ? "activeTab" : "sleptTab"}`} >
              <MdOutlineTextFields size={40} className={`${type === "text" ? "activeIcon" : "sleptIcon"}`} />
            </div>
            <div onClick={() => setType("file")} className={`p-4 ${type === "file" ? "activeTab" : "sleptTab"}`}>
              <FaRegFileAlt size={40} className={`${type === "file" ? "activeIcon" : "sleptIcon"}`} />
            </div>
          </div>
          <div className="cardContainer p-5">
            {
              type === "text"
                ? <div className="textSection">
                  <h1 className="m-0">Text</h1>
                </div>
                : <div className="fileSection">
                  <h1 className="m-0">File</h1>
                </div>
            }
          </div>
        </div>
      </div>
    </div>

  )
};

export default HomePage;