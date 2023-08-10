import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

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
