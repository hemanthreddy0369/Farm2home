document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const main = document.querySelector(".main");
  const globeContainer = document.getElementById("globe-container");
  const searchCropBtn = document.getElementById("searchCrop");
  const findFarmersBtn = document.getElementById("findFarmers");
  const cropInput = document.getElementById("cropInput");
  const locationInput = document.getElementById("locationInput");
  const resultsDiv = document.getElementById("results");
  const locationSection = document.querySelector(".location");
  
  // 🌍 Animated Globe
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(200, 200);
  globeContainer.appendChild(renderer.domElement);
  
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"),
  });
  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);
  camera.position.z = 2.5;
  
  const animate = () => {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002;
    renderer.render(scene, camera);
  };
  animate();
  
  // ✨ Splash transition
  gsap.to(".splash", {
    opacity: 0,
    delay: 2.5,
    duration: 1,
    onComplete: () => {
      splash.classList.add("hidden");
      main.classList.remove("hidden");
    },
  });
  
  // 🌾 Farmers Database (5 per crop)
  const farmersDB = {
    rice: {
      ongole: [
        { name: "Ravi Kumar", phone: "9876543210", location: "Ongole", rating: 4.8, price: 45, map: "https://maps.google.com/?q=Ongole" },
        { name: "Suresh Reddy", phone: "9012345678", location: "Ongole", rating: 4.6, price: 48, map: "https://maps.google.com/?q=Ongole" },
        { name: "Anil Goud", phone: "9123456789", location: "Ongole", rating: 4.9, price: 50, map: "https://maps.google.com/?q=Ongole" },
        { name: "Kiran Varma", phone: "9098765432", location: "Ongole", rating: 4.7, price: 46, map: "https://maps.google.com/?q=Ongole" },
        { name: "Manoj Raju", phone: "9001234567", location: "Ongole", rating: 4.5, price: 47, map: "https://maps.google.com/?q=Ongole" },
      ],
      guntur: [
        { name: "Sai Krishna", phone: "9812345678", location: "Guntur", rating: 4.8, price: 49, map: "https://maps.google.com/?q=Guntur" },
        { name: "Vamsi Reddy", phone: "9823456789", location: "Guntur", rating: 4.7, price: 47, map: "https://maps.google.com/?q=Guntur" },
        { name: "Ramu Naidu", phone: "9834567890", location: "Guntur", rating: 4.9, price: 52, map: "https://maps.google.com/?q=Guntur" },
        { name: "Chandu Rao", phone: "9845678901", location: "Guntur", rating: 4.6, price: 46, map: "https://maps.google.com/?q=Guntur" },
        { name: "Murali Krishna", phone: "9856789012", location: "Guntur", rating: 4.5, price: 44, map: "https://maps.google.com/?q=Guntur" },
      ],
    },
    
    wheat: {
      hyderabad: [
        { name: "Vikas Naidu", phone: "9922334455", location: "Hyderabad", rating: 4.7, price: 40, map: "https://maps.google.com/?q=Hyderabad" },
        { name: "Mahesh Rao", phone: "9933445566", location: "Hyderabad", rating: 4.8, price: 42, map: "https://maps.google.com/?q=Hyderabad" },
        { name: "Raghav Reddy", phone: "9944556677", location: "Hyderabad", rating: 4.6, price: 43, map: "https://maps.google.com/?q=Hyderabad" },
        { name: "Ajay Kumar", phone: "9955667788", location: "Hyderabad", rating: 4.9, price: 45, map: "https://maps.google.com/?q=Hyderabad" },
        { name: "Sanjay Goud", phone: "9966778899", location: "Hyderabad", rating: 4.5, price: 41, map: "https://maps.google.com/?q=Hyderabad" },
      ],
      vijayawada: [
        { name: "Ravi Teja", phone: "9977889900", location: "Vijayawada", rating: 4.8, price: 46, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Suresh Babu", phone: "9988990011", location: "Vijayawada", rating: 4.7, price: 44, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Praveen Kumar", phone: "9999001122", location: "Vijayawada", rating: 4.9, price: 48, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Anand Reddy", phone: "9001112233", location: "Vijayawada", rating: 4.6, price: 42, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Krishna Rao", phone: "9011223344", location: "Vijayawada", rating: 4.5, price: 40, map: "https://maps.google.com/?q=Vijayawada" },
      ],
    },
    
    maize: {
      nellore: [
        { name: "Bharath Naidu", phone: "9123456701", location: "Nellore", rating: 4.8, price: 55, map: "https://maps.google.com/?q=Nellore" },
        { name: "Naveen Rao", phone: "9223456702", location: "Nellore", rating: 4.7, price: 53, map: "https://maps.google.com/?q=Nellore" },
        { name: "Lokesh Goud", phone: "9323456703", location: "Nellore", rating: 4.9, price: 58, map: "https://maps.google.com/?q=Nellore" },
        { name: "Harsha Kumar", phone: "9423456704", location: "Nellore", rating: 4.6, price: 52, map: "https://maps.google.com/?q=Nellore" },
        { name: "Ramesh Reddy", phone: "9523456705", location: "Nellore", rating: 4.5, price: 50, map: "https://maps.google.com/?q=Nellore" },
      ],
    },
    
    chilli: {
      khammam: [
        { name: "Pavan Kumar", phone: "9623456701", location: "Khammam", rating: 4.9, price: 120, map: "https://maps.google.com/?q=Khammam" },
        { name: "Rohit Reddy", phone: "9723456702", location: "Khammam", rating: 4.8, price: 110, map: "https://maps.google.com/?q=Khammam" },
        { name: "Ankit Goud", phone: "9823456703", location: "Khammam", rating: 4.7, price: 115, map: "https://maps.google.com/?q=Khammam" },
        { name: "Dinesh Naidu", phone: "9923456704", location: "Khammam", rating: 4.6, price: 118, map: "https://maps.google.com/?q=Khammam" },
        { name: "Karthik Rao", phone: "9023456705", location: "Khammam", rating: 4.5, price: 112, map: "https://maps.google.com/?q=Khammam" },
      ],
    },
    
    tomato: {
      vijayawada: [
        { name: "Prasad Rao", phone: "9034567810", location: "Vijayawada", rating: 4.8, price: 30, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Sanjay Kumar", phone: "9134567820", location: "Vijayawada", rating: 4.7, price: 32, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Venkat Reddy", phone: "9234567830", location: "Vijayawada", rating: 4.9, price: 28, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Rajesh Goud", phone: "9334567840", location: "Vijayawada", rating: 4.6, price: 31, map: "https://maps.google.com/?q=Vijayawada" },
        { name: "Sunil Naidu", phone: "9434567850", location: "Vijayawada", rating: 4.5, price: 29, map: "https://maps.google.com/?q=Vijayawada" },
      ],
    },
  };
  
  // 🔍 Crop Search
  searchCropBtn.addEventListener("click", () => {
    const crop = cropInput.value.trim().toLowerCase();
    if (!crop) return alert("Please enter a crop name 🌾");
    if (farmersDB[crop]) locationSection.classList.remove("hidden");
    else {
      resultsDiv.innerHTML = `<p>No data found for crop <b>${crop}</b>.</p>`;
      locationSection.classList.add("hidden");
    }
  });
  
  // 📍 Find Farmers
  findFarmersBtn.addEventListener("click", () => {
    const crop = cropInput.value.trim().toLowerCase();
    const location = locationInput.value.trim().toLowerCase();
    if (!crop || !location) return alert("Please enter both crop and location 🌾📍");
    
    const farmers = farmersDB[crop]?.[location];
    if (!farmers) {
      resultsDiv.innerHTML = `<p>No farmers found near <b>${location}</b> for ${crop} ❌</p>`;
      return;
    }
    
    resultsDiv.innerHTML = farmers
      .map(
        (f) => `
        <div class="farmer-card">
          <h3>👨‍🌾 ${f.name}</h3>
          <p>📞 <b>${f.phone}</b></p>
          <p>📍 Location: <b>${f.location}</b></p>
          <p>⭐ Rating: <b>${f.rating}</b> / 5</p>
          <p>💰 Price: <b>₹${f.price}</b> / kg</p>
          <a href="${f.map}" target="_blank" class="neon-map-btn">🗺️ Find on Map</a>
        </div>
      `
      )
      .join("");
  });
});
