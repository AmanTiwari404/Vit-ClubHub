import Event from "../models/Event.js";

// Create Event
export const createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const { club } = req.user; // comes from JWT
  try {
    const newEvent = await Event.create({
      title,
      description,
      date,
      club,
      createdBy: req.user.id,
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Events for Logged-in Admin’s Club
export const getClubEvents = async (req, res) => {
  const { club } = req.user;
  try {
    const events = await Event.find({ club }).sort({ date: -1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
