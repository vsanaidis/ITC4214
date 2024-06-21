$(document).ready(function() {
    // Dark mode toggle
    $('#darkmodeswitch').click(function() {
        $('body').toggleClass('dark-mode');
        const icon = $(this).next('label').find('i');
        if ($(this).is(':checked')) {
            icon.removeClass('bi-moon').addClass('bi-moon-fill');
        } else {
            icon.removeClass('bi-moon-fill').addClass('bi-moon');
        }
    });

    const buttonContainer = document.getElementById('button_container');
    const checkbox = document.getElementById('check');
    const submit = document.getElementById('submitbtn');

    $('#contactForm').submit(function(event) {
        event.preventDefault(); // prevents the user from not entering input

        var username = $('#username').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        alert('Username: ' + username + '\nEmail: ' + email + '\nPhone: ' + phone + '\nMessage: ' + message);
    });

    buttonContainer.addEventListener('transitionend', function(event) {
        // changes the buttoncontainer accordingly if the window size changes
        if (event.propertyName === 'flex-direction') {
            checkWindowSize();
        }
    });

    checkbox.addEventListener('change', function() {
        // adds and removes the "show" from the class in the button
        if (this.checked) {
            buttonContainer.classList.add('show');
        } else {
            buttonContainer.classList.remove('show');
        }
    });

    window.addEventListener('resize', function() {
        checkWindowSize();
    });

    function checkWindowSize() {
        // changes how the window works when we change the size, if the size is higher than 858pixels it removes the "column" from the class and adds a style row
        if (window.innerHeight > 858) {
            buttonContainer.classList.remove('column');
            buttonContainer.style.flexDirection = 'row';
        } else {
            buttonContainer.classList.add('column');
        }
    }

    // Scroll to top button
    var btntop = document.getElementById('btntop'); // the button that takes the user to the top of the page
    btntop.addEventListener('click', function() {
        window.scrollTo({
            top: 0, // the position where the user is taken AKA the top of the page
            behavior: 'smooth' // smooth transition for the user
        });
    });
});
