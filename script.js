document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeButton = successModal.querySelector('.close-button');
    const modalOkButton = successModal.querySelector('.modal-ok-btn');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields before submitting.');
            return;
        }

        // Simple email format validation (more robust validation would be server-side)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, show the modal
        successModal.classList.add('show');

        // You would typically send form data to a server here, e.g.:
        /*
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            successModal.classList.add('show'); // Show modal on success
            contactForm.reset(); // Clear form
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
        */

        // Clear the form fields after (simulated) successful submission
        contactForm.reset();
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        successModal.classList.remove('show');
    });

    // Close the modal when the OK button is clicked
    modalOkButton.addEventListener('click', function() {
        successModal.classList.remove('show');
    });

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', function(event) {
        if (event.target == successModal) {
            successModal.classList.remove('show');
        }
    });
});
