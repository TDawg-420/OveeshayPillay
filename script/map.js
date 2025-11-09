function initMap() {
    const durban = { lat: -29.8587, lng: 31.0218 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: durban,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#f5f5f5" }] },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#0b3954" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#2c2c2c" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#a3a3a3" }]
            }
        ]
    });

    const areas = [
        { name: "Durban North", lat: -29.7848, lng: 31.0416 },
        { name: "Umhlanga", lat: -29.7264, lng: 31.0672 },
        { name: "Pinetown", lat: -29.8195, lng: 30.8753 },
        { name: "Westville", lat: -29.8286, lng: 30.9377 },
        { name: "Chatsworth", lat: -29.9171, lng: 30.8925 },
        { name: "Amanzimtoti", lat: -30.0503, lng: 30.8901 },
        { name: "Hillcrest", lat: -29.7792, lng: 30.7678 },
        { name: "Bluff", lat: -29.9268, lng: 31.0002 }
    ];

    areas.forEach(area => {
        const marker = new google.maps.Marker({
            position: { lat: area.lat, lng: area.lng },
            map,
            title: area.name,
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png"
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="font-weight:bold;color:#ffb347;">${area.name}</div>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
