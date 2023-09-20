import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function City() {
  return (
    <div>
      <div className='select-city'>
      <div className="row px-3">
          <div className="col-md-9">
            <h2>
              Select your city
            </h2>
            <div className="best-price p-2">
              <p>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="fa-dollarSign"
                />
                This will help us to find the network of <br/>Cashless Hospitals in your city
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

        <div className='select-city-name'>
          <input type='text' className='city' id='city' placeholder='Thane(Maharastra'/>

        </div>





        <div className='popular-cities'> 
          <div className='Popular Cities-heading py-2 px-3'>
            <h6> Popular Cities</h6>
          </div>
          <div className='Popular-cities-list'>
            <button>Delhi</button>
            <button>Bengaluru</button>
            <button> Mumbai</button>
            <button> Pune</button>
            <button> Hyderabad</button>
            <button>Indore</button>
            <button>Kolkata</button>
            <button>Gurgaon</button>
            <button>Noida</button>
            <button>Chennai</button>
            <button>Kochi</button>
            <button>Goa</button>
            <button>Bhubaneswar</button>

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
    </div>
  )
}

export default City