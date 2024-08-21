const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (inView) {
            section.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Run once to check initial state

$(window).on('scroll',function() {
    if (window.scrollY > window.outerHeight) {
      $('#scrollToTop').addClass('active')
    } else {
      $('#scrollToTop').removeClass('active')
    }
  })
  
  $('#scrollToTop').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  })