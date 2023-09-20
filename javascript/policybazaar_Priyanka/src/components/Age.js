import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMale } from '@fortawesome/free-solid-svg-icons';


function Age() {
  return (
    <div>
      <div className="select-age">
        <div className="row px-3 p-2 mt-5">
          <div className="col-md-9">
            <h2>
              Select age of covered
              <br /> member(s)
            </h2>
            <div className="best-price p-2">
              <p>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="fa-dollarSign"
                />
                This will help us calculate the premium & discounts for your
                family{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 seq-circl-section">
            <div className="seq-circle">
              {" "}
              <p> 0%</p>{" "}
            </div>
          </div>
        </div>
        <div className="members-age p-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <div className="left-section">
                  <FontAwesomeIcon icon={faPerson} className="faPerson-icon" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="right-section">
                  <select id="age" name="age">
                    <option value="apple">23 Years</option>
                    <option value="banana">24 Years</option>
                    <option value="cherry">25 Years</option>
                    <option value="grape">26 Years</option>
                    <option value="orange">27 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="members-age p-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <div className="left-section">
                  <FontAwesomeIcon icon={faPerson} className="faPerson-icon" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="right-section">
                  <select id="age" name="age">
                    <option value="apple">23 Years</option>
                    <option value="banana">24 Years</option>
                    <option value="cherry">25 Years</option>
                    <option value="grape">26 Years</option>
                    <option value="orange">27 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="members-age p-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <div className="left-section">
                  <FontAwesomeIcon icon={faPerson} className="faPerson-icon" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="right-section">
                  <select id="age" name="age">
                    <option value="apple">23 Years</option>
                    <option value="banana">24 Years</option>
                    <option value="cherry">25 Years</option>
                    <option value="grape">26 Years</option>
                    <option value="orange">27 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="members-age p-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3">
                <div className="left-section">
                  <FontAwesomeIcon icon={faPerson} className="faPerson-icon" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="right-section">
                  <select id="age" name="age">
                    <option value="apple">23 Years</option>
                    <option value="banana">24 Years</option>
                    <option value="cherry">25 Years</option>
                    <option value="grape">26 Years</option>
                    <option value="orange">27 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-acion text-center   mt-3 mb-5">
        <div className="previous col-md-12">
          <div className="row">
            <div className="col-md-4">
              
              <button className="btn btn-default btn-lg"><span> <FontAwesomeIcon icon={faArrowLeft} /> Go Back</span></button>
            </div>
            <div className="col-md-8">
            <div className="btn btn-primary btn-lg w-100">Continue</div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Age;
