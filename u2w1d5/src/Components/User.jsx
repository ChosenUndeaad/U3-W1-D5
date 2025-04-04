import React from "react";

function MyUser() {
  return (
    <main>
      <div className='container mt-5'>
        <div className='col-md-8 offset-md-2'>
          <div className='row'>
            <div className='col'>
              <h2 className='fs-1 fw-normal'>Edit Profile</h2>
              <hr />
            </div>
          </div>

          {/* COLONNE CENTRALI */}
          <div className='row'>
            {/* ICONA */}
            <div className='col-12 col-md-3 px-1'>
              <img
                src='https://tiermaker.com/images/templates/fnaf-hw-characters-956499/9564991618673258.PNG'
                width='200'
                alt='User Avatar'
              />
            </div>
            {/* COLONNA DX */}
            <div className='col-12 col-md-9'>
              <div>
                <button
                  type='button'
                  className='btn btn-secondary text-light rounded-0 w-50 d-flex align-items-center justify-content-left'
                >
                  Strive Student
                </button>
              </div>
              <div>
                <div className='form-group'>
                  <h5 className='fw-normal mt-3'>Language</h5>
                  <div className='dropdown my-2'>
                    <button
                      className='mb-2 btn btn-secondary dropdown-toggle bg-dark border-2 rounded-0 border-light'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Language
                    </button>
                    <ul className='dropdown-menu dropdown-menu-start bg-dark'>
                      <li>
                        <a className='dropdown-item text-light' href='#'>
                          English
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item text-light' href='#'>
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className='dropdown-item text-light' href='#'>
                          German
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />

                {/* MATURITY SETTINGS */}
                <div>
                  <h4 className='py-2 fw-normal mt-3'>Maturity Settings</h4>
                  <button
                    type='button'
                    className='mb-3 btn btn-secondary rounded-0 fw-bold'
                  >
                    ALL MATURITY RATINGS
                  </button>
                  <p>
                    Show titles of <strong>all maturity ratings</strong> for
                    this profile.
                  </p>
                  <button
                    type='button'
                    className='mb-3 btn btn-dark rounded-0 fw-light border-secondary'
                  >
                    EDIT
                  </button>
                </div>
                <hr />

                {/* AUTOPLAY SETTINGS */}
                <div className='form-group'>
                  <h4 className='py-2 fw-normal mt-3'>Autoplay Settings</h4>

                  <div className='form-check d-flex align-items-center'>
                    <input
                      className='form-check-input rounded-0 bg-dark fs-4'
                      type='checkbox'
                      id='defaultCheck1'
                    />
                    <label
                      className='form-check-label ms-2'
                      htmlFor='defaultCheck1'
                    >
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>

                  <div className='form-check d-flex align-items-center'>
                    <input
                      className='form-check-input rounded-0 bg-dark fs-4'
                      type='checkbox'
                      id='defaultCheck2'
                    />
                    <label
                      className='form-check-label ms-2'
                      htmlFor='defaultCheck2'
                    >
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTONI */}
          <div className='row justify-content-center'>
            <div className='col text-center'>
              <hr />
              <button
                type='submit'
                className='btn btn-light text-dark rounded-0 m-2 fs-4'
              >
                SAVE
              </button>
              <button
                type='button'
                className='btn border-secondary bg-dark text-secondary rounded-0 m-2 fs-4'
              >
                CANCEL
              </button>
              <button
                type='button'
                className='btn border-secondary bg-dark text-secondary rounded-0 m-2 fs-4'
              >
                DELETE PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyUser;
