import { Club, Category } from './types';

export const categories: Category[] = [
  {
    id: 'technical',
    name: 'Technical Clubs',
    description: 'Clubs focused on coding, robotics, and technology',
    icon: 'Code2'
  },
  {
    id: 'non-technical',
    name: 'Non-Technical Clubs',
    description: 'Clubs for arts, culture, and soft skills',
    icon: 'Palette'
  },
  {
    id: 'regional',
    name: 'Regional Clubs',
    description: 'Clubs representing different regions and cultures',
    icon: 'Users'
  }
];

export const clubs: Club[] = [
  // Technical Clubs
  {
    id: 'codingclub',
    name: 'Coding Club',
    category: 'technical',
    description: 'A community of coding enthusiasts working on exciting projects and competitive programming',
    facultyCoordinator: 'Dr. Amit Kumar',
    email: 'coding.club@vitbhopal.ac.in',
    events: [
      {
        id: 'hackathon2024',
        title: 'Hackathon 2024',
        date: '2024-04-15T09:00',
        description: '24-hour coding competition',
        venue: 'Tech Lab A',
        capacity: 100,
        registrationDeadline: '2024-04-10T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'codingclub',
        requirements: ['Laptop', 'Programming knowledge'],
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400'
      },
      {
        id: 'codejam',
        title: 'Code Jam',
        date: '2024-05-20T14:00',
        description: 'Competitive programming contest',
        venue: 'Computer Lab B',
        capacity: 50,
        registrationDeadline: '2024-05-15T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'codingclub',
        requirements: ['Basic programming skills'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400'
      }
    ]
  },
  {
    id: 'roboticsclub',
    name: 'Robotics Club',
    category: 'technical',
    description: 'Design, build and program robots while learning about mechanical and electronic systems',
    facultyCoordinator: 'Dr. Rajesh Verma',
    email: 'robotics.club@vitbhopal.ac.in',
    events: [
      {
        id: 'roborace2024',
        title: 'Robo Race 2024',
        date: '2024-06-10T10:00',
        description: 'Robot racing competition',
        venue: 'Robotics Lab',
        capacity: 30,
        registrationDeadline: '2024-06-05T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'roboticsclub',
        requirements: ['Basic electronics knowledge'],
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400'
      }
    ]
  },
  {
    id: 'aimlclub',
    name: 'AI/ML Club',
    category: 'technical',
    description: 'Explore artificial intelligence and machine learning through hands-on projects',
    facultyCoordinator: 'Dr. Priya Sharma',
    email: 'aiml.club@vitbhopal.ac.in',
    events: [
      {
        id: 'mlworkshop',
        title: 'ML Workshop Series',
        date: '2024-07-01T15:00',
        description: 'Workshop on machine learning fundamentals',
        venue: 'AI Lab',
        capacity: 40,
        registrationDeadline: '2024-06-25T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'aimlclub',
        requirements: ['Python basics', 'Mathematics background'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
      }
    ]
  },
  {
    id: 'cybersecclub',
    name: 'Cybersecurity Club',
    category: 'technical',
    description: 'Learn about cybersecurity, ethical hacking, and network defense',
    facultyCoordinator: 'Dr. Sanjay Mishra',
    email: 'cybersec.club@vitbhopal.ac.in',
    events: [
      {
        id: 'ctf2024',
        title: 'Capture The Flag',
        date: '2024-08-15T16:00',
        description: 'Cybersecurity challenge event',
        venue: 'Security Lab',
        capacity: 25,
        registrationDeadline: '2024-08-10T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'cybersecclub',
        requirements: ['Basic networking knowledge'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400'
      }
    ]
  },

  // Non-Technical Clubs
  {
    id: 'artclub',
    name: 'Art Club',
    category: 'non-technical',
    description: 'Express yourself through various forms of art and creative activities',
    facultyCoordinator: 'Dr. Priya Singh',
    email: 'art.club@vitbhopal.ac.in',
    events: [
      {
        id: 'artexhibition',
        title: 'Annual Art Exhibition',
        date: '2024-04-20T11:00',
        description: 'Showcase your artistic talents',
        venue: 'Art Gallery',
        capacity: 60,
        registrationDeadline: '2024-04-15T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'artclub',
        requirements: ['Art supplies'],
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400'
      }
    ]
  },
  {
    id: 'literaryclub',
    name: 'Literary Club',
    category: 'non-technical',
    description: 'Explore the world of literature, poetry, and creative writing',
    facultyCoordinator: 'Dr. Meera Patel',
    email: 'literary.club@vitbhopal.ac.in',
    events: [
      {
        id: 'poetryslam',
        title: 'Poetry Slam',
        date: '2024-05-25T17:00',
        description: 'Poetry competition and open mic',
        venue: 'Auditorium',
        capacity: 80,
        registrationDeadline: '2024-05-20T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'literaryclub',
        requirements: ['Original poetry'],
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'
      }
    ]
  },
  {
    id: 'dramaclub',
    name: 'Drama Club',
    category: 'non-technical',
    description: 'Develop acting skills and perform in theatrical productions',
    facultyCoordinator: 'Dr. Rahul Gupta',
    email: 'drama.club@vitbhopal.ac.in',
    events: [
      {
        id: 'annualplay',
        title: 'Annual Theater Production',
        date: '2024-09-30T19:00',
        description: 'Full-length theater performance',
        venue: 'Main Theater',
        capacity: 200,
        registrationDeadline: '2024-09-20T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'dramaclub',
        requirements: ['Acting experience preferred'],
        image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400'
      }
    ]
  },
  {
    id: 'photographyclub',
    name: 'Photography Club',
    category: 'non-technical',
    description: 'Learn photography techniques and participate in photo walks',
    facultyCoordinator: 'Dr. Anand Kumar',
    email: 'photography.club@vitbhopal.ac.in',
    events: [
      {
        id: 'photowalk2024',
        title: 'Campus Photo Walk',
        date: '2024-06-15T08:00',
        description: 'Guided photography session around campus',
        venue: 'Campus Grounds',
        capacity: 35,
        registrationDeadline: '2024-06-10T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'photographyclub',
        requirements: ['Camera or smartphone'],
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400'
      }
    ]
  },
  {
    id: 'danceclub',
    name: 'Dance Club',
    category: 'non-technical',
    description: 'Learn various dance forms and perform at college events',
    facultyCoordinator: 'Dr. Sneha Reddy',
    email: 'dance.club@vitbhopal.ac.in',
    events: [
      {
        id: 'dancefest',
        title: 'Dance Festival 2024',
        date: '2024-08-20T18:00',
        description: 'Annual dance competition and showcase',
        venue: 'Main Auditorium',
        capacity: 150,
        registrationDeadline: '2024-08-15T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'danceclub',
        requirements: ['Comfortable clothing'],
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400'
      }
    ]
  },

  // Regional Clubs
  {
    id: 'maharashtraclub',
    name: 'Maharashtra Club',
    category: 'regional',
    description: 'Celebrate the culture and traditions of Maharashtra',
    facultyCoordinator: 'Dr. Rajesh Patil',
    email: 'maharashtra.club@vitbhopal.ac.in',
    events: [
      {
        id: 'ganeshfestival',
        title: 'Ganesh Festival',
        date: '2024-09-10T16:00',
        description: 'Traditional Ganesh Chaturthi celebration',
        venue: 'Cultural Hall',
        capacity: 120,
        registrationDeadline: '2024-09-05T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'maharashtraclub',
        requirements: ['Traditional attire encouraged'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
      }
    ]
  },
  {
    id: 'southindianclub',
    name: 'South Indian Club',
    category: 'regional',
    description: 'Promote and celebrate South Indian culture and traditions',
    facultyCoordinator: 'Dr. Lakshmi Narayanan',
    email: 'southindian.club@vitbhopal.ac.in',
    events: [
      {
        id: 'onamcelebration',
        title: 'Onam Celebration',
        date: '2024-08-25T12:00',
        description: 'Traditional Onam festival celebration',
        venue: 'Cultural Center',
        capacity: 100,
        registrationDeadline: '2024-08-20T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'southindianclub',
        requirements: ['Traditional Kerala attire'],
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400'
      }
    ]
  },
  {
    id: 'gujaratclub',
    name: 'Gujarat Club',
    category: 'regional',
    description: 'Share and celebrate Gujarati culture and festivals',
    facultyCoordinator: 'Dr. Hetal Patel',
    email: 'gujarat.club@vitbhopal.ac.in',
    events: [
      {
        id: 'navratri2024',
        title: 'Navratri Celebration',
        date: '2024-10-05T19:00',
        description: 'Traditional Garba and Dandiya nights',
        venue: 'Open Ground',
        capacity: 300,
        registrationDeadline: '2024-09-30T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'gujaratclub',
        requirements: ['Traditional Gujarati attire', 'Dandiya sticks'],
        image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400'
      }
    ]
  },
  {
    id: 'bengalclub',
    name: 'Bengali Club',
    category: 'regional',
    description: 'Promote Bengali culture and literary heritage',
    facultyCoordinator: 'Dr. Subhash Chatterjee',
    email: 'bengal.club@vitbhopal.ac.in',
    events: [
      {
        id: 'durgapuja',
        title: 'Durga Puja Celebration',
        date: '2024-10-12T10:00',
        description: 'Traditional Durga Puja festival',
        venue: 'Temple Grounds',
        capacity: 200,
        registrationDeadline: '2024-10-07T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'bengalclub',
        requirements: ['Traditional Bengali attire'],
        image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400'
      }
    ]
  },
  {
    id: 'rajasthanclub',
    name: 'Rajasthan Club',
    category: 'regional',
    description: 'Celebrate the rich culture and heritage of Rajasthan',
    facultyCoordinator: 'Dr. Mahendra Singh',
    email: 'rajasthan.club@vitbhopal.ac.in',
    events: [
      {
        id: 'desertfest',
        title: 'Desert Festival',
        date: '2024-11-15T17:00',
        description: 'Celebration of Rajasthani culture and traditions',
        venue: 'Heritage Hall',
        capacity: 150,
        registrationDeadline: '2024-11-10T23:59',
        registeredStudents: [],
        status: 'upcoming',
        clubId: 'rajasthanclub',
        requirements: ['Traditional Rajasthani attire'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
      }
    ]
  }
];