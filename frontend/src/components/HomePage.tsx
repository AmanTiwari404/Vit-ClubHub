import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Technical",
    image: "https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg",
  },
  {
    name: "Non-Technical",
    image: "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg",
  },
  {
    name: "Regional",
    image: "https://images.pexels.com/photos/842220/pexels-photo-842220.jpeg",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <img src="/images/VitBhopal.png" alt="VIT Bhopal" className="h-10" />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-full"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </nav>

      {/* Logo and description */}
      <div className="text-center mt-4">
        <img src="/images/VitClubHub.png" alt="Club Hub Logo" className="h-20 mx-auto" />
        <p className="text-gray-600 text-lg">Get all the club events updates and details here.</p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {filtered.length > 0 ? (
          filtered.map((cat, index) => (
            <div key={index} onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)} className="cursor-pointer">
              <Card username={cat.name} btnText="Explore Clubs" imgSrc={cat.image} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No categories found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
