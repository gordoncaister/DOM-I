const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.querySelector(".cta-text h1").innerText = siteContent.cta.h1;
document.querySelector(".cta-text button").innerText = siteContent.cta.button;
document.getElementById("cta-img").setAttribute("src",siteContent.cta["img-src"]);


document.querySelector("nav a:nth-of-type(1)").innerText = siteContent.nav["nav-item-1"];
document.querySelector("nav a:nth-of-type(2)").innerText = siteContent.nav["nav-item-2"];
document.querySelector("nav a:nth-of-type(3)").innerText = siteContent.nav["nav-item-3"];
document.querySelector("nav a:nth-of-type(4)").innerText = siteContent.nav["nav-item-4"];
document.querySelector("nav a:nth-of-type(5)").innerText = siteContent.nav["nav-item-5"];
document.querySelector("nav a:nth-of-type(6)").innerText = siteContent.nav["nav-item-6"];


document.querySelector(".top-content div:nth-of-type(1) h4").innerText = siteContent["main-content"]["features-h4"];
document.querySelector(".top-content div:nth-of-type(1) p").innerText = siteContent["main-content"]["features-content"];

document.querySelector(".top-content div:nth-of-type(2) h4").innerText = siteContent["main-content"]["about-h4"];
document.querySelector(".top-content div:nth-of-type(2) p").innerText = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

document.querySelector(".bottom-content div:nth-of-type(1) h4").innerText = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content div:nth-of-type(1) p").innerText = siteContent["main-content"]["services-content"];

document.querySelector(".bottom-content div:nth-of-type(2) h4").innerText = siteContent["main-content"]["product-h4"];
document.querySelector(".bottom-content div:nth-of-type(2) p").innerText = siteContent["main-content"]["product-content"];

document.querySelector(".bottom-content div:nth-of-type(3) h4").innerText = siteContent["main-content"]["vision-h4"];
document.querySelector(".bottom-content div:nth-of-type(3) p").innerText = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").innerText = siteContent.contact["contact-h4"];
document.querySelector(".contact p:nth-child(2)").innerText = siteContent.contact["address"];
document.querySelector(".contact p:nth-child(3)").innerText = siteContent.contact["phone"];
document.querySelector(".contact p:nth-child(4)").innerText = siteContent.contact["email"];

document.querySelector("footer p").innerText = siteContent.footer.copyright;


// document.querySelector("nav:nth-child(6)").innerText = siteContent.nav["nav-item-6"];

