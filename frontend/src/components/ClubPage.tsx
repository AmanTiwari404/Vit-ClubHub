import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  club: string;
}

function ClubPage() {
  const { clubName } = useParams<{ clubName: string }>();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const filtered = res.data.filter(
          (event: Event) =>
            event.club.toLowerCase().replace(/\s+/g, "-") === clubName
        );

        setEvents(filtered);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, [clubName]);

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="bg-gray-300 px-4 py-2 rounded">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mt-4 capitalize">{clubName?.replace("-", " ")}</h1>

      <div className="mt-6">
        {events.length > 0 ? (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event._id} className="p-4 bg-white shadow rounded">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p>{event.description}</p>
                <p className="text-gray-500 text-sm">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No events found for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ClubPage;
