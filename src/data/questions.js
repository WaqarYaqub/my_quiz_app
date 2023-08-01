const QUESTIONS = [
  {
    id: 1,
    taskId: 1,
    question: "What is the primary purpose of an aircraft fuselage?",
    options: [
      "To house the cockpit and passengers",
      "To generate lift",
      "To store fuel",
      "To stabilize the aircraft",
    ],
    answer: "To house the cockpit and passengers",
  },
  {
    id: 2,
    taskId: 1,
    question:
      "Which material is commonly used for constructing the fuselage of modern commercial aircraft?",
    options: ["Aluminum", "Steel", "Wood", "Titanium"],
    answer: "Aluminum",
  },
  {
    id: 3,
    taskId: 1,
    question: "What is the purpose of an aircraft wing?",
    options: [
      "To house the engines",
      "To house the passengers",
      "To generate lift",
      "To stabilize the aircraft",
    ],
    answer: "To generate lift",
  },
  {
    id: 4,
    taskId: 1,
    question: "What are ailerons used for?",
    options: [
      "To control pitch",
      "To control yaw",
      "To control roll",
      "To control thrust",
    ],
    answer: "To control roll",
  },
  {
    id: 5,
    taskId: 1,
    question:
      "Which part of the aircraft structure provides the connection between the wings and the fuselage?",
    options: ["Stabilizer", "Empennage", "Tailplane", "Wingbox"],
    answer: "Wingbox",
  },
  {
    id: 6,
    taskId: 1,
    question: "What is the function of a horizontal stabilizer?",
    options: [
      "To provide lift",
      "To control pitch",
      "To control yaw",
      "To control roll",
    ],
    answer: "To control pitch",
  },
  {
    id: 7,
    taskId: 1,
    question:
      "Which part of the aircraft structure houses the main landing gear?",
    options: ["Nacelle", "Fuselage", "Pylon", "Wing"],
    answer: "Fuselage",
  },
  {
    id: 8,
    taskId: 1,
    question: "What is the purpose of winglets on the wingtips?",
    options: [
      "To improve fuel efficiency",
      "To increase cargo capacity",
      "To reduce drag",
      "To improve passenger comfort",
    ],
    answer: "To reduce drag",
  },
  {
    id: 9,
    taskId: 1,
    question: "What is the purpose of aircraft fairings?",
    options: [
      "To improve aerodynamics",
      "To increase cargo capacity",
      "To house the engines",
      "To stabilize the aircraft",
    ],
    answer: "To improve aerodynamics",
  },
  {
    id: 10,
    taskId: 1,
    question: "What is the function of a rudder?",
    options: [
      "To control pitch",
      "To control yaw",
      "To control roll",
      "To control thrust",
    ],
    answer: "To control yaw",
  },
  {
    id: 11,
    taskId: 2,
    question:
      "Which material is commonly used for constructing aircraft wings?",
    options: ["Aluminum", "Steel", "Wood", "Carbon fiber"],
    answer: "Carbon fiber",
  },
  {
    id: 12,
    taskId: 2,
    question: "What is the purpose of the empennage on an aircraft?",
    options: [
      "To provide lift",
      "To control pitch and yaw",
      "To house the engines",
      "To stabilize the aircraft",
    ],
    answer: "To control pitch and yaw",
  },
  {
    id: 13,
    taskId: 2,
    question: "What are the main structural components of an aircraft wing?",
    options: [
      "Spar, rib, and skin",
      "Fuselage, tailplane, and winglet",
      "Engine, pylon, and nacelle",
      "Flap, slat, and aileron",
    ],
    answer: "Spar, rib, and skin",
  },
  {
    id: 14,
    taskId: 2,
    question:
      "Which part of the aircraft structure provides stability during flight?",
    options: ["Wing", "Fuselage", "Empennage", "Nacelle"],
    answer: "Empennage",
  },
  {
    id: 15,
    taskId: 2,
    question: "What is the purpose of the aircraft's engine pylons?",
    options: [
      "To control pitch",
      "To control thrust",
      "To provide lift",
      "To increase cargo capacity",
    ],
    answer: "To control thrust",
  },
  {
    id: 16,
    taskId: 2,
    question: "What are the functions of flaps on an aircraft wing?",
    options: [
      "To control pitch",
      "To control yaw",
      "To generate lift",
      "To increase drag during landing and takeoff",
    ],
    answer: "To increase drag during landing and takeoff",
  },
  {
    id: 17,
    taskId: 2,
    question: "What is the purpose of the aircraft's skin or outer covering?",
    options: [
      "To provide structure",
      "To increase fuel efficiency",
      "To house the passengers",
      "To improve aerodynamics",
    ],
    answer: "To provide structure",
  },
  {
    id: 18,
    taskId: 2,
    question:
      "Which type of aircraft structure provides better resistance to corrosion?",
    options: ["Aluminum", "Steel", "Wood", "Composite materials"],
    answer: "Composite materials",
  },
  {
    id: 19,
    taskId: 2,
    question: "What is the purpose of wing flaps during landing?",
    options: [
      "To increase lift",
      "To reduce drag",
      "To control yaw",
      "To improve passenger comfort",
    ],
    answer: "To increase lift",
  },
  {
    id: 20,
    taskId: 2,
    question:
      "Which part of the aircraft structure houses the crew and passengers?",
    options: ["Wing", "Fuselage", "Tailplane", "Nacelle"],
    answer: "Fuselage",
  },
  {
    id: 21,
    taskId: 3,
    question: "What is the purpose of regulation?",
    options: [
      "To ensure fair competition",
      "To protect consumers",
      "To maintain market stability",
      "To promote economic growth"
    ],
    answer: "To ensure fair competition",
  },
  {
    id: 22,
    taskId: 3,
    question: "What are the main types of regulation?",
    options: [
      "Economic regulation",
      "Social regulation",
      "Environmental regulation",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 23,
    taskId: 3,
    question: "Which government agencies are responsible for regulation?",
    options: [
      "FDA (Food and Drug Administration)",
      "FCC (Federal Communications Commission)",
      "SEC (Securities and Exchange Commission)",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 24,
    taskId: 3,
    question: "What is the role of regulatory compliance?",
    options: [
      "To ensure adherence to laws and regulations",
      "To maximize profits",
      "To create new regulations",
      "To increase competition"
    ],
    answer: "To ensure adherence to laws and regulations",
  },
  {
    id: 25,
    taskId: 3,
    question: "What is deregulation?",
    options: [
      "The process of reducing or eliminating government regulations",
      "The process of creating more regulations",
      "The process of international regulation",
      "The process of regulating technology companies"
    ],
    answer: "The process of reducing or eliminating government regulations",
  },
  {
    id: 26,
    taskId: 3,
    question: "What are the pros of regulation?",
    options: [
      "Consumer protection",
      "Stability in financial markets",
      "Environmental protection",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 27,
    taskId: 3,
    question: "What are the cons of regulation?",
    options: [
      "Increased compliance costs",
      "Reduced innovation",
      "Slower economic growth",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 28,
    taskId: 3,
    question: "What is antitrust regulation?",
    options: [
      "Regulation of monopolies and unfair business practices",
      "Regulation of international trade",
      "Regulation of social media platforms",
      "Regulation of healthcare"
    ],
    answer: "Regulation of monopolies and unfair business practices",
  },
  {
    id: 29,
    taskId: 3,
    question: "How do regulations impact the financial industry?",
    options: [
      "Restricting certain financial activities",
      "Promoting transparency and disclosure",
      "Ensuring fair lending practices",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 30,
    taskId: 3,
    question: "What is the role of regulations in the healthcare sector?",
    options: [
      "Ensuring patient safety",
      "Controlling healthcare costs",
      "Regulating medical research",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 31,
    taskId: 4,
    question: "How are regulations related to data protection and privacy?",
    options: [
      "Requiring companies to protect user data",
      "Limiting data collection and usage",
      "Ensuring user consent for data processing",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 32,
    taskId: 4,
    question: "What is environmental regulation?",
    options: [
      "Regulation of environmental pollution",
      "Regulation of energy sources",
      "Regulation of social media content",
      "Regulation of immigration"
    ],
    answer: "Regulation of environmental pollution",
  },
  {
    id: 33,
    taskId: 4,
    question: "How do regulations impact the technology industry?",
    options: [
      "Regulating data privacy",
      "Promoting competition among tech companies",
      "Addressing cybersecurity concerns",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 34,
    taskId: 4,
    question: "What are the challenges of international regulation?",
    options: [
      "Differing legal systems and standards",
      "Enforcement across borders",
      "Language and cultural barriers",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 35,
    taskId: 4,
    question: "What is the role of regulation in the food industry?",
    options: [
      "Ensuring food safety",
      "Labeling requirements",
      "Controlling food additives",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 36,
    taskId: 4,
    question: "How do regulations impact the energy sector?",
    options: [
      "Promoting renewable energy sources",
      "Setting emission standards",
      "Regulating energy pricing",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 37,
    taskId: 4,
    question: "What is the role of financial regulations in preventing economic crises?",
    options: [
      "Strengthening bank capital requirements",
      "Regulating risky financial products",
      "Enhancing market transparency",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 38,
    taskId: 4,
    question: "How do regulations affect small businesses?",
    options: [
      "Increasing compliance costs",
      "Providing financial incentives",
      "Promoting fair competition",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 39,
    taskId: 4,
    question: "What is the role of occupational health and safety regulations?",
    options: [
      "Protecting workers from hazards",
      "Promoting work-life balance",
      "Regulating job salaries",
      "All of the above"
    ],
    answer: "Protecting workers from hazards",
  },
  {
    id: 40,
    taskId: 4,
    question: "How do regulations impact the telecommunications industry?",
    options: [
      "Ensuring universal access to communication services",
      "Regulating internet service providers",
      "Setting standards for communication devices",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 41,
    taskId: 5,
    question: "What is the primary function of the aircraft's airframe?",
    options: [
      "To house the cockpit",
      "To carry passengers and cargo",
      "To generate thrust",
      "To store fuel"
    ],
    answer: "To carry passengers and cargo",
  },
  {
    id: 42,
    taskId: 5,
    question: "Which component of the aircraft is responsible for generating lift?",
    options: [
      "Wings",
      "Tail",
      "Fuselage",
      "Landing gear"
    ],
    answer: "Wings",
  },
  {
    id: 43,
    taskId: 5,
    question: "What is the purpose of the aircraft's landing gear?",
    options: [
      "To stabilize the aircraft during flight",
      "To assist in takeoff and landing",
      "To communicate with air traffic control",
      "To navigate using GPS"
    ],
    answer: "To assist in takeoff and landing",
  },
  {
    id: 44,
    taskId: 5,
    question: "Which type of aircraft propulsion system uses a jet engine?",
    options: [
      "Propeller",
      "Turbofan",
      "Turboprop",
      "Ramjet"
    ],
    answer: "Turbofan",
  },
  {
    id: 45,
    taskId: 5,
    question: "What is the purpose of the aircraft's avionics system?",
    options: [
      "To control the engines",
      "To manage the flight controls",
      "To monitor weather conditions",
      "To manage communication and navigation"
    ],
    answer: "To manage communication and navigation",
  },
  {
    id: 46,
    taskId: 6,
    question: "What is the significance of the black box in an aircraft?",
    options: [
      "To store food and supplies for the crew",
      "To record flight data and cockpit conversations",
      "To control the aircraft during emergencies",
      "To provide entertainment to passengers"
    ],
    answer: "To record flight data and cockpit conversations",
  },
  {
    id: 47,
    taskId: 6,
    question: "Which part of the aircraft is responsible for controlling pitch and roll?",
    options: [
      "Elevator",
      "Rudder",
      "Ailerons",
      "Flaps"
    ],
    answer: "Ailerons",
  },
  {
    id: 48,
    taskId: 6,
    question: "What is the function of an aircraft's thrust reversers?",
    options: [
      "To reduce drag during landing",
      "To increase fuel efficiency",
      "To reverse the direction of engine thrust",
      "To provide extra lift"
    ],
    answer: "To reverse the direction of engine thrust",
  },
  {
    id: 49,
    taskId: 6,
    question: "What does the term 'fly-by-wire' mean in aircraft systems?",
    options: [
      "Pilots control the aircraft using mechanical linkages",
      "Pilots use a joystick to fly the aircraft",
      "Aircraft is controlled electronically without direct mechanical connections",
      "Aircraft navigation is automated"
    ],
    answer: "Aircraft is controlled electronically without direct mechanical connections",
  },
  {
    id: 50,
    taskId: 6,
    question: "Which aircraft system is responsible for pressurizing the cabin?",
    options: [
      "Hydraulic system",
      "Fuel system",
      "Pneumatic system",
      "Air conditioning system"
    ],
    answer: "Air conditioning system",
  },


];

export default QUESTIONS;