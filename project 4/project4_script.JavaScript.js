document.getElementById("appForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate name
  if (name === "") {
    showError("name", "Name is required");
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    showError("email", "Email is required");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "Enter a valid email");
    isValid = false;
  }

  // Validate phone
  const phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    showError("phone", "Phone number is required");
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    showError("phone", "Enter a valid 10-digit number");
    isValid = false;
  }

  // Validate message
  if (message === "") {
    showError("message", "Message cannot be empty");
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    alert("Form submitted successfully ✅");
    document.getElementById("appForm").reset();
  }
});

// Show error helper function
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = field.parentElement.querySelector(".error");
  errorElement.textContent = message;
}
