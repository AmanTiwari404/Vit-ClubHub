import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { categories } from '../data';
import { Calendar, Star, BookOpen, ChevronRight, LogOut, TrendingUp, Users, Clock, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function StudentDashboard() {
  const { user, getAllEvents, registerForEvent, logout, clubs } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const upcomingEvents = getAllEvents();
  const navigate = useNavigate();

  const filteredClubs = selectedCategory
    ? clubs.filter(club => club.category === selectedCategory)
    : clubs;

  const handleRegister = async (eventId: string) => {
    try {
      await registerForEvent(eventId);
    } catch (error) {
      console.error('Failed to register for event:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const registeredEventsCount = user?.registeredEvents?.length || 0;
  const totalEvents = upcomingEvents.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user?.name || 'Student'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                <div className="text-xs text-gray-500">{user?.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white/80 backdrop-blur-xl overflow-hidden shadow-lg rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Registered Events
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900">
                      {registeredEventsCount}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl overflow-hidden shadow-lg rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Available Clubs
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900">
                      {clubs.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl overflow-hidden shadow-lg rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Events
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900">
                      {totalEvents}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl overflow-hidden shadow-lg rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Participation Rate
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900">
                      {totalEvents > 0 ? Math.round((registeredEventsCount / totalEvents) * 100) : 0}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Club Categories */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl overflow-hidden border border-gray-200/50 mb-8">
          <div className="px-6 py-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Club Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                    selectedCategory === category.id
                      ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg'
                      : 'border-gray-200 hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 bg-white/50'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="mt-3 text-xs text-indigo-600 font-medium">
                    {clubs.filter(club => club.category === category.id).length} clubs available
                  </div>
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Clubs` : 'All Clubs'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClubs.map(club => (
                <Link
                  key={club.id}
                  to={`/club/${club.id}`}
                  className="block bg-white/70 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-5">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {club.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{club.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {club.events.length} events
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl border border-gray-200/50">
          <div className="px-6 py-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="overflow-hidden">
              <div className="grid gap-4">
                {upcomingEvents.slice(0, 6).map((event) => {
                  const club = clubs.find(c => 
                    c.events.some(e => e.id === event.id)
                  );
                  const isRegistered = user?.registeredEvents?.includes(event.id);
                  const isDeadlinePassed = new Date(event.registrationDeadline) < new Date();
                  const isFull = (event.registeredStudents?.length || 0) >= (event.capacity || 0);

                  return (
                    <div key={event.id} className="bg-white/70 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
                              <Link 
                                to={`/club/${club?.id}`}
                                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                              >
                                {club?.name}
                              </Link>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                              event.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {event.status}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-sm">{event.venue}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-sm">{event.registeredStudents?.length || 0} / {event.capacity || 0}</span>
                            </div>
                          </div>

                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <Clock className="w-4 h-4 mr-2" />
                            Registration deadline: {new Date(event.registrationDeadline).toLocaleDateString()}
                          </div>

                          {event.requirements && event.requirements.length > 0 && (
                            <div className="mb-4">
                              <span className="text-xs font-medium text-gray-500">Requirements:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {event.requirements.map((req, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                                    {req}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="lg:ml-6 flex-shrink-0">
                          {isRegistered ? (
                            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-xl">
                              ✓ Registered
                            </span>
                          ) : (
                            <button
                              onClick={() => handleRegister(event.id)}
                              disabled={isDeadlinePassed || isFull}
                              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                isDeadlinePassed || isFull
                                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                              }`}
                            >
                              {isDeadlinePassed ? 'Registration Closed' : isFull ? 'Event Full' : 'Register Now'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}