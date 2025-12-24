import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import $ from "jquery"
import Popper from "popper.js"
window.$ = $
window.jQuery = $
window.Popper = Popper

import "bootstrap"                               // Bootstrap 4 JS
import "bootstrap/dist/css/bootstrap.min.css"    // Bootstrap 4 CSS
import "../stylesheets/custom.scss"

// Start Rails/Turbolinks
Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="dropdown"]').dropdown()
  if ($.fn.dropdown) { $(".dropdown-toggle").dropdown() }
})