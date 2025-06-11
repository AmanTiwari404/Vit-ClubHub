import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Event, Club } from '../types';
import { clubs as initialClubs } from '../data';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  clubs: Club[];
  login: (email: string, password: string) => void;
  logout: () => void;
  registerForEvent: (eventId: string) => void;
  updateEvent: (eventId: string, updatedEvent: Partial<Event>) => void;
  addEvent: (newEvent: Omit<Event, 'id'>) => void;
  deleteEvent: (eventId: string) => void;
  getClubEvents: (clubId: string) => Event[];
  getAllEvents: () => Event[];
  refreshData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Load clubs from localStorage or use initial data
const loadClubs = (): Club[] => {
  const savedClubs = localStorage.getItem('clubs');
  return savedClubs ? JSON.parse(savedClubs) : initialClubs;
};

// Club admin accounts with their respective club IDs
const mockUsers: User[] = [
  // Technical Clubs
  {
    id: 'coding-admin',
    email: 'coding.club@vitbhopal.ac.in',
    name: 'Coding Club Admin',
    role: 'admin',
    clubId: 'codingclub',
    registeredEvents: []
  },
  {
    id: 'robotics-admin',
    email: 'robotics.club@vitbhopal.ac.in',
    name: 'Robotics Club Admin',
    role: 'admin',
    clubId: 'roboticsclub',
    registeredEvents: []
  },
  {
    id: 'aiml-admin',
    email: 'aiml.club@vitbhopal.ac.in',
    name: 'AI/ML Club Admin',
    role: 'admin',
    clubId: 'aimlclub',
    registeredEvents: []
  },
  {
    id: 'cybersec-admin',
    email: 'cybersec.club@vitbhopal.ac.in',
    name: 'Cybersecurity Club Admin',
    role: 'admin',
    clubId: 'cybersecclub',
    registeredEvents: []
  },

  // Non-Technical Clubs
  {
    id: 'art-admin',
    email: 'art.club@vitbhopal.ac.in',
    name: 'Art Club Admin',
    role: 'admin',
    clubId: 'artclub',
    registeredEvents: []
  },
  {
    id: 'literary-admin',
    email: 'literary.club@vitbhopal.ac.in',
    name: 'Literary Club Admin',
    role: 'admin',
    clubId: 'literaryclub',
    registeredEvents: []
  },
  {
    id: 'drama-admin',
    email: 'drama.club@vitbhopal.ac.in',
    name: 'Drama Club Admin',
    role: 'admin',
    clubId: 'dramaclub',
    registeredEvents: []
  },
  {
    id: 'photography-admin',
    email: 'photography.club@vitbhopal.ac.in',
    name: 'Photography Club Admin',
    role: 'admin',
    clubId: 'photographyclub',
    registeredEvents: []
  },
  {
    id: 'dance-admin',
    email: 'dance.club@vitbhopal.ac.in',
    name: 'Dance Club Admin',
    role: 'admin',
    clubId: 'danceclub',
    registeredEvents: []
  },

  // Regional Clubs
  {
    id: 'maharashtra-admin',
    email: 'maharashtra.club@vitbhopal.ac.in',
    name: 'Maharashtra Club Admin',
    role: 'admin',
    clubId: 'maharashtraclub',
    registeredEvents: []
  },
  {
    id: 'southindian-admin',
    email: 'southindian.club@vitbhopal.ac.in',
    name: 'South Indian Club Admin',
    role: 'admin',
    clubId: 'southindianclub',
    registeredEvents: []
  },
  {
    id: 'gujarat-admin',
    email: 'gujarat.club@vitbhopal.ac.in',
    name: 'Gujarat Club Admin',
    role: 'admin',
    clubId: 'gujaratclub',
    registeredEvents: []
  },
  {
    id: 'bengal-admin',
    email: 'bengal.club@vitbhopal.ac.in',
    name: 'Bengali Club Admin',
    role: 'admin',
    clubId: 'bengalclub',
    registeredEvents: []
  },
  {
    id: 'rajasthan-admin',
    email: 'rajasthan.club@vitbhopal.ac.in',
    name: 'Rajasthan Club Admin',
    role: 'admin',
    clubId: 'rajasthanclub',
    registeredEvents: []
  },
  
  // Student account
  {
    id: 'student1',
    email: 'student@vitbhopal.ac.in',
    name: 'John Doe',
    role: 'student',
    registeredEvents: []
  }
];

// Load user data from localStorage
const loadUser = () => {
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : null;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(loadUser);
  const [clubs, setClubs] = useState<Club[]>(loadClubs);

  // Save clubs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('clubs', JSON.stringify(clubs));
  }, [clubs]);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const refreshData = async () => {
    // For local state, this is just a placeholder
    // In a real app, this would fetch fresh data from the server
  };

  const login = (email: string, password: string) => {
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password) {
      setUser(foundUser);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  const registerForEvent = (eventId: string) => {
    if (!user) return;

    setClubs(prevClubs => {
      return prevClubs.map(club => ({
        ...club,
        events: club.events.map(event => {
          if (event.id === eventId) {
            return {
              ...event,
              registeredStudents: [...(event.registeredStudents || []), user.id]
            };
          }
          return event;
        })
      }));
    });

    setUser(prevUser => {
      if (!prevUser) return null;
      const updatedUser = {
        ...prevUser,
        registeredEvents: [...(prevUser.registeredEvents || []), eventId]
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const updateEvent = (eventId: string, updatedEvent: Partial<Event>) => {
    if (!user || user.role !== 'admin') return;

    setClubs(prevClubs => {
      return prevClubs.map(club => {
        if (club.id !== user.clubId) return club;

        return {
          ...club,
          events: club.events.map(event => {
            if (event.id === eventId) {
              return {
                ...event,
                ...updatedEvent,
                registeredStudents: event.registeredStudents || []
              };
            }
            return event;
          })
        };
      });
    });
  };

  const addEvent = (newEvent: Omit<Event, 'id'>) => {
    if (!user || user.role !== 'admin' || !user.clubId) return;

    const eventWithId: Event = {
      ...newEvent,
      id: `event-${Date.now()}`,
      registeredStudents: [],
      clubId: user.clubId
    };

    setClubs(prevClubs => {
      return prevClubs.map(club => {
        if (club.id !== user.clubId) return club;

        return {
          ...club,
          events: [...club.events, eventWithId]
        };
      });
    });
  };

  const deleteEvent = (eventId: string) => {
    if (!user || user.role !== 'admin') return;

    setClubs(prevClubs => {
      return prevClubs.map(club => {
        if (club.id !== user.clubId) return club;

        return {
          ...club,
          events: club.events.filter(event => event.id !== eventId)
        };
      });
    });

    // Also remove this event from any user's registeredEvents
    if (user) {
      setUser(prevUser => {
        if (!prevUser) return null;
        
        const updatedUser = {
          ...prevUser,
          registeredEvents: prevUser.registeredEvents?.filter(id => id !== eventId) || []
        };
        
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return updatedUser;
      });
    }
  };

  const getClubEvents = (clubId: string) => {
    const club = clubs.find(c => c.id === clubId);
    return club?.events || [];
  };

  const getAllEvents = () => {
    return clubs.flatMap(club => club.events);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      clubs,
      login, 
      logout,
      registerForEvent,
      updateEvent,
      addEvent,
      deleteEvent,
      getClubEvents,
      getAllEvents,
      refreshData
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}