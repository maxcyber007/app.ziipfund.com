import React, { Component } from 'react';
import AdminHeader from './admin.header';
import AdminSidebar from './admin.sidebar';
import AdminFooter from './admin.footer';

export default class AdminHOC extends Component {
  render() {
    return (
      <>
        <div className="page">
          <div className="page-main">
            {/* app-content*/}
            <div className="app-content  my-3 my-md-5 toggle-content">
              <AdminHeader />
              <AdminSidebar />
              {this.props.children}
              <AdminFooter />
            </div>
            {/* <!-- End app-content--> */}
          </div>
        </div>
        {/* // <!-- End Page --> */}

        {/* Back to top */}
        <a href="#top" id="back-to-top"><i className="fa fa-angle-up" /></a>

      </>
    )
  }
}

