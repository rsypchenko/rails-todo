import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["display", "form", "input"]

  toggle() {
    this.displayTarget.classList.toggle("hidden")
    this.formTarget.classList.toggle("hidden")
    if (!this.formTarget.classList.contains("hidden")) {
      this.inputTarget.focus()
    }
  }

  submit(event) {
    // Let Turbo handle the form submission natively
    // Only toggle visibility on successful Turbo frame update
    // Optionally, you can listen for Turbo events to toggle
  }
}