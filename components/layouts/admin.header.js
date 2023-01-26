import Link from 'next/link';
import Image from 'next/image'
const AdminHeader = () =>{
    return(
      <>
      {/*app-header*/}
      <div className="app-header header d-flex">
        <div className="container-fluid">
          <div className="d-flex">
            <a className="header-brand" href="index.html">
              <img src="assets/images/brand/logo.png" className="header-brand-img main-logo" alt="Hogo logo" />
              <img src="assets/images/brand/icon.png" className="header-brand-img icon-logo" alt="Hogo logo" />
            </a>{/* logo*/}
            <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-toggle="sidebar" href="#" />
            <a href="#" data-toggle="search" className="nav-link nav-link  navsearch"><i className="fa fa-search" /></a>{/* search icon */}

          
            <div className="d-flex order-lg-2 ml-auto header-rightmenu">
              <div className="dropdown">
                <a className="nav-link icon full-screen-link" id="fullscreen-button">
                  <i className="fe fe-maximize-2" />
                </a>
              </div>{/* full-screen */}
              <div className="dropdown header-notify">
                <a className="nav-link icon" data-toggle="dropdown" aria-expanded="false">
                  <i className="fe fe-bell " />
                  <span className="pulse bg-success" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                  <a href="#" className="dropdown-item text-center">4 New Notifications</a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item d-flex pb-3">
                    <div className="notifyimg bg-green">
                      <i className="fe fe-mail" />
                    </div>
                    <div>
                      <strong>Message Sent.</strong>
                      <div className="small text-muted">12 mins ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex pb-3">
                    <div className="notifyimg bg-pink">
                      <i className="fe fe-shopping-cart" />
                    </div>
                    <div>
                      <strong>Order Placed</strong>
                      <div className="small text-muted">2  hour ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex pb-3">
                    <div className="notifyimg bg-blue">
                      <i className="fe fe-calendar" />
                    </div>
                    <div>
                      <strong> Event Started</strong>
                      <div className="small text-muted">1  hour ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex pb-3">
                    <div className="notifyimg bg-orange">
                      <i className="fe fe-monitor" />
                    </div>
                    <div>
                      <strong>Your Admin Lanuch</strong>
                      <div className="small text-muted">2  days ago</div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">View all Notifications</a>
                </div>
              </div>{/* notifications */}
              <div className="dropdown header-user">
                <a className="nav-link leading-none siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <span className="mr-3 d-none d-lg-block ">
                    <span className="text-gray-white"><span className="ml-2">Alison</span></span>
                  </span>
                  <span className="avatar avatar-md brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-md brround" /></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <div className="header-user text-center mt-4 pb-4">
                    <span className="avatar avatar-xxl brround"><img src="../assets/images/users/female/33.png" alt="Profile-img" className="avatar avatar-xxl brround" /></span>
                    <a href="#" className="dropdown-item text-center font-weight-semibold user h3 mb-0">Alison</a>
                    <small>Web Designer</small>
                  </div>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon mdi mdi-account-outline " /> Spruko technologies
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon  mdi mdi-account-plus" /> Add another Account
                  </a>
                  <div className="card-body border-top">
                    <div className="row">
                      <div className="col-6 text-center">
                        <a className href><i className="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight" /></a>
                        <div>Inbox</div>
                      </div>
                      <div className="col-6 text-center">
                        <a className href><i className="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight" /></a>
                        <div>Sign out</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* profile */}
              <div className="dropdown">
                <a className="nav-link icon siderbar-link" data-toggle="sidebar-right" data-target=".sidebar-right">
                  <i className="fe fe-more-horizontal" />
                </a>
              </div>{/* Right-siebar*/}
            </div>
          </div>
        </div>
      </div>
      {/*app-header end*/}
</>

    )
}

export default AdminHeader