import React from 'react'

function Findplan() {
  return (
    <div className='plan-section'>
      <div className='row px-3 mt-5' >
        <div className='col-md-9'>
          <h2>Find affordable plans <br />
          <span className='discount'>with up to 25% Discount**</span></h2>
        </div>
        <div className='col-md-3 seq-circl-section'>
            <div className='seq-circle'> <p> 0%</p> </div>
        </div>
      </div>

      <div className='slect-gender px-3'>
      <label className='gender'>
        <input type="radio" value="Male"/> Male
      </label>
      <label className='gender'>
        <input type="radio" value="Female"/> Female
      </label>
      </div>

      <p className='select-members px-3'>Select members you want to insure</p>

      <div className='px-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
            <div className='col-md-6'>
              <div className='metypembers-'>
                  <div className='left-section'>
                    <i class="fa-solid fa-person"></i>
                  </div>
                  <div className='right-section'>
                      <p>self</p>
                  </div>
              </div>
            </div>
            <div className='col-md-6'>
            <div className='members-type'>
                  <div className='left-section'>
                    <i class="fa-solid fa-person"></i>
                  </div>
                  <div className='right-section'>
                      <p>Husband</p>
                  </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className='members-type'>
                  <div className='left-section'>
                    <i class="fa-solid fa-person"></i>
                  </div>
                  <div className='right-section'>
                      <p>Father</p>
                  </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className='members-type'>
                  <div className='left-section'>
                  <i class="fa-solid fa-person-dress"></i>
                  </div>
                  <div className='right-section'>
                      <p>Mother</p>
                  </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className='members-type'>
                  <div className='left-section'>
                    <i class="fa-solid fa-person"></i>
                  </div>
                  <div className='right-section'>
                      <p>Son</p>
                  </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className='members-type'>
                  <div className='left-section'>
                  <i class="fa-solid fa-person-dress"></i>
                  </div>
                  <div className='right-section'>
                      <p>Daughter</p>
                  </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-3 mb-5'>
          <div className='btn btn-primary btn-lg w-50'>Continue</div>
      </div>
     

      <div className='clicking-link text-center'><p>By clicking on “Continue”, you agree to our Privacy Policy and Terms of use</p></div>
    </div>
  )
}

export default Findplan