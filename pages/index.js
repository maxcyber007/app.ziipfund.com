import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AdminHOC from '../components/layouts/admin.hoc'

export default function Home() {
  return (
    <AdminHOC>
                   <div>
    <div className="side-app">
      {/* page-header */}
      <div className="page-header">
        <ol className="breadcrumb">{/* breadcrumb */}
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard 01</li>
        </ol>{/* End breadcrumb */}
        <div className="ml-auto">
          <div className="input-group">
            <a className="btn btn-primary text-white mr-2" id="daterange-btn">
              <span>
                <i className="fa fa-calendar" /> Events Settings
              </span>
              <i className="fa fa-caret-down" />
            </a>
            <a href="#" className="btn btn-secondary text-white" data-toggle="tooltip" title data-placement="bottom" data-original-title="Rating">
              <span>
                <i className="fa fa-star" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* End page-header */}

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header custom-header">
              <div>
                <h3 className="card-title">Products Details</h3>
                <h6 className="card-subtitle">Over of this week</h6>
              </div>
              <div className="card-options">
                <a href className="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                  <span className="fa fa-ellipsis-v" />
                </a>
                <ul className="dropdown-menu dropdown-menu-right" role="menu">
                  <li><a href="#"><i className="si si-plus mr-2" />Add</a></li>
                  <li><a href="#"><i className="si si-trash mr-2" />Remove</a></li>
                  <li><a href="#"><i className="si si-eye mr-2" />View</a></li>
                  <li><a href="#"><i className="si si-settings mr-2" />More</a></li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                Hme Page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/*End side app*/}
    
  {/* End app-content*/}
</div>

                </AdminHOC>
  )
}
