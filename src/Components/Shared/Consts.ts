import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';


import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';

import logo from '@/assets/Images/logo.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ASSETS } from '@/assets/assets';

export const links = ['Home', 'About', 'Patient Information', 'Services', 'Patient Testimonials', "FAQs"];

export const descNums = [
  {
    num: '500+',
    text: 'Expert Doctors',
  },
  {
    num: '20k+',
    text: 'Happy Patients',
  },
  {
    num: '24/7',
    text: 'Emergency Service',
  },
  {
    num: '100+',
    text: 'Operation Theatres',
  },
  {
    num: '850+',
    text: 'Hospital Rooms',
  },
];

export const ServicesData = [
  {
    img: cardiology,
    title: 'Orthopaedic',
    id: 'orthopaedic',
    heading: 'Comprehensive Orthopaedic Care',
    texts: [
      'Joint Replacement Surgery (Knee, Hip, Shoulder)',
      'Treatment for Sports Injuries (ACL, Ligament Repairs)',
      'Spine Care (Back Pain, Slip Disc)',
      'Fracture Management',
      'Arthritis Management',
      'Pediatric Orthopaedics',
      'Physiotherapy and Rehabilitation',
    ],
  },
  {
    img: orthopedics,
    title: 'Treatments',
    id: 'treatments',
    heading: 'State-of-the-Art Treatments',
    texts: [
      'Minimally invasive surgical techniques',
      'Platelet-Rich Plasma (PRP) Therapy',
      'Robotic-Assisted Surgery',
      'Advanced pain management solutions',
    ],
  },
];

export const WHAT_TO_EXPECT = {
  heading: 'What to Expect',
  texts: [
    'Detailed consultation with our specialists',
    'Customized treatment plans based on your condition',
    'Clear guidance through every step of your recovery journey',
  ],
  img: Banner1,
};

export const PATIENT_TITLE = 'Patient Information'

export const INSURANCE_PAYMENT = {
  heading: 'Insurance & Payment Options',
  texts: [
    'We accept all major insurance plans. Contact us for billing queries or assistance.',
  ],
};

export const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: doc1,
      name: 'Dr. Akshay Jadhav',
      job: 'Orthopedist',
    },
    // {
    //   img: doc2,
    //   name: 'Dr. Kristin Watson',
    //   job: 'Dentist',
    // },
    // {
    //   img: doc3,
    //   name: 'Dr. Robert Flores',
    //   job: 'Surgeon',
    // },
    // {
    //   img: doc4,
    //   name: 'Dr. Katherine Allen',
    //   job: 'Neurologist',
    // },
  ],
  heading2: 'Who Are We?',
  desc: 'A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and enganhe the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.',
  img: Banner2,
};

export const FeedbackData = [
    {
      name: 'Mrs. Radhika Sharma',
      age: 'Age: 58',
      caption:"Life-Changing Care!",
      desc: '"I had been suffering from chronic knee pain for years and was hesitant about surgery. Dr. Akshay was incredibly patient, answering all my questions and guiding me through the entire process. After my knee replacement, I feel like a new person—no pain and back to my morning walks! I can’t thank them enough."',
    },
    {
      name: 'Rohan Mehta',
      age: 'Age: 26',
      caption:"Exceptional Expertise and Compassion!",
      desc: '"I tore my ACL during a football match, and I thought I’d never get back on the field. Dr. Jadhav performed a successful surgery, and with the clinic’s physiotherapy program, I recovered faster than I expected. Now, I’m back to playing the sport I love. Thank you for helping me get my life back!"',
    },
    {
      name: 'Ananya Gupta',
      age: 'Mother of Aryan Gupta',
      caption:"Pediatric Care Beyond Expectations!",
      desc: '"When my 7-year-old son fractured his arm, I was extremely worried. The entire staff at the clinic was so kind and gentle with him. Dr. Akshay Jadhav made sure the procedure was quick and pain-free. My son is healed and back to his playful self. Highly recommend this clinic for pediatric orthopaedic care!"',
    },

    {
      name: 'Rajesh Nair',
      age: 'Age: 45',
      caption:"A Seamless Experience!",
      desc: '"From diagnosis to post-surgery care, my experience at Speciality Orthopaedic Clinic was flawless. The team is professional, approachable, and truly cares about your well-being. Dr. Akshay fixed my shoulder injury, and now I have full mobility again. I’m deeply grateful for their expertise and care."',
    },
    {
      name: 'Sneha Patil',
      age: 'Age: 42',
      caption:"Back to Pain-Free Living!", 
      desc: '"I had debilitating back pain that no treatment seemed to fix. Dr. Jadhav diagnosed the problem accurately and suggested a minimally invasive procedure. The results were amazing—I feel 10 years younger! This clinic is the best for orthopaedic care."',
    },
    {
      name: 'Arun Kumar',
      age: 'Age: 63',
      caption:"World-Class Care in Our City!",
      desc: '"I was impressed by the advanced facilities and cutting-edge treatments available at Speciality Orthopaedic Clinic. The robotic-assisted surgery for my hip replacement was a game changer. I’m recovering faster than I thought possible, and I’m so thankful for the expertise of Dr. Akshay Jadhav and the entire team."',
    },
  ]


export const FooterData = {
  logo: logo,
  addresses: ['Speciality Othopaedic Clinic, Sector-6,', 'Vashi KoperkhairaneMain Road,', 'Opposite teen taki,Near KFC an mathadiHospital,' ,'Koperkhairane-400709'],
  phone: 'Phone: 9021222355, 8070995555, 8070993333',
  email: 'Email: dr.akshay.jadhav@gmail.com',
  // departments: [
  //   'Cardiology',
  //   'Dentistry',
  //   'Neurology',
  //   'Orthopedics',
  //   'Surgery',
  //   'More',
  // ],
  links: links,
};

export const HOME = {
  doctor:"Dr. Akshay Jadhav",
  title: "Specialty Orthopaedic Clinic",
  desc: "Your trusted destination for advanced orthopaedic care and pain management. Our team of expert orthopaedic specialists is dedicated to improving your mobility, relieving your pain, and helping you lead a healthier, active life."
}

export const ABOUT_US = {
  about:"About Us",
  heading: 'Who We Are',
  desc: 'At Speciality Orthopaedic Clinic , Dr. Akshay Jadhav specialize in diagnosing, treating, and preventing a wide range of orthopaedic conditions. With years of experience and the latest technology, we provide cutting-edge care tailored to each patient’s needs.',
  heading1: 'Our Mission',
  desc1:'To deliver exceptional orthopaedic care that enhances quality of life through innovation, expertise, and compassion.'
};

export const FAQS = "FAQS"

export const FAQS_TITLES = {
  generalQuestions: "General Questions",
  appointmentsnConsultations: "Appointments and Consultations",
  treatmentnRecovery: "Treatment and Recovery",
  insurancenPayments: "Insurance and Payments",
  EmergencynFollowUpCare: "Emergency and Follow-Up Care"
}

export const FAQS_GENERAL_QUESTIONS = [
  {
    question: "What conditions do you treat at the clinic?",
    answer: "We treat a wide range of orthopaedic conditions, including joint pain, fractures, arthritis, back pain, sports injuries, ligament tears, and pediatric orthopaedic conditions."
  },
  {
    question: "Do I need a referral to visit your clinic?",
    answer: "No, you can book an appointment directly with us."
  },
  {
    question: "What should I bring for my first appointment?",
    answer: "Please bring: • Any relevant medical records or imaging reports (X-rays, MRIs) • A list of current medications"
  },
];

export const FAQS_APPOINTMENTS_CONSULTATIONS = [
  {
    question: "How long does a typical consultation last?",
    answer: "Initial consultations usually last 30–45 minutes, depending on the complexity of your condition. Follow-up appointments may be shorter."
  },
  {
    question: "What happens during the first visit?",
    answer: "During your first visit, the doctor will review your medical history, conduct a physical examination, and may recommend diagnostic tests like X-rays or MRIs if needed."
  },
];

export const FAQS_TREATMENT_RECOVERY = [
  {
    question: "What are the benefits of minimally invasive surgery?",
    answer: "Minimally invasive surgery involves smaller incisions, less pain, faster recovery, and minimal scarring compared to traditional procedures."
  },
  {
    question: "How long will it take to recover from surgery?",
    answer: "Recovery time varies depending on the procedure and individual factors. Our team will provide a detailed recovery plan tailored to your needs."
  },
  {
      question: "Do you offer physiotherapy?",
      answer: "Yes, we provide on-site physiotherapy and rehabilitation services to help patients regain strength, mobility, and functionality."
  },
];

export const FAQS_INSURANCE_PAYMENTS = [
  {
    question: "Do you accept my insurance plan?",
    answer: "We accept most major insurance plans. Please contact our office to confirm coverage or discuss alternative payment options."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash and online payments."
  },
  {
      question: "Will I receive a detailed cost estimate for my treatment?",
      answer: "Yes, we provide a transparent cost estimate for all treatments after your initial consultation."
  },
];

export const FAQS_EMERGENCY_FOLLOWUPCARE = [
  {
    question: "Do you handle emergencies?",
    answer: "While we primarily operate by appointment, we can accommodate urgent orthopaedic cases. Please call us immediately if you need emergency care"
  },
  {
    question: "How often should I come for follow-ups?",
    answer: "Follow-up visits depend on your condition and treatment plan. Your doctor will advise you on the appropriate schedule."
  },
  {
      question: "What if I miss an appointment?",
      answer: "Please notify us as soon as possible to reschedule. We encourage timely visits to ensure consistent care."
  },
];

export const WHY_CHOOSE_US = ['Comprehensive care for bones, joints, and muscles', 'State-of-the-art diagnostics and treatment', 'Personalized rehabilitation plans', 'Compassionate, patient-focused approach']

export const TREATMENT_CARD = [
  {
  img:ASSETS.new_knee_arthritis,
  button:"Knee Arthritis",
  route: '/treatment/knee-arthritis',
  },
  {
    img:ASSETS.Hip_Arthritis,
    button:"Hip Arthritis",
    route: '/treatment/hip-arthritis',
  },
  {
    img:ASSETS.Knee_Replacement,
    button:"Knee Replacement",
    route: '/treatment/knee-replacement',
  },
  {
      img:ASSETS.Hip_Replacement,
      button:"Hip Replacement",
      route: '/treatment/hip-replacement',
  },
  {
    img:ASSETS.Shoulder_Replacement,
    button:"Shoulder Replacement",
    route: '/treatment/shoulder-replacement',
  },
  {
      img:ASSETS.Joint_Replacement,
      button:"Joint Replacement",
      route: '/treatment/joint-replacement',
  },
]

export const NAV_MENUS = [
  {
    id: 1001,
    menuName: "HOME",
    path: "/",
    subMenu: [],
  },
  {
    id: 1002,
    menuName: "ABOUT US",
    path: "",
    subMenu: [
      { subMenuOne: "About", path: "/about/about-us" },
      { subMenuOne: "Blog/Updates", path: "/about/blog-updates" },
    ],
  },
  {
    id: 1003,
    menuName: "TREATMENT",
    path: "",
    subMenu: [
      { subMenuOne: "Knee Arthritis", path: "/treatment/knee-arthritis" },
      { subMenuOne: "Hip Arthritis", path: "/treatment/hip-arthritis" },
      { subMenuOne: "Knee Replacement", path: "/treatment/knee-replacement" },
      { subMenuOne: "Hip Replacement", path: "/treatment/hip-replacement" },
      { subMenuOne: "Shoulder Replacement", path: "/treatment/shoulder-replacement" },
      { subMenuOne: "Joint Replacement", path: "/treatment/joint-replacement" },
    ],
  },
  {
    id: 1004,
    menuName: "FAQs",
    path: "/faqs",
    subMenu: [],
  },
  {
    id: 1005,
    menuName: "CONTACT",
    path: "/contact",
    subMenu: [],
  },
];