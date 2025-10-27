function initMap() {
  // ზუსტი კოორდინატები
  const location = { lat: 41.715138, lng: 44.116 }; // შენს iframe URL-ის მიხედვით

  // მაპის შექმნა
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17, // ახლო ხედისთვის
    center: location,
  });

  // მარკერის დამატება
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "გორი, ალექსანდრე პუშკინის 2",
  });
}
// ________________________________________________________________ტექსტი_______________________________________________________________________
const tabButtons = document.querySelectorAll(".tab-btn");
const tabItems = document.querySelectorAll(".tab-item");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // ღილაკების active სტატუსის გადართვა
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // კონტენტის ჩვენება მხოლოდ არჩეულზე
    const tabTarget = button.getAttribute("data-tab");
    tabItems.forEach(item => {
      item.classList.remove("active");
      if (item.id === tabTarget) {
        item.classList.add("active");
      }
    });
  });
});
// ___________________________________________________________აქციები____________________________________________________________________________
const openBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// გახსნა
openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// დახურვა ღილაკით
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// დახურვა ფონის დააჭერით
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
