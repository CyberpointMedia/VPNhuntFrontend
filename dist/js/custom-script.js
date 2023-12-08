// mobile humburger menu start 
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('navbar-sticky');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open-navbar');
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
    $("nav").toggleClass("drop-shadow-md");
});
// mobile humburger menu end

//top search start here 
var toggleButton = document.getElementById("top-search");
  var mainSearch = document.getElementById("main-search");
  var searchCloseButton = document.getElementById("search-close");

  toggleButton.addEventListener("click", function() {
    mainSearch.classList.toggle("open-search-form");
  });

  searchCloseButton.addEventListener("click", function() {
    mainSearch.classList.remove("open-search-form");
  });
  // top search end here 

  // fixed header start here 
  document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var topbar = document.getElementById("topbar");

    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
        topbar.classList.add('hidden');
      } else {
        header.classList.remove("fixed-header");
        topbar.classList.remove('hidden');
      }
    });
});
// fixed header end here 

  // slider for mobile start
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: true,
        dots: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots: true,
        autoplay: true,
      }
    }
  ]
    });
});
// slider for mobile end


// Function to add IDs to headings and generate table of contents
function generateTableOfContents() {
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    const tocElement = document.getElementById('table-of-contents');

    let tocHTML = '<ul>';

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index + 1}`;
        }

        const headingText = heading.textContent;
        const headingId = heading.id;
        tocHTML += `<li><a href="#${headingId}">${headingText}</a></li>`;
    });

    tocHTML += '</ul>';
    tocElement.innerHTML = tocHTML;
}

// Call the function when the content is loaded
document.addEventListener('DOMContentLoaded', generateTableOfContents);

// table of contents active class start
$(document).ready(function () { 
    $('#table-of-contents li:nth-child(3)').addClass('active');   
    $("#table-of-contents li a").click(function(){
    var parentElement = $(this).parent();
    parentElement.toggleClass("active").siblings().removeClass("active");
    });
});
// table of contents active class end

// faq start here 
$(document).ready(function () {    
    $(".accordion-toggle").click(function(){
        var parentElement = $(this).parent();
        parentElement.toggleClass("collapsed").siblings().removeClass("collapsed");
    });
});
// faq end here 