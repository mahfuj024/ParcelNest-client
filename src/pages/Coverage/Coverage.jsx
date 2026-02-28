// Coverage.jsx
import React, { useState, useEffect, useRef } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [30, 30],
});

// Map Fly Controller
function MapController({ selectedDistrict }) {
  const map = useMap();

  useEffect(() => {
    if (selectedDistrict) {
      map.flyTo([selectedDistrict.latitude, selectedDistrict.longitude], 10, {
        duration: 1.5,
      });
    }
  }, [selectedDistrict, map]);

  return null;
}

function Coverage() {
  const axiosPublic = useAxiosPublic();

  const [districtData, setDistrictData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const markerRefs = useRef({});

  // Load Backend Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get("/warehouses");
        const validData = res.data.filter(
          (d) => d.latitude && d.longitude && d.district
        );
        setDistrictData(validData);
      } catch (err) {
        console.error("Error loading districts:", err);
      }
    };
    fetchData();
  }, [axiosPublic]);

  // Search Function (Partial Match)
  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = search.trim().toLowerCase();

    if (!searchText) return;

    const found = districtData.find((d) =>
      d.district.toLowerCase().includes(searchText)
    );

    if (found) {
      setSelectedDistrict(found);

      // Open popup
      const marker = markerRefs.current[found.district];
      if (marker) marker.openPopup();
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="min-h-screen mt-4 md:mt-8 lg:mt-12 bg-white rounded-xl md:rounded-2xl py-6 md:py-10 lg:py-20 px-6 md:px-9 lg:px-28">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        We are available in {districtData.length} districts
      </h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="mt-6 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search district"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input border-none bg-[#CBD5E14D] w-56 md:w-72 rounded-full"
        />
        <button className="btn bg-primary rounded-full px-6 font-bold border-none">
          Search
        </button>
      </form>

      <hr className="border-t border-[#0000001A] mt-6" />

      <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mt-6">
        We deliver almost all over Bangladesh
      </h2>

      {/* Map */}
      <div className="max-w-full h-[435px] md:h-[400px] lg:h-[506px] rounded-lg overflow-hidden shadow-lg z-0 relative mt-4 md:mt-6 lg:mt-12">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {districtData.map((d) => (
            <Marker
              key={d.district}
              position={[d.latitude, d.longitude]}
              icon={customIcon}
              ref={(el) => (markerRefs.current[d.district] = el)}
            >
              <Popup>
                <h3 className="font-bold text-lg text-primary">{d.district}</h3>
                <p>Region: {d.region}</p>
              </Popup>
            </Marker>
          ))}

          <MapController selectedDistrict={selectedDistrict} />
        </MapContainer>
      </div>
    </div>
  );
}

export default Coverage;