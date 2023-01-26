import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    <div>
                        <meta charSet="utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta content="ziipfund" name="description" />
                        <meta content="ziipfund" name="author" />
                        <meta name="keywords" content="ziipfund" />
                        <title>ระบบบริหารจัดการข้อมูล</title>

                        {/* <!-- Favicon --> */}
                        <link rel="icon" href="assets/images/brand/favicon.ico" type="image/x-icon" />
                        <link rel="shortcut icon" type="image/x-icon" href="assets/images/brand/favicon.ico" />

                        {/* <!--Bootstrap.min css--> */}
                        <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />

                        {/* <!-- Dashboard css --> */}
                        <link href="assets/css/style.css" rel="stylesheet" />

                        {/* <!-- Custom scroll bar css--> */}
                        <link href="assets/plugins/scroll-bar/jquery.mCustomScrollbar.css" rel="stylesheet" />

                        {/* <!-- Sidemenu css --> */}
                        <link href="assets/plugins/toggle-sidebar/full-sidemenu.css" rel="stylesheet" />

                        {/* <!--Daterangepicker css--> */}
                        <link href="assets/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />

                        {/* <!-- Rightsidebar css --> */}
                        <link href="assets/plugins/sidebar/sidebar.css" rel="stylesheet" />

                        {/* <!-- Sidebar Accordions css --> */}
                        <link href="assets/plugins/accordion1/css/easy-responsive-tabs.css" rel="stylesheet" />

                        {/* <!-- Owl Theme css--> */}
                        <link href="assets/plugins/owl-carousel/owl.carousel.css" rel="stylesheet" />

                        {/* <!-- Morris  Charts css--> */}
                        <link href="assets/plugins/morris/morris.css" rel="stylesheet" />

                        {/* <!---Font icons css--> */}
                        <link href="assets/plugins/iconfonts/plugin.css" rel="stylesheet" />
                        <link href="assets/plugins/iconfonts/icons.css" rel="stylesheet" />
                        <link href="assets/fonts/fonts/font-awesome.min.css" rel="stylesheet" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" rel="stylesheet" />
                    </div>
                </Head>
                <body className="app sidebar-mini rtl">
                    <Main />
                    <NextScript />
                    {/* <!-- Jquery js--> */}
                    <Script src="assets/js/vendors/jquery-3.2.1.min.js"></Script>
                    {/* <!--Bootstrap.min js--> */}
                    <Script src="assets/plugins/bootstrap/popper.min.js"></Script>
                    <Script src="assets/plugins/bootstrap/js/bootstrap.min.js"></Script>
                </body>
            </Html>
        )
    }
}

export default MyDocument