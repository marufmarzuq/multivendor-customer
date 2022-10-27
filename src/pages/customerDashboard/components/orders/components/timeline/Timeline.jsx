import React from "react";
import "./timeline.css";

import { TiDocumentText } from "react-icons/ti";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const Timeline = () => {
  return (
    <div>
      <div className="container">
        {/* <div className="row text-center justify-content-center mb-5">
          <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold">A Company Evolution</h2>
            <p className="text-muted">
              We’re very proud of the path we’ve taken. Explore the history that
              made us the company we are today.
            </p>
          </div>
        </div> */}

        <div className="row mt-3 mb-5">
          <div className="col">
            <div
              className="timeline-steps aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="timeline-step selected-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2003"
                >
                  <div className="inner-circle">
                    <span>
                      <TiDocumentText />
                    </span>
                  </div>
                  <p className=" mt-1 mb-1">Order placed</p>
                  {/* <p className="h6 text-muted mb-0 mb-lg-0">Favland Founded</p> */}
                </div>
              </div>
              {/* <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2004"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">2004</p>
                  <p className="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                </div>
              </div> */}
              <div className="timeline-step ">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2005"
                >
                  <div className="inner-circle">
                    <span>
                      {" "}
                      <MdOutlineConfirmationNumber />{" "}
                    </span>
                  </div>
                  <p className=" mt-1 mb-1">Confirmed</p>
                </div>
              </div>
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2010"
                >
                  <div className="inner-circle">
                    <span>
                      <BsTruck />
                    </span>
                  </div>
                  <p className=" mt-1 mb-1"> On Delivery</p>
                </div>
              </div>
              <div className="timeline-step mb-0">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2020"
                >
                  <div className="inner-circle">
                    <span>
                      <AiOutlineDeliveredProcedure />
                    </span>
                  </div>
                  <p className=" mt-1 mb-1"> Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
