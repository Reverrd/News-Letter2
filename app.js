/* const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('emailInput');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value;
  if (email.length === 0) {
    showMessage('error', 'Please enter an email address');
  } else {
    showMessage('success', 'Subscribed successfully!');
    // You can add code here to send the email address to your server or perform any other necessary actions
  }
  form.reset();
});

function showMessage(type, text) {
  messageDiv.textContent = text;
  messageDiv.className = type;
}
 */
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const subscribeButton = document.getElementById("subscribe");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const overlay = document.getElementById("success-overlay");
    const dismiss = document.getElementById("dismissButton")
  
    subscribeButton.addEventListener("click", function () {
      const email = emailInput.value.trim(); 
  
      if (email === "") {
        errorMessage.innerText = "Valid email required";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
        overlay.style.display ="none";
      } else {
        // You can add your logic here to handle the email submission.
        // For this example, we're just showing a success message.
        successMessage.innerText = `Thanks for subscribing!
        A confirmation email has been sent to ash@loremcompany.com. 
        Please open it and click the button inside to confirm your subscription.`;
        successMessage.style.display = "block";
        overlay.style.display = "block";
        dismiss.style.display = "block";

        errorMessage.style.display = "none";
      }
    });
    dismiss.addEventListener("click", function (){
      successMessage.style.display = "none";
      dismiss.style.display = "none";
      overlay.style.display = "none";

    })
    emailInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          // Simulate a click on the "Subscribe" button
          subscribeButton.click();
          successMessage.style.display = "block";
          overlay.style.display = "block";
          dismiss.style.display = "block";
      }
  });
  });
   

  