import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DataTable from "datatables.net-autofill-bs5"
import jszip from 'jszip'
DataTable.Buttons.jszip( jszip );
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'
import 'pdfmake/build/vfs_fonts.js'
pdfMake.vfs = pdfFonts.pdfMake.vfs
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import 'datatables.net-responsive-bs5'
import 'datatables.net-fixedheader-bs5'
// import 'datatables.net-scroller-bs5'
import 'datatables.net-searchpanes-bs5'
import 'datatables.net-searchpanes-bs5/css/searchPanes.bootstrap5.min.css'
import 'datatables.net-buttons-bs5'
import 'datatables.net-buttons/js/buttons.colVis.mjs'
import 'datatables.net-buttons/js/buttons.html5.mjs'
import 'datatables.net-buttons/js/buttons.print.mjs'
import 'datatables.net-select-bs5'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css'
import 'datatables.net-searchpanes-bs5/js/searchPanes.bootstrap5.min.js'
import 'datatables.net-fixedheader-bs5/js/fixedHeader.bootstrap5.min.js'
import 'datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode>, */
)
