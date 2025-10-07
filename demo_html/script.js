// Portfolio JavaScript Functionality

$(document).ready(function() {
    
    // Initialize FlexSlider
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 5000,
        animationSpeed: 600,
        pauseOnHover: true
    });

    // Smooth scrolling for navigation
    $('nav a[data-nav-section]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('data-nav-section');
        var targetSection = $('[data-section="' + target + '"]');
        
        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 800);
        }
        
        // Update active nav item
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    // Counter animation
    function animateCounters() {
        $('.js-counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-to');
            var countFrom = $this.attr('data-from') || 0;
            var speed = $this.attr('data-speed') || 3000;
            
            $({ countNum: countFrom }).animate({
                countNum: countTo
            }, {
                duration: parseInt(speed),
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Trigger counter animation when section is visible
    function checkCounterVisibility() {
        var counterSection = $('#colorlib-counter');
        if (counterSection.length) {
            var sectionTop = counterSection.offset().top;
            var sectionBottom = sectionTop + counterSection.outerHeight();
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
                if (!counterSection.hasClass('animated')) {
                    counterSection.addClass('animated');
                    animateCounters();
                }
            }
        }
    }

    // Progress bar animation
    function animateProgressBars() {
        $('.progress-bar').each(function() {
            var $this = $(this);
            var width = $this.attr('aria-valuenow') + '%';
            $this.css('width', '0%').animate({
                width: width
            }, 1500);
        });
    }

    // Trigger progress bar animation when skills section is visible
    function checkSkillsVisibility() {
        var skillsSection = $('.colorlib-skills');
        if (skillsSection.length) {
            var sectionTop = skillsSection.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > sectionTop + 100) {
                if (!skillsSection.hasClass('animated')) {
                    skillsSection.addClass('animated');
                    animateProgressBars();
                }
            }
        }
    }

    // Scroll event handler
    $(window).on('scroll', function() {
        checkCounterVisibility();
        checkSkillsVisibility();
        updateActiveNavigation();
    });

    // Update active navigation based on scroll position
    function updateActiveNavigation() {
        var scrollPos = $(window).scrollTop() + 100;
        
        $('[data-section]').each(function() {
            var section = $(this);
            var sectionTop = section.offset().top;
            var sectionBottom = sectionTop + section.outerHeight();
            var sectionId = section.attr('data-section');
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('nav a').removeClass('active');
                $('nav a[data-nav-section="' + sectionId + '"]').addClass('active');
            }
        });
    }

    // Bootstrap accordion enhancement
    $('.panel-heading').on('click', function() {
        $(this).toggleClass('active');
    });

    // Form submission handler
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Show loading state
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.addClass('btn-loading').text('Sending...');
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(function() {
            submitBtn.removeClass('btn-loading').text(originalText);
            alert('Thank you for your message! I will get back to you soon.');
            $('#contact-form')[0].reset();
        }, 2000);
    });

    // Mobile menu toggle
    $('#mobile-menu-toggle').on('click', function() {
        $('#colorlib-aside').toggleClass('mobile-open');
        $('#mobile-overlay').toggleClass('active');
        $(this).find('i').toggleClass('bi-list bi-x');
    });

    // Close mobile menu when clicking overlay
    $('#mobile-overlay').on('click', function() {
        $('#colorlib-aside').removeClass('mobile-open');
        $(this).removeClass('active');
        $('#mobile-menu-toggle i').removeClass('bi-x').addClass('bi-list');
    });

    // Close mobile menu when clicking nav links
    $('#colorlib-main-menu a').on('click', function() {
        if ($(window).width() <= 991) {
            $('#colorlib-aside').removeClass('mobile-open');
            $('#mobile-overlay').removeClass('active');
            $('#mobile-menu-toggle i').removeClass('bi-x').addClass('bi-list');
        }
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#colorlib-aside, .mobile-menu-toggle').length) {
            $('#colorlib-aside').removeClass('mobile-open');
            $('#mobile-overlay').removeClass('active');
            $('#mobile-menu-toggle i').removeClass('bi-x').addClass('bi-list');
        }
    });

    // Lazy loading for images
    function lazyLoadImages() {
        $('img[data-src]').each(function() {
            var img = $(this);
            var src = img.attr('data-src');
            
            img.attr('src', src).removeAttr('data-src');
        });
    }

    // Initialize lazy loading
    lazyLoadImages();

    // Add loading animation to buttons
    $('.btn-learn, .btn-primary').on('click', function(e) {
        if ($(this).attr('href') === '#' || $(this).attr('href') === '') {
            e.preventDefault();
        }
    });

    // Animate elements on scroll
    function animateOnScroll() {
        $('.animate-box').each(function() {
            var element = $(this);
            var elementTop = element.offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollTop + windowHeight > elementTop + 100) {
                element.addClass('animated');
            }
        });
    }

    // Initial animation check
    animateOnScroll();
    
    // Scroll animation handler
    $(window).on('scroll', animateOnScroll);

    // Preloader (if you want to add one)
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

});

// Utility functions
function downloadCV() {
    // Replace with actual CV download link
    alert('CV download functionality - please add your CV file link');
}

function openProject(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

// Contact functions
function callPhone(number) {
    window.location.href = 'tel:' + number;
}

function sendEmail(email) {
    window.location.href = 'mailto:' + email;
}