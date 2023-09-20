import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Peopletrust() {
  return (
    <div className="peoplet-rust">
      <div className="peopletrust-section">
        <p>People trust Policybazaar</p>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <FontAwesomeIcon icon={faStar} className="star"/>
              <FontAwesomeIcon icon={faStar} className="star"/>
              <FontAwesomeIcon icon={faStar} className="star"/>
              <FontAwesomeIcon icon={faStar} className="star"/>
              <FontAwesomeIcon icon={faStar} className="star"/>
            </div>
            <div className="col-md-3 val-info">
              <p className="val">5.89 Cr</p>
              <p>Registered consumers</p>
            </div>
            <div className="col-md-3 val-info">
              <p className="val">51</p>
              <p>Insurance partners</p>
            </div>
            <div className="col-md-3 val-info">
              <p className="val">2.64 Cr</p>
              <p>Policies sold</p>
            </div>
          </div>
        </div>
      </div>
      <div className="policybazaar-btm">
        <p>Policybazaar is India's leading digital insurance marketplace</p>
      </div>
    </div>
  );
}

export default Peopletrust;
