import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, Calendar, MapPin, Users, Clock, LogOut, Mail, User, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Club() {
  const { clubId } = useParams<{ clubId: string }>();
  const { user, registerForEvent, logout, clubs } = useAuth();
  const navigate = useNavigate();
  const club = clubs.find(c => c.id === clubId);

  if (!club) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200/50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Not Found</h2>
          <p className="text-gray-600 mb-6">The club you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to={`/category/${club.category}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to {club.category} clubs
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Club Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{club.name}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{club.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
                  <div className="flex items-center mb-2">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-900">Faculty Coordinator</h3>
                  </div>
                  <p className="text-blue-800">{club.facultyCoordinator}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200/50">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-semibold text-purple-900">Contact</h3>
                  </div>
                  <p className="text-purple-800">{club.email}</p>
                </div>
              </div>
            </div>
            
            {club.image && (
              <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full lg:w-64 h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="text-sm text-gray-500">
              {club.events.length} events available
            </div>
          </div>
          
          <div className="space-y-6">
            {club.events.map(event => {
              const isRegistered = user?.registeredEvents?.includes(event.id);
              const isDeadlinePassed = new Date(event.registrationDeadline) < new Date();
              const isFull = (event.registeredStudents?.length || 0) >= (event.capacity || 0);

              return (
                <div key={event.id} className="bg-white/70 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{event.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                          event.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                          <div>
                            <div className="font-medium">{new Date(event.date).toLocaleDateString()}</div>
                            <div className="text-sm text-gray-500">{new Date(event.date).toLocaleTimeString()}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                          <div>
                            <div className="font-medium">{event.venue}</div>
                            <div className="text-sm text-gray-500">Venue</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Users className="w-5 h-5 mr-3 text-gray-400" />
                          <div>
                            <div className="font-medium">{event.registeredStudents?.length || 0} / {event.capacity}</div>
                            <div className="text-sm text-gray-500">Registered</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-gray-400" />
                          <div>
                            <div className="font-medium">{new Date(event.registrationDeadline).toLocaleDateString()}</div>
                            <div className="text-sm text-gray-500">Deadline</div>
                          </div>
                        </div>
                      </div>

                      {event.requirements && event.requirements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Requirements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.requirements.map((req, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-4">
                        {isRegistered ? (
                          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-xl">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Successfully Registered
                          </div>
                        ) : (
                          <button
                            onClick={() => handleRegister(event.id)}
                            disabled={isDeadlinePassed || isFull}
                            className={`inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-xl transition-all duration-200 ${
                              isDeadlinePassed || isFull
                                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                                : 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                            }`}
                          >
                            {isDeadlinePassed ? 'Registration Closed' : isFull ? 'Event Full' : 'Register Now'}
                          </button>
                        )}
                        
                        {/* Progress Bar */}
                        <div className="flex-1 max-w-xs">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Capacity</span>
                            <span>{Math.round(((event.registeredStudents?.length || 0) / event.capacity) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(((event.registeredStudents?.length || 0) / event.capacity) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {event.image && (
                      <div className="mt-6 xl:mt-0 xl:ml-8 flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full xl:w-64 h-40 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {club.events.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events scheduled</h3>
              <p className="text-gray-600">
                This club hasn't scheduled any events yet. Check back later for updates!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}