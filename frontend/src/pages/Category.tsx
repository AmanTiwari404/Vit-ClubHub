import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, Users, Calendar, Mail, User } from 'lucide-react';

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { clubs } = useAuth();
  const categoryClubs = clubs.filter(club => club.category === categoryId);

  const getCategoryTitle = (id: string) => {
    switch (id) {
      case 'technical': return 'Technical Clubs';
      case 'non-technical': return 'Creative & Cultural Clubs';
      case 'regional': return 'Regional & Cultural Clubs';
      default: return 'Clubs';
    }
  };

  const getCategoryDescription = (id: string) => {
    switch (id) {
      case 'technical': return 'Explore technology, coding, AI/ML, robotics, and innovation';
      case 'non-technical': return 'Express creativity through arts, literature, drama, and photography';
      case 'regional': return 'Celebrate diverse cultures and regional traditions';
      default: return 'Discover amazing clubs and communities';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {getCategoryTitle(categoryId || '')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getCategoryDescription(categoryId || '')}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              {categoryClubs.length} clubs available
            </div>
          </div>
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categoryClubs.map((club) => (
            <Link
              key={club.id}
              to={`/club/${club.id}`}
              className="group block"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:border-indigo-300">
                {/* Club Image */}
                {club.image && (
                  <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-6 overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Club Info */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {club.name}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {club.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.facultyCoordinator}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.email}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm">{club.events.length} upcoming events</span>
                    </div>
                  </div>
                  
                  {/* Events Preview */}
                  {club.events.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Upcoming Events:</h3>
                      <div className="space-y-2">
                        {club.events.slice(0, 2).map((event) => (
                          <div key={event.id} className="text-sm text-gray-600">
                            <div className="font-medium">{event.title}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(event.date).toLocaleDateString()} • {event.venue}
                            </div>
                          </div>
                        ))}
                        {club.events.length > 2 && (
                          <div className="text-xs text-indigo-600 font-medium">
                            +{club.events.length - 2} more events
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors duration-200">
                      <span>Explore Club</span>
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {categoryClubs.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No clubs found</h3>
            <p className="text-gray-600">
              There are no clubs in this category yet. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}