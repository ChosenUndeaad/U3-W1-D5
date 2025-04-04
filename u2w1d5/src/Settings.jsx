import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MySettings() {
  return (
    <main className='text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='mt-4 mb-2'>Account</h1>
          </div>
          <hr />
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className='text-start'>MEMBERSHIP & BILLING</p>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='col d-flex mb-2'>
                <div className='col text-start'>
                  <p className='fw-bold m-0'>student@strive.school</p>
                  <p className='m-0'>Password: ********</p>
                  <p className='m-0'>Phone: 3210441279</p>
                </div>
                <div className='col text-end'>
                  <p className='text-info m-0'>Change account email</p>
                  <p className='text-info m-0'>Change Password</p>
                  <p className='text-info m-0'>Change phone number</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col d-flex mb-2'>
                <div className='col text-start'>
                  <p className='fw-bold m-0'>admin@strive.school</p>
                </div>
                <div className='col text-end'>
                  <p className='text-info m-0'>Update payment info</p>
                  <p className='text-info m-0'>Billing details</p>
                </div>
              </div>
            </div>
            <hr />
            <div className='row mb-2'>
              <div className='col d-flex mb-2'>
                <div className='col'></div>
                <div className='col text-end'>
                  <p className='text-info m-0'>
                    Redeem gift card or promo code
                  </p>
                  <p className='text-info m-0'>Where to buy gift cards</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className='row'>
          <div className='col-3'>
            <p className='text-start'>MEMBERSHIP & BILLING</p>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='col d-flex mb-2'>
                <div className='col text-start'>
                  <p className='fw-bold m-0'>Premium ULTRA HD</p>
                </div>
                <div className='col text-end'>
                  <p className='text-info m-0'>Change plan</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className='row'>
          <div className='col-3'>
            <p className='text-start'>MEMBERSHIP & BILLING</p>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='col d-flex mb-2'>
                <div className='col text-start'>
                  <p className='text-info m-0'>Parental controls</p>
                  <p className='text-info m-0'>Test participation</p>
                  <p className='text-info m-0'>Manage downloaded devices</p>
                  <p className='text-info m-0'>Activate a device</p>
                  <p className='text-info m-0'>
                    Recent device streaming activity
                  </p>
                  <p className='text-info m-0'>Sign out of all devices</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='row'>
          <div className='col-3'>
            <p className='text-start'>MEMBERSHIP & BILLING</p>
          </div>
          <div className='col'>
            <div className='row'>
              <div className='col d-flex mb-2'>
                <div className='col text-start'>
                  <p className='m-0'>Strive Student</p>
                </div>
              </div>
              <div className='col text-end'>
                <p className='text-info m-0'>Manage profiles</p>
                <p className='text-info m-0'>Add profile email</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
}

export default MySettings;
