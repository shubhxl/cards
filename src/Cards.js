import React, { Component } from "react";
import "./App.css";
import share from "./share.svg";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

class Cards extends Component {
  dropDetails() {
    let detail = document.getElementById("drop");

    detail.style.display = detail.style.display === "none" ? "block" : "none";
    // if (detail.style.display === "none") {
    //   detail.style.display = "block";
    // } else {
    //   detail.style.display = "none";
    // }
  }

  shareCard() {
    let btn = document.getElementById("share-btn");
    let sbtn = document.getElementById("sbtn");

    btn.style.display = "block";
    sbtn.style.display = "none";
  }

  render() {
    return (
      <div className="card mb-3 jj">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.jing.fm/clipimg/detail/8-84558_square-objects-clipart-3-d-shapes-cube.png"
              alt="..."
              className="img-fluid ii"
            />

            <button
              type="button"
              className="btn-sm btn-info btt"
              onClick={this.dropDetails}
            >
              <small>More Details </small>
            </button>
            <button type="button" className="btn-sm btn-info">
              <small> Book Now </small>
            </button>
          </div>
          <div className="col-md-1"> </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Course Card</h5>
              <b> Rs. 8,888 for 88 sessions</b> <br />
              <span className="card-text">
                <small className="text-muted">(Rs. XX / session)</small>
              </span>
              <br /> <br />
              <span>
                By : Content Partner <br />
                Age : 2 to 5 years old <br />
                30 mintes, twice a week <br />
                Online, Center 1, Center 2 <br />
                Skill1 | Skill2| Skill3
              </span>{" "}
              <br /> <br />
              <div id="share-btn">
                <FacebookShareButton
                  url={"/https://react-cards-demo.herokuapp.com/card"}
                  quote={"Kam bol be"}
                >
                  <FacebookIcon size={30} />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={"https://curioboat.com"}
                  title={"Shubham is great"}
                >
                  <WhatsappIcon size={30} />
                </WhatsappShareButton>
                <TwitterShareButton url={"https://spaceboat.in"}>
                  <TwitterIcon size={30} />
                </TwitterShareButton>
                <LinkedinShareButton url={"https://curioboat.com"}>
                  <LinkedinIcon size={30} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
          <div className="col-md-1 share">
            <button onClick={this.shareCard} id="sbtn">
              <img src={share} width="20px" height="20px" alt="share button" />
            </button>
          </div>
        </div>
        <div id="drop">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-danger btn-sm bb" type="button">
              Book Trial Class
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
