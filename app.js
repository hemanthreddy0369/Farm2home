// 🌍 Splash Screen Animation
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".splash").style.display = "none";
    document.querySelector(".main").classList.remove("hidden");
  }, 4000);
};

// 🌎 3D Globe Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(200, 200);
document.getElementById("globe-container").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc, wireframe: true });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 🌾 Crop + 10 Fake Farmers per crop
const farmerData = {
  rice: [
    { name: "Raju", location: "Guntur", distance: "5 km", price: "₹2,300/quintal", contact: "+91 9876543210" },
    { name: "Kumar", location: "Vijayawada", distance: "12 km", price: "₹2,250/quintal", contact: "+91 9845123451" },
    { name: "Lakshmi", location: "Tenali", distance: "8 km", price: "₹2,400/quintal", contact: "+91 9887654322" },
    { name: "Anil", location: "Guntur", distance: "7 km", price: "₹2,350/quintal", contact: "+91 9700123456" },
    { name: "Suresh", location: "Vijayawada", distance: "10 km", price: "₹2,280/quintal", contact: "+91 9812345678" },
    { name: "Rajesh", location: "Tenali", distance: "9 km", price: "₹2,320/quintal", contact: "+91 9901234567" },
    { name: "Meena", location: "Guntur", distance: "6 km", price: "₹2,310/quintal", contact: "+91 9876543212" },
    { name: "Priya", location: "Vijayawada", distance: "11 km", price: "₹2,290/quintal", contact: "+91 9765432101" },
    { name: "Kavitha", location: "Tenali", distance: "5 km", price: "₹2,300/quintal", contact: "+91 9898989891" },
    { name: "Ramesh", location: "Guntur", distance: "8 km", price: "₹2,340/quintal", contact: "+91 9700456789" }
  ],
  wheat: [
    { name: "Suresh", location: "Hyderabad", distance: "7 km", price: "₹2,000/quintal", contact: "+91 9700456781" },
    { name: "Prasad", location: "Karimnagar", distance: "15 km", price: "₹1,950/quintal", contact: "+91 9912345671" },
    { name: "Anitha", location: "Warangal", distance: "9 km", price: "₹2,100/quintal", contact: "+91 9800234561" },
    { name: "Ravi", location: "Hyderabad", distance: "6 km", price: "₹2,050/quintal", contact: "+91 9876543211" },
    { name: "Deepak", location: "Karimnagar", distance: "12 km", price: "₹1,980/quintal", contact: "+91 9765432102" },
    { name: "Sunita", location: "Warangal", distance: "8 km", price: "₹2,090/quintal", contact: "+91 9898989892" },
    { name: "Manoj", location: "Hyderabad", distance: "10 km", price: "₹2,020/quintal", contact: "+91 9812345672" },
    { name: "Radha", location: "Karimnagar", distance: "14 km", price: "₹1,970/quintal", contact: "+91 9901234568" },
    { name: "Kiran", location: "Warangal", distance: "7 km", price: "₹2,080/quintal", contact: "+91 9876543213" },
    { name: "Vijay", location: "Hyderabad", distance: "9 km", price: "₹2,030/quintal", contact: "+91 9700123457" }
  ],
  maize: [
    { name: "Ramesh", location: "Nellore", distance: "10 km", price: "₹1,800/quintal", contact: "+91 9898989898" },
    { name: "Harsha", location: "Tirupati", distance: "18 km", price: "₹1,850/quintal", contact: "+91 9776543210" },
    { name: "Meena", location: "Chittoor", distance: "6 km", price: "₹1,900/quintal", contact: "+91 9765432109" },
    { name: "Sathya", location: "Nellore", distance: "12 km", price: "₹1,820/quintal", contact: "+91 9812345673" },
    { name: "Ravi", location: "Tirupati", distance: "15 km", price: "₹1,840/quintal", contact: "+91 9876543214" },
    { name: "Kavya", location: "Chittoor", distance: "8 km", price: "₹1,910/quintal", contact: "+91 9700456790" },
    { name: "Manju", location: "Nellore", distance: "11 km", price: "₹1,830/quintal", contact: "+91 9765432103" },
    { name: "Arjun", location: "Tirupati", distance: "17 km", price: "₹1,860/quintal", contact: "+91 9898989893" },
    { name: "Ananya", location: "Chittoor", distance: "9 km", price: "₹1,905/quintal", contact: "+91 9812345674" },
    { name: "Rohit", location: "Nellore", distance: "13 km", price: "₹1,815/quintal", contact: "+91 9700123458" }
  ],
  cotton: [
    { name: "Rajitha", location: "Adilabad", distance: "8 km", price: "₹7,000/quintal", contact: "+91 9654321876" },
    { name: "Mahesh", location: "Khammam", distance: "13 km", price: "₹6,850/quintal", contact: "+91 9123456789" },
    { name: "Kavitha", location: "Nizamabad", distance: "5 km", price: "₹7,200/quintal", contact: "+91 9345678901" },
    { name: "Anil", location: "Adilabad", distance: "9 km", price: "₹6,950/quintal", contact: "+91 9876543215" },
    { name: "Priya", location: "Khammam", distance: "12 km", price: "₹6,900/quintal", contact: "+91 9765432104" },
    { name: "Ravi", location: "Nizamabad", distance: "6 km", price: "₹7,150/quintal", contact: "+91 9812345675" },
    { name: "Meena", location: "Adilabad", distance: "10 km", price: "₹7,050/quintal", contact: "+91 9901234569" },
    { name: "Suresh", location: "Khammam", distance: "14 km", price: "₹6,875/quintal", contact: "+91 9876543216" },
    { name: "Kiran", location: "Nizamabad", distance: "7 km", price: "₹7,180/quintal", contact: "+91 9700456791" },
    { name: "Arjun", location: "Adilabad", distance: "8 km", price: "₹6,990/quintal", contact: "+91 9765432105" }
  ]
};

// 🌱 Search Crop
document.getElementById("searchCrop").addEventListener("click", () => {
  const crop = document.getElementById("cropInput").value.toLowerCase();
  if (crop && farmerData[crop]) {
    document.querySelector(".location").classList.remove("hidden");
  } else {
    alert("🚜 Sorry! This crop data is not available yet.");
  }
});

// 📍 Location + Show Farmers
document.getElementById("findFarmers").addEventListener("click", () => {
  const crop = document.getElementById("cropInput").value.toLowerCase();
  const locationInput = document.getElementById("locationInput").value.toLowerCase().trim();
  const results = document.getElementById("results");
  
  results.innerHTML = ""; // clear old results
  
  if (farmerData[crop]) {
    // Filter by location if provided
    const filtered = locationInput ?
      farmerData[crop].filter(farmer => farmer.location.toLowerCase().includes(locationInput)) :
      farmerData[crop];
    
    if (filtered.length === 0) {
      results.innerHTML = `<p style="color: #ff8080;">No farmers found for "${crop}" near "${locationInput}".</p>`;
    } else {
      filtered.forEach(farmer => {
        const card = document.createElement("div");
        card.classList.add("crop-card");
        card.innerHTML = `
          <h3>${farmer.name} 👨‍🌾</h3>
          <p><b>Location:</b> ${farmer.location}</p>
          <p><b>Distance:</b> ${farmer.distance}</p>
          <p><b>Crop:</b> ${crop.charAt(0).toUpperCase() + crop.slice(1)}</p>
          <p><b>Price:</b> ${farmer.price}</p>
          <p><b>Contact:</b> ${farmer.contact}</p>
          <button class="map-btn">Find on Map</button>
        `;
        results.appendChild(card);
        
        // Map button functionality
        card.querySelector(".map-btn").addEventListener("click", () => {
          const query = encodeURIComponent(farmer.location);
          window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
        });
      });
    }
  } else {
    results.innerHTML = `<p style="color: #ff8080;">No farmers found for "${crop}".</p>`;
  }
});