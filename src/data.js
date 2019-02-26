import React from 'react'
import ReactDOM from 'react-dom'
/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */

export const storeProducts = [
  {
    id: 1,
    title: "The Razer Blade 14 Inch",
    img: "img/laptop-1.jpg",
    price: 2.399,
    company: "GOOGLE",
    info:
    <React.Fragment>
      <ul>
        <li>NVIDIA GeForce GTX 1060</li>
        <li>Intel Core i7 7th Gen i7 7700HQ 2.80GHz</li>
        <li>512GB PCIe SSD and 16GB RAM</li>
        <li>Extremely thin 0.7" CNC aluminum chassis, weighing in only at 4.16 lbs</li>
        <li>Get the best gaming experience with an incredible 14" IPS Full HD display</li>
        <li>Thunderbolt 3</li>
        <li>VR Ready</li>
      </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: "The Razer Blade 15 Inch",
    img: "img/laptop-2.jpg",
    price: 1.599,
    company: "SAMSUNG",
    info:
    <React.Fragment>
    <ul>
      <li>GeForce GTX 1060 Max-Q Design 6 GB</li>
      <li>Intel Core i7 8th Gen 8750H 2.20 GHz</li>
      <li>16 GB Memory 2 TB HDD 256 GB SSD</li>
      <li>15.6" 1920 x 1080</li>
      <li>13.98" x 9.25" x 0.78" 4.48 lbs.</li>
      <li>3 x USB 3.1</li>
      <li>1 x USB Type-C</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "Razer Lancehead",
    img: "img/mouse-1.jpg",
    price: 56,
    company: "htc",
    info:
    <React.Fragment>
    <ul>
      <li>True 16,000 DPI 5G optical sensor</li>
      <li>Up to 450 inches per second IPS / 50 G acceleration</li>
      <li>On-The-Fly Sensitivity Adjustment</li>
      <li>Razer Mechanical Mouse Switches</li>
      <li>Gaming-grade tactile scroll wheel</li>
      <li>Ambidextrous design with enhanced rubber side grips</li>
      <li>Razer Chroma lighting with true 16.8 million customizable color options</li>
      <li>Inter-device color synchronization</li>
      <li>Nine independently programmable Hyperesponse buttons</li>
      <li>1000 Hz Ultrapolling</li>
      <li>Razer Synapse 3</li>
      <li>2.1 m / 7 ft braided fiber cable</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "RAZER Mamba",
    img: "img/mouse-2.jpg",
    price: 87,
    company: "htc",
    info:
    <React.Fragment>
    <ul>
      <li>On-The-Fly Sensitivity Adjustment</li>
      <li>Chroma lighting with true 16.8 million customizable color options</li>
      <li>Inter-device color synchronization</li>
      <li>Nine independently programmable buttons with tilt-click scroll</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    title: "Razer BlackWidow",
    img: "img/keyboard-1.jpg",
    price: 160,
    company: "htc",
    info:
    <React.Fragment>
    <ul>
      <li>Multi-award winning Razer Mechanical Switches - Designed for Gaming</li>
      <li>Multi-Function Digital Dial - With dedicated media controls</li>
      <li>Fully Controllable Keys - To customize individual key lighting, bindings and macros</li>
      <li>Ergonomic wrist rest for extended gaming comfort</li>
      <li>Hybrid On-Board Memory and Cloud Storage - Access personalized settings anywhere</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "Razer Kraken",
    img: "img/headphones-1.jpg",
    price: 100,
    company: "apple",
    info:
    <React.Fragment>
    <ul>
      <li>Full Audio controls</li>
      <li>Thx spatial Audio</li>
      <li>Game / chat balance</li>
      <li>Custom-tuned 50 mm drivers</li>
      <li>Cooling gel-infused cushions</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "Razer Firefly",
    img: "img/mouse-pad-1.jpg",
    price: 60,
    company: "apple",
    info:
    <React.Fragment>
    <ul>
      <li>Cloth surface for balanced gameplay</li>
      <li>Textured weave, optimized for highly responsive tracking</li>
      <li>Razer Chroma customizable lighting</li>
      <li>Non-slip rubber base</li>
      <li>Razer Synapse enabled</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "Razer Phone",
    img: "img/phone-1.jpg",
    price: 490,
   
    info:
    <React.Fragment>
    <ul>
      <li>120HZ ULTRAMOTION DISPLAY: zero lag or stuttering - just fluid, buttery smooth motion content for you to enjoy</li>
      <li>DOLBY ATMOS POWERED AND THX CERTIFIED: a cinematic sound experience all around you reproduced through dual front-firing speakers and dual amplifiers</li>
      <li>POWERED BY QUALCOMM SNAPDRAGON 835, 8GB OF RAM AND A 4000MAH BATTERY and stereo front-facing speakers, dual amplifiers, audio adapter with THX certified DAC</li>
    </ul>
    </React.Fragment>,
    inCart: false,
    count: 0,
    total: 0
  }
];

export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "google",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
};
