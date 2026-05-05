const medicines = [
    {
        name: "Panadol Extra",
        type: "Tablet",
        use: "Effective pain and fever reliever",
        status: "Available Nearby",
        statusClass: "available",
        img: "https://cdn.chefaa.com/filters:format(webp)/public/uploads/products/panadol-extra-tab-01762260859.png" 
    },
    {
        name: "Voltaren 50 mg",
        type: "Topical Gel",
        use: "Muscle and bone pain reliever",
        status: "Limited Stock",
        statusClass: "limited",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjScKX8CFkScZpimCwqYakh7GQbXzhDGvTQ&s"
    },
    {
        name: "Notussil",
        type: "Syrup",
        use: "Dry cough medicine",
        status: "Tracking",
        statusClass: "available",
        img: "https://chefaa.com/blog/wp-content/uploads/2023/01/%D9%86%D9%88%D8%AA%D9%88%D8%B3%D9%8A%D9%84-notussil-300x300.jpg"
    }
];

const grid = document.getElementById('medicineGrid');

medicines.forEach(med => {
    const card = `
        <div class="med-card">
            <img src="${med.img}" alt="${med.name}">
            <h3>${med.name}</h3>
            <p style="color: #666; font-size: 14px;">${med.type}</p>
            <p style="font-size: 14px;"><strong>${med.use}</strong></p>
            <span class="status ${med.statusClass}">
                <i class="fas fa-map-marker-alt"></i> ${med.status}
            </span>
            <button class="request-btn">Request Info</button>
        </div>
    `;
    grid.innerHTML += card;
});