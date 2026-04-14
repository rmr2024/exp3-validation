const ebookForm = document.getElementById("ebook-form");
const ticketForm = document.getElementById("ticket-form");

const createMessage = (elementId, message) => {
  const el = document.getElementById(elementId);
  if (el) el.textContent = message;
};

const checkLength = (value, min) => value.trim().length >= min;

if (ebookForm) {
  ebookForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let valid = true;

    if (!checkLength(username, 4)) {
      createMessage("user-error", "Username must be at least 4 characters.");
      valid = false;
    } else {
      createMessage("user-error", "");
    }

    if (!checkLength(password, 6)) {
      createMessage("pass-error", "Password must be at least 6 characters.");
      valid = false;
    } else {
      createMessage("pass-error", "");
    }

    if (valid) {
      alert("Ebook login form is valid.");
      ebookForm.reset();
    }
  });
}

if (ticketForm) {
  ticketForm.addEventListener("submit", event => {
    event.preventDefault();

    const fromLocation = document.getElementById("from").value;
    const toLocation = document.getElementById("to").value;
    const travelDate = document.getElementById("travelDate").value;
    let valid = true;

    if (!fromLocation.trim()) {
      createMessage("from-error", "Please enter a departure city.");
      valid = false;
    } else {
      createMessage("from-error", "");
    }

    if (!toLocation.trim()) {
      createMessage("to-error", "Please enter a destination city.");
      valid = false;
    } else {
      createMessage("to-error", "");
    }

    if (!travelDate) {
      createMessage("date-error", "Please select a travel date.");
      valid = false;
    } else {
      createMessage("date-error", "");
    }

    if (valid) {
      alert("Ticket booking form is valid.");
      ticketForm.reset();
    }
  });
}
