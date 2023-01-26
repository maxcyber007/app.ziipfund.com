import Link from 'next/link';
import Image from 'next/image'
import React from 'react'

const AdminSidebar = () => {
    return (
      <>
  {/* Sidebar menu*/}
  <div className="app-sidebar__overlay" data-toggle="sidebar">
  <aside className="app-sidebar toggle-sidebar">
    <div className="app-sidebar__user pb-0">
      <div className="user-body">
        <span className="avatar avatar-xxl brround text-center cover-image" data-image-src="assets/images/users/female/33.png" />
      </div>
      <div className="user-info">
        <a href="#" className="ml-2"><span className="text-dark app-sidebar__user-name font-weight-semibold">Jenna Side</span><br />
          <span className="text-muted app-sidebar__user-name text-sm"> Web Designer</span>
        </a>
      </div>
    </div>
    <div className="tab-menu-heading siderbar-tabs border-0  p-0">
      <div className="tabs-menu ">
        {/* Tabs */}
        <ul className="nav panel-tabs">
          <li className><a href="#index1" className="active" data-toggle="tab"><i className="fa fa-home fs-17" /></a></li>
          <li><a href="#index2" data-toggle="tab"><i className="fa fa-envelope fs-17" /></a></li>
          <li><a href="#index3" data-toggle="tab"><i className="fa fa-user fs-17" /></a></li>
          <li><a href="login.html" title="logout"><i className="fa fa-power-off fs-17" /></a></li>
        </ul>
      </div>
    </div>
    <div className="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
      <div className="tab-content">
        <div className="tab-pane active " id="index1">
          <ul className="side-menu toggle-menu">
            <li className="slide">
              <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon typcn typcn-device-desktop" /><span className="side-menu__label">Home</span><i className="angle fa fa-angle-right" /></a>
            </li>
            <li className="slide">
              <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon typcn typcn-th-large-outline" /><span className="side-menu__label">Member</span><i className="angle fa fa-angle-right" /></a>
            
            </li>
            <li>
              <a className="side-menu__item" href="widgets.html"><i className="side-menu__icon typcn typcn-arrow-move-outline" /><span className="side-menu__label">Report</span></a>
            </li>
            <li>
              <a className="side-menu__item" href="maps.html"><i className="side-menu__icon typcn typcn-location-outline" /><span className="side-menu__label">Logout</span></a>
            </li>
            
          </ul>
        </div>
        <div className="tab-pane border-top" id="index2">
          <div className="list-group list-group-transparent mb-0 mail-inbox">
            <div className="mt-3 mb-3 ml-3 mr-3 text-center">
              <a href="email.html" className="btn btn-primary btn-block"><i className="typcn typcn-pencil fs-14" /> <span className="email-text">Compose</span></a>
            </div>
            <a href="emailservices.html" className="list-group-item list-group-item-action d-flex align-items-center active">
              <span className="icon mr-3"><i className="fe fe-inbox" /></span><span className="email-text">Inbox</span> <span className="ml-auto badge-pill badge badge-success email-text">05</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-send" /></span><span className="email-text">Sent Mail</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-alert-circle" /></span><span className="email-text">Important</span> <span className="ml-auto badge-pill badge badge-danger email-text">01</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-star" /></span><span className="email-text">Starred</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-file" /></span><span className="email-text">Drafts</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-tag" /></span><span className="email-text">Tags</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
              <span className="icon mr-3"><i className="fe fe-trash-2" /></span><span className="email-text"> Trash</span>
            </a>
          </div>
        </div>
        <div className="tab-pane border-top" id="index3">
          <div className="list-group list-group-flush ">
            <form className="form-inline p-4 m-0">
              <div className="search-element">
                <input className="form-control header-search w-100" type="search" placeholder="Search..." aria-label="Search" />
                <span className="Search-icon"><i className="fa fa-search" /></span>
              </div>
            </form>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="assets/images/users/female/12.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Mozelle Belt</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="assets/images/users/female/21.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Florinda Carasco</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/female/29.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Alina Bernier</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/female/2.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Zula Mclaughin</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/34.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Isidro Heide</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/12.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Mozelle Belt</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/21.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Florinda Carasco</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/29.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Alina Bernier</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/2.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Zula Mclaughin</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/female/14.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Isidro Heide</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/11.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Florinda Carasco</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/9.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Alina Bernier</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/male/22.jpg"><span className="avatar-status bg-green" /></span>
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Zula Mclaughin</div>
              </div>
            </div>
            <div className="list-group-item d-flex  align-items-center">
              <div className="mr-2">
                <span className="avatar avatar-md brround cover-image" data-image-src="../assets/images/users/female/4.jpg" />
              </div>
              <div className="user-name">
                <div className="font-weight-semibold">Isidro Heide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
  </div>
  {/*sidemenu end*/}

  </>
    )
}

export default AdminSidebar