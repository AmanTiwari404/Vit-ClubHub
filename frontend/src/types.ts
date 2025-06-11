export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'student';
  clubId?: string;
  registeredEvents?: string[];
}

export interface Club {
  id: string;
  name: string;
  category: 'technical' | 'non-technical' | 'regional';
  description: string;
  facultyCoordinator: string;
  email: string;
  events: Event[];
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  venue: string;
  capacity: number;
  registrationDeadline: string;
  registeredStudents: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
  clubId: string;
  requirements?: string[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Registration {
  id: string;
  eventId: string;
  userId: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
  attendance?: boolean;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  venue: string;
  capacity: number;
  registrationDeadline: string;
  requirements: string[];
  image?: string;
}