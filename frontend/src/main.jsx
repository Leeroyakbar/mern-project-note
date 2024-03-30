import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/assets/img/favicon/favicon.ico'

// icons
import './assets/assets/vendor/fonts/boxicons.css'

// core css
import './assets/assets/vendor/css/core.css'
import './assets/assets/vendor/css/theme-default.css'
import './assets/assets/css/demo.css'

// vendor css
import './assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'

// pages
import './assets/assets/vendor/css/pages/page-auth.css'

// helpers
import './assets/assets/vendor/js/helpers.js'

// config
import './assets/assets/js/config.js'

// core js
import './assets/assets/vendor/libs/jquery/jquery.js'
import './assets/assets/vendor/libs/popper/popper.js'
import './assets/assets/vendor/js/bootstrap.js'
import './assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
import './assets/assets/vendor/js/menu.js'

// main js
import './assets/assets/js/main.js'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
