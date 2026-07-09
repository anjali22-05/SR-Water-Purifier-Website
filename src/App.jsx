import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const logo = "/assets/sr-logo.png";
const phoneNumber = "+91 99368 03377";
const phoneHref = "tel:+919936803377";
const alternatePhoneNumber = "+91 92191 98003";
const alternatePhoneHref = "tel:+919219198003";
const whatsappHref = "https://wa.me/919936803377";
const emailAddress = "govindsinghpal3797@gmail.com";
const emailHref = `mailto:${emailAddress}`;

const products = [
  {
    title: "Aqua ERA Elite Series",
    tag: "Premium 9 Ltr Storage",
    type: "Premium",
    image: "/assets/products/aqua-era-elite.jpeg",
    text: "Premium grey purifier with multi-stage purification and modern countertop styling."
  },
  {
    title: "Aqua Lexzon Black",
    tag: "Reverse Osmosis System",
    type: "RO",
    image: "/assets/products/lexzon-black.jpeg",
    text: "Compact black RO purifier with premium-quality build for daily home use."
  },
  {
    title: "Aquafresh Blue Tank",
    tag: "Cabinet Installed",
    type: "Storage",
    image: "/assets/products/aquafresh-blue.jpeg",
    text: "Blue and white storage purifier installed neatly inside a kitchen cabinet."
  },
  {
    title: "Zinc Copper Alkaline",
    tag: "Copper + Alkaline",
    type: "Alkaline",
    image: "/assets/products/zinc-copper-alkaline.jpeg",
    text: "Wall-mounted alkaline purifier with zinc copper support and covered body."
  },
  {
    title: "Blue Countertop RO",
    tag: "Compact Model",
    type: "Storage",
    image: "/assets/products/blue-countertop.jpeg",
    text: "Simple countertop purifier for kitchens that need a clean, compact setup."
  },
  {
    title: "SS(Stainless Steel) Water Tank",
    tag: "Stainless Steel Storage",
    type: "Storage",
    image: "/assets/products/ss-stainless-steel-water-tank.jpeg",
    text: "Durable stainless steel water tank purifier with RO support for hygienic daily storage."
  },
  {
    title: "Open Filter Alkaline RO",
    tag: "RO + UV + UF + TDS",
    type: "Alkaline",
    image: "/assets/products/alkaline-open-filter.jpeg",
    text: "Transparent model showing internal filters, pump and purification stages."
  },
  {
    title: "Alkaline LED Display",
    tag: "Smart Display",
    type: "Premium",
    image: "/assets/products/alkaline-led.jpeg",
    text: "Large dispenser-style purifier with LED display and premium silver finish."
  }
];

const services = [
  {
    icon: "RO",
    title: "RO Repair",
    text: "Fast diagnosis and repair for leakage, low flow, bad taste, motor noise and filter issues.",
    action: "Book Repair"
  },
  {
    icon: "MT",
    title: "RO Maintenance",
    text: "Routine cleaning, filter checks and performance tuning to keep your purifier reliable.",
    action: "Book Maintenance"
  },
  {
    icon: "IN",
    title: "New Installation",
    text: "Clean installation for new RO purifiers with pipe fitting, testing and setup guidance.",
    action: "Book Installation"
  },
  {
    icon: "AM",
    title: "AMC Plans",
    text: "Affordable annual care plans with priority visits, reminders and service support.",
    action: "View Plans"
  }
];

const steps = [
  ["01", "Book", "Call, WhatsApp or submit the quick service form."],
  ["02", "Visit", "A trained technician reaches your location."],
  ["03", "Service", "Repair, maintenance or installation is completed."],
  ["04", "Quality Check", "Water flow and purity are checked before handover."]
];

const brands = ["Kent", "Aquaguard", "Livpure", "AO Smith", "Pureit", "Blue Star"];
const areas = [
  { name: "Noida", note: "Same-day RO repair, installation and AMC visits available in most sectors." },
  { name: "Greater Noida", note: "Doorstep technician support for homes, offices and societies." },
  { name: "Ghaziabad", note: "Quick diagnosis for leakage, low water flow, filter replacement and bad taste issues." },
  { name: "Indirapuram", note: "Priority support for apartments, kitchens and commercial RO systems." },
  { name: "Vaishali", note: "Fast service visits with filter checks, cleaning and performance testing." },
  { name: "Gurgaon", note: "RO repair, maintenance and installation support across Gurgaon locations." },
  { name: "Dwarka", note: "Doorstep RO repair, filter replacement and installation support across Dwarka sectors." },
  { name: "Delhi NCR", note: "Flexible visit scheduling across nearby NCR service locations." }
];
const productFilters = ["All", "Premium", "RO", "Alkaline", "Storage"];
const faqs = [
  ["How quickly can you visit?", "Most service requests in Noida and nearby areas are handled the same day, depending on the time and technician availability."],
  ["Do you provide installation for new RO purifiers?", "Yes. We install new RO purifiers, check water flow, test fittings and guide you on basic maintenance."],
  ["Are AMC plans available?", "Yes. AMC plans are available for regular maintenance, reminders and priority service support."],
  ["Can I ask price for a product before booking?", "Yes. Use the enquiry button or WhatsApp and share the product name. The team will confirm the current price and availability."]
];

function Logo({ light = false }) {
  return (
    <a className={`brandLogo ${light ? "light" : ""}`} href="#">
      <img src={logo} alt="SR Water Purifier logo" />
      <span>Water Purifier</span>
    </a>
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <Logo />
      <nav className="siteNav" aria-label="Main navigation">
        <a href="#">Home</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#plans">AMC Plans</a>
        <a href="#areas">Service Areas</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="headerActions">
        <a className="phoneLink" href={phoneHref}>
          <span>Call Us</span>
          <strong>{phoneNumber}</strong>
        </a>
        <a className="primaryBtn" href="#booking">Book Service</a>
      </div>
    </header>
  );
}

function BookingForm() {
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Thanks. We received your request and will call you shortly.");
  }

  return (
    <form className="bookingCard" id="booking" onSubmit={handleSubmit}>
      <p className="miniLabel">Quick Booking</p>
      <h2>Book RO Service</h2>
      <label>
        Name
        <input type="text" placeholder="Enter your name" required />
      </label>
      <label>
        Mobile Number
        <input type="tel" placeholder="Enter mobile number" required />
      </label>
      <label>
        Service Type
        <select value={service} onChange={(event) => setService(event.target.value)} required>
          <option value="" disabled>Choose service</option>
          <option>RO Repair</option>
          <option>RO Maintenance</option>
          <option>New Installation</option>
          <option>AMC Plan</option>
          <option>Product Enquiry</option>
        </select>
      </label>
      <button type="submit">Request Callback</button>
      {status && <p className="formStatus">{status}</p>}
      <a className="whatsappLink" href={whatsappHref}>Chat on WhatsApp</a>
    </form>
  );
}

function ProductHeroVisual() {
  const featuredProduct = products[0];

  return (
    <div className="productHeroCard">
      <div className="heroProductImage">
        <img src={featuredProduct.image} alt={featuredProduct.title} />
      </div>
      <div className="heroProductInfo">
        <span>Featured Product</span>
        <strong>{featuredProduct.title}</strong>
        <p>{featuredProduct.tag}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <p className="pill">Pure Water. Reliable Service.</p>
        <h1>Professional RO service at your doorstep.</h1>
        <p className="heroText">
          SR Water Purifier provides RO repair, maintenance, installation and AMC support with genuine parts and same-day assistance.
        </p>
        <div className="heroCtas">
          <a className="primaryBtn large" href="#booking">Book Service</a>
          <a className="secondaryBtn" href={phoneHref}>Call Now</a>
        </div>
        <div className="trustStrip">
          <span><strong>4.9/5</strong> Customer rating</span>
          <span><strong>10,000+</strong> Happy customers</span>
          <span><strong>30-90 days</strong> Service warranty</span>
        </div>
      </div>
      <ProductHeroVisual />
      <BookingForm />
    </section>
  );
}

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [productSearch, setProductSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const normalizedSearch = productSearch.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "All" || product.type === activeFilter;
    const matchesSearch = !normalizedSearch
      || product.title.toLowerCase().includes(normalizedSearch)
      || product.tag.toLowerCase().includes(normalizedSearch)
      || product.text.toLowerCase().includes(normalizedSearch);

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="productsBlock" id="products">
      <div className="productIntro">
        <div>
          <p className="miniLabel">Product Page</p>
          <h2>RO purifiers available for installation</h2>
          <p>
            Explore ready-to-install RO, alkaline and storage purifier models with doorstep fitting and service support.
          </p>
          <div className="productBenefits">
            <span>Installation support</span>
            <span>Price on call</span>
            <span>Home and office use</span>
          </div>
        </div>
        <div className="productIntroActions">
          <a className="primaryBtn" href="#booking">Book Installation</a>
          <a className="secondaryBtn" href={whatsappHref}>Send Enquiry</a>
        </div>
      </div>
      <div className="productBrowser">
        <div>
          <span>Browsing</span>
          <strong>{activeFilter}</strong>
        </div>
        <div>
          <span>Available</span>
          <strong>{visibleProducts.length} products</strong>
        </div>
      </div>
      <div className="productTools">
        <div className="filterBar" aria-label="Product filters">
          {productFilters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="productSearch">
          <span>Search Product</span>
          <input
            type="search"
            placeholder="Search by name or feature"
            value={productSearch}
            onChange={(event) => setProductSearch(event.target.value)}
          />
        </label>
      </div>
      <div className="productStats" aria-live="polite">
        <span>Image</span>
        <span>Product name</span>
        <span>Product details</span>
      </div>
      <div className="productShowcase">
        <div className="productGrid">
          {visibleProducts.map((product) => (
            <button
              className="productCard"
              type="button"
              key={product.title}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="productImageFrame">
                <img src={product.image} alt={product.title} />
              </div>
              <div>
                <span>{product.tag}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <strong>View details</strong>
              </div>
            </button>
          ))}
          {visibleProducts.length === 0 && (
            <div className="productEmpty">
              <h3>No products found</h3>
              <p>Try another search or call us to confirm product availability.</p>
              <a className="primaryBtn" href={phoneHref}>Call Now</a>
            </div>
          )}
        </div>
      </div>
      {selectedProduct && (
        <div className="productModalOverlay" role="presentation">
          <section className="productModal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
            <button className="popupClose" type="button" aria-label="Close product details" onClick={() => setSelectedProduct(null)}>
              x
            </button>
            <div className="productImageFrame modal">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div>
              <span>{selectedProduct.tag}</span>
              <h2 id="product-modal-title">{selectedProduct.title}</h2>
              <p>{selectedProduct.text}</p>
              <ul>
                <li>Installation and service support available</li>
                <li>Call or WhatsApp for current price</li>
                <li>Suitable for home and office use</li>
              </ul>
              <div className="modalActions">
                <a className="primaryBtn" href={phoneHref}>Call for Price</a>
                <a className="secondaryBtn" href={whatsappHref}>WhatsApp</a>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

function Services() {
  return (
    <section className="sectionBlock" id="services">
      <div className="sectionHeading">
        <p className="miniLabel">Our Services</p>
        <h2>Complete RO care solutions</h2>
      </div>
      <div className="serviceGrid">
        {services.map((service) => (
          <article className="serviceCard" key={service.title}>
            <div className="serviceIcon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#booking">{service.action} {"->"}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="offerPanel" id="plans">
      <div>
        <p className="miniLabel">Current Offers</p>
        <h2>Simple pricing, clear service.</h2>
      </div>
      <div className="offerGrid">
        <article>
          <span>Visit Charge</span>
          <strong>Rs. 199</strong>
          <p>Flat inspection charge for RO repair visits.</p>
        </article>
        <article>
          <span>AMC Saving</span>
          <strong>20% Off</strong>
          <p>Save more on annual maintenance plans.</p>
        </article>
        <article>
          <span>Water Check</span>
          <strong>Free</strong>
          <p>Basic water testing with selected services.</p>
        </article>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="processBlock">
      <div className="sectionHeading">
        <p className="miniLabel">How It Works</p>
        <h2>Four steps to better water</h2>
      </div>
      <div className="stepsGrid">
        {steps.map(([number, title, text]) => (
          <article className="stepCard" key={number}>
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  const [activeArea, setActiveArea] = useState(areas[0]);
  const [areaSearch, setAreaSearch] = useState("");
  const filteredAreas = areas.filter((area) =>
    area.name.toLowerCase().includes(areaSearch.trim().toLowerCase())
  );

  return (
    <section className="coverageBlock" id="areas">
      <div>
        <p className="miniLabel">Brands We Repair</p>
        <div className="brandGrid">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </div>
      <div className="areaPanel">
        <div className="areaHeader">
          <div>
            <p className="miniLabel">Service Areas</p>
            <h2>Check doorstep RO service near you</h2>
          </div>
          <span>{areas.length} areas covered</span>
        </div>
        <label className="areaSearch">
          <span>Search Area</span>
          <input
            type="search"
            placeholder="Type your area name"
            value={areaSearch}
            onChange={(event) => setAreaSearch(event.target.value)}
          />
        </label>
        <div className="areaGrid" aria-label="Service area list">
          {filteredAreas.map((area) => (
            <button
              className={activeArea.name === area.name ? "active" : ""}
              type="button"
              key={area.name}
              onClick={() => setActiveArea(area)}
            >
              {area.name}
            </button>
          ))}
          {filteredAreas.length === 0 && (
            <p className="areaEmpty">Area not listed? Call us and we will confirm availability.</p>
          )}
        </div>
        <div className="selectedAreaCard">
          <span>Selected Area</span>
          <h3>{activeArea.name}</h3>
          <p>{activeArea.note}</p>
          <div>
            <a className="primaryBtn" href="#booking">Book Visit</a>
            <a className="secondaryBtn" href={phoneHref}>Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviewsBlock">
      <div className="reviewIntro">
        <p className="miniLabel">Customer Trust</p>
        <h2>Clean service experience, every visit.</h2>
        <p>Customers choose SR Water Purifier for timely support, transparent pricing and dependable after-service care.</p>
      </div>
      <div className="ratingCard">
        <strong>4.9</strong>
        <span>★★★★★</span>
        <p>Based on 2300+ Google reviews</p>
      </div>
      <article className="quoteCard">
        <p>"Very professional service. The technician came on time and fixed our RO quickly."</p>
        <strong>- Priya Mehta</strong>
      </article>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faqBlock">
      <div className="sectionHeading">
        <div>
          <p className="miniLabel">Help Center</p>
          <h2>Quick answers before you book</h2>
        </div>
      </div>
      <div className="faqList">
        {faqs.map(([question, answer], index) => (
          <article className="faqItem" key={question}>
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <span>{question}</span>
              <strong>{openIndex === index ? "-" : "+"}</strong>
            </button>
            {openIndex === index && <p>{answer}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerIntro">
        <Logo light />
        <p>SR Water Purifier delivers RO repair, maintenance, installation and AMC service across NCR.</p>
        <div className="footerBadges">
          <span>Same-day support</span>
          <span>Genuine parts</span>
          <span>Doorstep visit</span>
        </div>
        <strong>Owner: Govind Singh</strong>
      </div>
      <div className="footerLinks">
        <div>
          <h3>Services</h3>
          <a href="#services">RO Repair</a>
          <a href="#services">RO Maintenance</a>
          <a href="#services">New Installation</a>
          <a href="#plans">AMC Plans</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#products">Products</a>
          <a href="#areas">Service Areas</a>
          <a href="#booking">Book Service</a>
          <a href="#">Back to Top</a>
        </div>
      </div>
      <div className="footerContact">
        <h3>Contact</h3>
        <a className="footerContactCard" href={phoneHref}>
          <span>Call</span>
          <strong>{phoneNumber}</strong>
        </a>
        <a className="footerContactCard" href={alternatePhoneHref}>
          <span>Alternate Mobile</span>
          <strong>{alternatePhoneNumber}</strong>
        </a>
        <a className="footerContactCard" href={whatsappHref}>
          <span>WhatsApp</span>
          <strong>Chat with us</strong>
        </a>
        <a className="footerContactCard" href={emailHref}>
          <span>Email</span>
          <strong>{emailAddress}</strong>
        </a>
        <div className="footerMeta">
          <span>Mon - Sun, 9:00 AM - 8:00 PM</span>
          <span>D252 Magalapuri Bus Stand Near Mother Dairy, Pincode 110045</span>
        </div>
      </div>
      <div className="footerBottom">
        <span>(c) SR Water Purifier</span>
        <div>
          <a href="#booking">Request Callback</a>
          <a href={phoneHref}>Call Now</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floatingActions">
      <a href={whatsappHref}>WhatsApp</a>
      <a href={phoneHref}>Call</a>
    </div>
  );
}

function PromoPopup() {
  const [isOpen, setIsOpen] = useState(() => sessionStorage.getItem("srPromoClosed") !== "true");

  function closePopup() {
    sessionStorage.setItem("srPromoClosed", "true");
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popupOverlay" role="presentation">
      <section className="promoPopup" role="dialog" aria-modal="true" aria-labelledby="promo-title">
        <button className="popupClose" type="button" aria-label="Close popup" onClick={closePopup}>
          x
        </button>
        <div className="popupBrand">
          <img src={logo} alt="SR Water Purifier logo" />
          <span>SR Water Purifier</span>
        </div>
        <p className="popupKicker">Advanced RO + UV water purifier service</p>
        <h2 id="promo-title">Pure Water, Healthy Life!</h2>
        <p className="popupText">
          Get expert RO repair, installation and AMC support with genuine parts and same-day assistance.
        </p>
        <div className="popupChecks">
          <span>99% germ protection support</span>
          <span>Safe and healthy drinking water</span>
          <span>Service by Govind Singh's team</span>
        </div>
        <div className="popupContact">
          <span>Contact</span>
          <strong>{phoneNumber}</strong>
        </div>
        <div className="popupActions">
          <a className="primaryBtn" href={phoneHref}>Call Now</a>
          <a className="secondaryBtn" href="#booking" onClick={closePopup}>Book Service</a>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <main className="pageShell">
        <Header />
        <Hero />
        <Products />
        <Services />
        <Offers />
        <Process />
        <Coverage />
        <Reviews />
        <FAQ />
        <Footer />
      </main>
      <FloatingActions />
      <PromoPopup />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
