import { Link } from 'react-router-dom';
import { categories } from '../data';
import { Code2, Palette, Users } from 'lucide-react';

const iconMap = {
  'Code2': Code2,
  'Palette': Palette,
  'Users': Users
};

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Welcome to VIT ClubHub
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}