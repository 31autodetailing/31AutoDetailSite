function initializeMap() {
  const mapDiv = document.getElementById("map");
  const apiKey = mapDiv.getAttribute("data-api-key");

  if (apiKey) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  window.initMap = async function () {
    const position = { lat: -25.344, lng: 131.031 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(mapDiv, {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  };
}

initializeMap();
