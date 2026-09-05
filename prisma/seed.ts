import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // ──────────────────────────────────────────
  // Admin User
  // ──────────────────────────────────────────
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "admin123",
    12
  );

  await prisma.adminUser.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@kanpurcabs.com" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || "admin@kanpurcabs.com",
      password: hashedPassword,
      name: "Admin",
      role: "super_admin",
    },
  });
  console.log("✅ Admin user created");

  // ──────────────────────────────────────────
  // Cars / Fleet
  // ──────────────────────────────────────────
  const cars = [
    {
      name: "Maruti Suzuki Swift",
      slug: "maruti-suzuki-swift",
      category: "hatchback",
      brand: "Maruti Suzuki",
      model: "Swift",
      year: 2023,
      seats: 4,
      doors: 4,
      luggage: 2,
      transmission: "manual",
      fuelType: "petrol",
      ac: true,
      description:
        "The Maruti Suzuki Swift is a popular and fuel-efficient hatchback, perfect for city travel in Kanpur. Compact, easy to maneuver through narrow lanes, and comfortable for 4 passengers.",
      features: [
        "Air Conditioning",
        "Power Steering",
        "Music System",
        "USB Charging",
        "Central Locking",
      ],
      pricePerKm: 9,
      pricePerDay: 1800,
      pricePerHour: 250,
      minimumCharge: 500,
      driverAllowance: 300,
      nightCharge: 200,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: "Maruti Suzuki Dzire",
      slug: "maruti-suzuki-dzire",
      category: "sedan",
      brand: "Maruti Suzuki",
      model: "Dzire",
      year: 2023,
      seats: 4,
      doors: 4,
      luggage: 3,
      transmission: "manual",
      fuelType: "petrol",
      ac: true,
      description:
        "The Maruti Suzuki Dzire is a comfortable sedan ideal for both city rides and outstation trips from Kanpur. Spacious boot and excellent mileage make it a top choice for travelers.",
      features: [
        "Air Conditioning",
        "Power Steering",
        "Music System",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Rear AC Vents",
      ],
      pricePerKm: 10,
      pricePerDay: 2000,
      pricePerHour: 280,
      minimumCharge: 600,
      driverAllowance: 300,
      nightCharge: 250,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: "Hyundai Aura",
      slug: "hyundai-aura",
      category: "sedan",
      brand: "Hyundai",
      model: "Aura",
      year: 2023,
      seats: 4,
      doors: 4,
      luggage: 3,
      transmission: "manual",
      fuelType: "petrol",
      ac: true,
      description:
        "The Hyundai Aura is a stylish and feature-rich sedan perfect for comfortable travel in and around Kanpur. Known for its refined ride quality and spacious interior.",
      features: [
        "Air Conditioning",
        "Power Steering",
        "Touchscreen Infotainment",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Wireless Charging",
      ],
      pricePerKm: 10,
      pricePerDay: 2000,
      pricePerHour: 280,
      minimumCharge: 600,
      driverAllowance: 300,
      nightCharge: 250,
      isAvailable: true,
      isFeatured: false,
      sortOrder: 3,
    },
    {
      name: "Toyota Innova Crysta",
      slug: "toyota-innova-crysta",
      category: "suv",
      brand: "Toyota",
      model: "Innova Crysta",
      year: 2023,
      seats: 6,
      doors: 4,
      luggage: 4,
      transmission: "manual",
      fuelType: "diesel",
      ac: true,
      description:
        "The Toyota Innova Crysta is the gold standard for family travel and outstation trips. Premium comfort, powerful diesel engine, and ample space for up to 6 passengers with luggage.",
      features: [
        "Air Conditioning",
        "Captain Seats",
        "Touchscreen Infotainment",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Rear AC Vents",
        "Cruise Control",
        "Roof-Mounted AC",
      ],
      pricePerKm: 16,
      pricePerDay: 3500,
      pricePerHour: 450,
      minimumCharge: 1000,
      driverAllowance: 400,
      nightCharge: 300,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 4,
    },
    {
      name: "Mahindra Scorpio N",
      slug: "mahindra-scorpio-n",
      category: "suv",
      brand: "Mahindra",
      model: "Scorpio N",
      year: 2023,
      seats: 7,
      doors: 4,
      luggage: 3,
      transmission: "manual",
      fuelType: "diesel",
      ac: true,
      description:
        "The Mahindra Scorpio N is a rugged and powerful SUV ideal for outstation trips and group travel from Kanpur. High ground clearance makes it suitable for all road conditions.",
      features: [
        "Air Conditioning",
        "Music System",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Rear AC Vents",
        "4WD Available",
      ],
      pricePerKm: 14,
      pricePerDay: 3000,
      pricePerHour: 400,
      minimumCharge: 800,
      driverAllowance: 400,
      nightCharge: 300,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 5,
    },
    {
      name: "Hyundai Creta",
      slug: "hyundai-creta",
      category: "suv",
      brand: "Hyundai",
      model: "Creta",
      year: 2024,
      seats: 5,
      doors: 4,
      luggage: 3,
      transmission: "automatic",
      fuelType: "petrol",
      ac: true,
      description:
        "The Hyundai Creta is a premium compact SUV with modern features and a comfortable ride. Perfect for couples and small families traveling in and around Kanpur.",
      features: [
        "Air Conditioning",
        "Touchscreen Infotainment",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Panoramic Sunroof",
        "Ventilated Seats",
        "ADAS Features",
      ],
      pricePerKm: 14,
      pricePerDay: 3200,
      pricePerHour: 420,
      minimumCharge: 900,
      driverAllowance: 350,
      nightCharge: 300,
      isAvailable: true,
      isFeatured: false,
      sortOrder: 6,
    },
    {
      name: "Toyota Fortuner",
      slug: "toyota-fortuner",
      category: "luxury",
      brand: "Toyota",
      model: "Fortuner",
      year: 2023,
      seats: 7,
      doors: 4,
      luggage: 4,
      transmission: "automatic",
      fuelType: "diesel",
      ac: true,
      description:
        "The Toyota Fortuner is a premium luxury SUV ideal for VIP travel, corporate executives, and special occasions. Commanding road presence and supreme comfort.",
      features: [
        "Air Conditioning",
        "Leather Seats",
        "Touchscreen Infotainment",
        "USB Charging",
        "Central Locking",
        "Airbags",
        "Cruise Control",
        "4WD",
        "Roof-Mounted AC",
        "Power Tailgate",
      ],
      pricePerKm: 20,
      pricePerDay: 5000,
      pricePerHour: 650,
      minimumCharge: 1500,
      driverAllowance: 500,
      nightCharge: 400,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 7,
    },
    {
      name: "Force Tempo Traveller",
      slug: "force-tempo-traveller",
      category: "tempo_traveller",
      brand: "Force",
      model: "Tempo Traveller",
      year: 2023,
      seats: 12,
      doors: 2,
      luggage: 6,
      transmission: "manual",
      fuelType: "diesel",
      ac: true,
      description:
        "The Force Tempo Traveller is perfect for group travel, family outings, pilgrimages, and corporate events. Spacious 12-seater with pushback seats and excellent AC.",
      features: [
        "Air Conditioning",
        "Pushback Seats",
        "Music System",
        "USB Charging",
        "Curtains",
        "Luggage Carrier",
        "First Aid Kit",
        "Fire Extinguisher",
      ],
      pricePerKm: 22,
      pricePerDay: 5500,
      pricePerHour: 700,
      minimumCharge: 2000,
      driverAllowance: 500,
      nightCharge: 400,
      isAvailable: true,
      isFeatured: true,
      sortOrder: 8,
    },
  ];

  for (const car of cars) {
    await prisma.car.upsert({
      where: { slug: car.slug },
      update: car,
      create: car,
    });
  }
  console.log(`✅ ${cars.length} cars seeded`);

  // ──────────────────────────────────────────
  // Services
  // ──────────────────────────────────────────
  const services = [
    {
      name: "Local Car Rental",
      slug: "local-car-rental",
      tagline: "Hourly car rental with professional driver for Kanpur city travel",
      description:
        "Explore Kanpur comfortably with our hourly car rental service. Whether you need a car for shopping, meetings, hospital visits, or city errands — our professional drivers and well-maintained cars are at your service.",
      icon: "Clock",
      features: [
        "Flexible hourly packages (4hr/40km, 8hr/80km, 12hr/120km)",
        "Professional, verified drivers",
        "AC cars available",
        "All Kanpur areas covered",
        "Corporate billing available",
      ],
      isActive: true,
      sortOrder: 1,
      metaTitle: "Local Car Rental in Kanpur | Hourly Cab Booking",
      metaDescription:
        "Book affordable hourly car rental in Kanpur with professional drivers. Choose from hatchback, sedan, and SUV. 4hr, 8hr, 12hr packages available. Call now!",
    },
    {
      name: "Outstation Cabs",
      slug: "outstation-cab",
      tagline: "Comfortable one-way & round-trip cabs from Kanpur",
      description:
        "Travel beyond Kanpur with our reliable outstation cab service. One-way drops and round trips to Lucknow, Agra, Varanasi, Delhi, Prayagraj, Ayodhya, and 100+ destinations.",
      icon: "Navigation",
      features: [
        "One-way and round-trip available",
        "Transparent per-km pricing",
        "All-inclusive fares (fuel + driver)",
        "Multiple vehicle options",
        "Multi-city trips supported",
      ],
      isActive: true,
      sortOrder: 2,
      metaTitle: "Outstation Cabs from Kanpur | One-Way & Round Trip",
      metaDescription:
        "Book outstation cabs from Kanpur to Lucknow, Agra, Varanasi, Delhi & more. Affordable one-way and round-trip pricing. Professional drivers. Book now!",
    },
    {
      name: "Airport Transfer",
      slug: "airport-transfer",
      tagline: "Reliable pickup & drop to Kanpur Airport (Chakeri)",
      description:
        "Never miss a flight with our punctual airport transfer service. We provide comfortable pickups and drops to Kanpur Airport (Chakeri) with flight tracking and meet & greet service.",
      icon: "Plane",
      features: [
        "Kanpur Airport (Chakeri) coverage",
        "Flight tracking for pickups",
        "Meet & greet service",
        "Fixed pricing, no surge",
        "Available 24/7",
      ],
      isActive: true,
      sortOrder: 3,
      metaTitle: "Airport Transfer Kanpur | Cab to Kanpur Airport Chakeri",
      metaDescription:
        "Book reliable airport transfer in Kanpur. Pickup and drop to Kanpur Airport (Chakeri). Fixed pricing, 24/7 available. Professional drivers.",
    },
    {
      name: "Railway Station Transfer",
      slug: "railway-station-transfer",
      tagline: "Comfortable transfers to/from Kanpur railway stations",
      description:
        "Get hassle-free transfers to and from Kanpur's major railway stations. We cover Kanpur Central (CNB), Kanpur Anwarganj, and Govindpuri stations with punctual and comfortable cab service.",
      icon: "Train",
      features: [
        "Kanpur Central, Anwarganj, Govindpuri covered",
        "Train tracking for pickups",
        "Fixed pricing",
        "All city areas covered",
        "Available 24/7",
      ],
      isActive: true,
      sortOrder: 4,
      metaTitle: "Railway Station Transfer Kanpur | Cab to Kanpur Central",
      metaDescription:
        "Book comfortable railway station transfers in Kanpur. Pickup and drop to Kanpur Central, Govindpuri stations. Fixed pricing, professional drivers.",
    },
    {
      name: "Corporate Car Rental",
      slug: "corporate-car-rental",
      tagline: "Dedicated car rental solutions for businesses in Kanpur",
      description:
        "Professional corporate car rental services for businesses in Kanpur. Employee transport, client pickups, event logistics, and monthly retainer packages with GST billing.",
      icon: "Building",
      features: [
        "Dedicated account manager",
        "Monthly retainer packages",
        "GST billing & invoicing",
        "Employee transport solutions",
        "Premium fleet for executives",
      ],
      isActive: true,
      sortOrder: 5,
      metaTitle: "Corporate Car Rental Kanpur | Business Cab Service",
      metaDescription:
        "Professional corporate car rental in Kanpur. Monthly packages, GST billing, employee transport, client pickups. Premium fleet with experienced drivers.",
    },
    {
      name: "Wedding Car Rental",
      slug: "wedding-car-rental",
      tagline: "Luxury decorated cars for your special day in Kanpur",
      description:
        "Make your wedding day extra special with our premium wedding car rental service. Beautifully decorated luxury cars for the bride and groom, baraat processions, and guest transport.",
      icon: "Heart",
      features: [
        "Luxury car decoration",
        "Baraat car arrangements",
        "Guest transport (Tempo Travellers)",
        "Multi-car packages",
        "Customized decoration",
      ],
      isActive: true,
      sortOrder: 6,
      metaTitle: "Wedding Car Rental Kanpur | Luxury Wedding Cars",
      metaDescription:
        "Book luxury wedding car rental in Kanpur. Decorated cars for baraat, bride-groom, and guest transport. Premium fleet with professional drivers.",
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`✅ ${services.length} services seeded`);

  // ──────────────────────────────────────────
  // Tour Packages
  // ──────────────────────────────────────────
  const tours = [
    {
      name: "Kanpur Half-Day City Tour",
      slug: "kanpur-half-day-city-tour",
      tagline: "Explore Kanpur's top attractions in half a day",
      description:
        "Discover the best of Kanpur in just 4 hours. Visit the iconic JK Temple, the historic Allen Forest Zoo, serene Moti Jheel, and the beautiful Nana Rao Park. Perfect for visitors with limited time.",
      duration: "4 Hours",
      distance: "~30 km",
      destinations: [
        "JK Temple",
        "Allen Forest Zoo",
        "Moti Jheel",
        "Nana Rao Park",
      ],
      highlights: [
        "Visit the architecturally stunning JK Temple",
        "Explore one of India's oldest zoos",
        "Enjoy the serene Moti Jheel lake",
        "Learn history at Nana Rao Park",
      ],
      price: 1500,
      priceLabel: "Starting from ₹1,500",
      inclusions: [
        "AC Sedan car",
        "Professional driver",
        "Fuel charges",
        "Toll & parking",
        "Driver allowance",
      ],
      exclusions: [
        "Entry tickets to attractions",
        "Personal expenses",
        "Food & beverages",
      ],
      isActive: true,
      isFeatured: true,
      sortOrder: 1,
      metaTitle: "Kanpur Half-Day City Tour | Sightseeing Package",
      metaDescription:
        "Explore Kanpur in 4 hours. Visit JK Temple, Allen Zoo, Moti Jheel & more. AC car with driver. Starting ₹1,500. Book now!",
    },
    {
      name: "Kanpur Full-Day City Tour",
      slug: "kanpur-full-day-city-tour",
      tagline: "Complete Kanpur sightseeing experience",
      description:
        "Experience everything Kanpur has to offer in a comprehensive full-day tour. Cover all major attractions including temples, parks, historical sites, shopping areas, and the famous Ganga ghats.",
      duration: "8 Hours",
      distance: "~60 km",
      destinations: [
        "JK Temple",
        "Allen Forest Zoo",
        "Moti Jheel",
        "Nana Rao Park",
        "Kanpur Memorial Church",
        "Green Park Stadium",
        "Phool Bagh",
        "ISKCON Temple",
        "Bithoor",
      ],
      highlights: [
        "Complete city sightseeing",
        "Visit all major temples and landmarks",
        "Explore historical monuments",
        "Visit the famous Green Park Cricket Stadium",
        "Evening at Bithoor Ganga ghats",
      ],
      price: 2500,
      priceLabel: "Starting from ₹2,500",
      inclusions: [
        "AC Sedan car",
        "Professional driver",
        "Fuel charges",
        "Toll & parking",
        "Driver allowance",
        "Water bottles",
      ],
      exclusions: [
        "Entry tickets",
        "Personal expenses",
        "Food & beverages",
        "Guide charges",
      ],
      isActive: true,
      isFeatured: true,
      sortOrder: 2,
      metaTitle: "Kanpur Full-Day City Tour | Complete Sightseeing",
      metaDescription:
        "Full-day Kanpur sightseeing tour. Visit all attractions - JK Temple, Allen Zoo, Bithoor & more. 8 hours, AC car. Starting ₹2,500.",
    },
    {
      name: "Bithoor Pilgrimage Tour",
      slug: "bithoor-pilgrimage-tour",
      tagline: "Sacred pilgrimage to the holy town of Bithoor",
      description:
        "Visit the sacred town of Bithoor, located on the banks of the River Ganges. Explore ancient temples, sacred ghats, and historical sites associated with Lord Brahma and Sage Valmiki.",
      duration: "5 Hours",
      distance: "~40 km",
      destinations: [
        "Brahmavart Ghat",
        "Valmiki Ashram",
        "Patthar Ghat",
        "Siddhidham Ashram",
        "Dhruv Teela",
        "Bithoor Temples",
      ],
      highlights: [
        "Visit the sacred Brahmavart Ghat on River Ganges",
        "Explore the ancient Valmiki Ashram",
        "Witness the beautiful Patthar Ghat architecture",
        "Experience spiritual peace at Siddhidham Ashram",
        "Learn about the history of 1857 revolt",
      ],
      price: 1800,
      priceLabel: "Starting from ₹1,800",
      inclusions: [
        "AC Sedan car",
        "Professional driver",
        "Fuel charges",
        "Toll & parking",
        "Driver allowance",
      ],
      exclusions: [
        "Pooja/Donation charges",
        "Personal expenses",
        "Food & beverages",
        "Boat ride charges",
      ],
      isActive: true,
      isFeatured: true,
      sortOrder: 3,
      metaTitle: "Bithoor Pilgrimage Tour from Kanpur | Temple Tour",
      metaDescription:
        "Sacred Bithoor pilgrimage tour from Kanpur. Visit Brahmavart Ghat, Valmiki Ashram & temples. 5 hours, AC car. Starting ₹1,800.",
    },
    {
      name: "Kanpur Religious Tour",
      slug: "kanpur-religious-tour",
      tagline: "Visit all major temples and spiritual sites in Kanpur",
      description:
        "A comprehensive religious tour covering all the major temples and spiritual sites in Kanpur and nearby areas. Perfect for devotees and spiritual seekers.",
      duration: "6 Hours",
      distance: "~45 km",
      destinations: [
        "JK Temple",
        "Panki Hanuman Mandir",
        "Baba Anandeshwar Mandir",
        "ISKCON Temple",
        "Tapeshwari Devi Mandir",
        "Jageshwar Temple",
      ],
      highlights: [
        "Visit the iconic JK Temple (Radhakrishna Temple)",
        "Seek blessings at the famous Panki Hanuman Mandir",
        "Ancient Baba Anandeshwar Shiva Temple",
        "Experience peace at ISKCON Temple",
        "Visit Tapeshwari Devi Temple",
      ],
      price: 2000,
      priceLabel: "Starting from ₹2,000",
      inclusions: [
        "AC Sedan car",
        "Professional driver",
        "Fuel charges",
        "Parking",
        "Driver allowance",
      ],
      exclusions: [
        "Pooja items & donations",
        "Personal expenses",
        "Food & beverages",
      ],
      isActive: true,
      isFeatured: false,
      sortOrder: 4,
      metaTitle: "Kanpur Religious Tour | Temple Visit Package",
      metaDescription:
        "Visit all major temples in Kanpur. JK Temple, Panki Hanuman Mandir, ISKCON & more. 6 hours, AC car. Starting ₹2,000.",
    },
    {
      name: "Kanpur-Lucknow Weekend Tour",
      slug: "kanpur-lucknow-weekend-tour",
      tagline: "2-day heritage & cultural tour of Kanpur and Lucknow",
      description:
        "Combine the industrial heritage of Kanpur with the Nawabi culture of Lucknow in this exciting 2-day weekend tour. Explore historical monuments, enjoy Awadhi cuisine, and shop in famous markets.",
      duration: "2 Days / 1 Night",
      distance: "~200 km",
      destinations: [
        "Kanpur City Tour",
        "Lucknow - Bara Imambara",
        "Rumi Darwaza",
        "Hazratganj Market",
        "British Residency",
        "Chota Imambara",
        "Lucknow Zoo",
      ],
      highlights: [
        "Kanpur city tour on Day 1",
        "Explore Lucknow's Nawabi heritage",
        "Visit the magnificent Bara Imambara",
        "Walk through the iconic Rumi Darwaza",
        "Taste authentic Lucknowi Awadhi cuisine",
        "Shop at Hazratganj and Aminabad markets",
      ],
      price: 5500,
      priceLabel: "Starting from ₹5,500",
      inclusions: [
        "AC Sedan car for both days",
        "Professional driver",
        "Fuel charges",
        "Toll & parking",
        "Driver allowance & accommodation",
      ],
      exclusions: [
        "Hotel accommodation for guests",
        "Entry tickets",
        "Food & beverages",
        "Personal expenses",
      ],
      isActive: true,
      isFeatured: true,
      sortOrder: 5,
      metaTitle: "Kanpur-Lucknow Weekend Tour | 2-Day Heritage Trip",
      metaDescription:
        "2-day Kanpur-Lucknow weekend tour. Visit Bara Imambara, Rumi Darwaza & more. AC car, professional driver. Starting ₹5,500.",
    },
    {
      name: "Ayodhya-Prayagraj Pilgrimage",
      slug: "ayodhya-prayagraj-pilgrimage",
      tagline: "Sacred 2-day pilgrimage to Ayodhya and Prayagraj",
      description:
        "Embark on a sacred 2-day pilgrimage from Kanpur to Ayodhya and Prayagraj. Visit the magnificent Ram Mandir in Ayodhya and the holy Triveni Sangam in Prayagraj.",
      duration: "2 Days / 1 Night",
      distance: "~450 km",
      destinations: [
        "Ayodhya - Ram Mandir",
        "Hanuman Garhi",
        "Saryu River Ghat",
        "Prayagraj - Triveni Sangam",
        "Akshay Vat",
        "Anand Bhawan",
      ],
      highlights: [
        "Visit the newly built Ram Mandir in Ayodhya",
        "Seek blessings at Hanuman Garhi",
        "Evening Aarti at Saryu River",
        "Holy dip at Triveni Sangam in Prayagraj",
        "Visit the sacred Akshay Vat",
        "Explore Anand Bhawan museum",
      ],
      price: 6500,
      priceLabel: "Starting from ₹6,500",
      inclusions: [
        "AC Sedan car for both days",
        "Professional driver",
        "Fuel charges",
        "Toll charges",
        "Driver allowance & accommodation",
      ],
      exclusions: [
        "Hotel accommodation for guests",
        "Pooja items & boat rides",
        "Food & beverages",
        "Personal expenses",
      ],
      isActive: true,
      isFeatured: true,
      sortOrder: 6,
      metaTitle: "Ayodhya-Prayagraj Pilgrimage from Kanpur | 2-Day Tour",
      metaDescription:
        "2-day pilgrimage from Kanpur to Ayodhya (Ram Mandir) and Prayagraj (Triveni Sangam). AC car, professional driver. Starting ₹6,500.",
    },
  ];

  for (const tour of tours) {
    await prisma.tourPackage.upsert({
      where: { slug: tour.slug },
      update: tour,
      create: tour,
    });
  }
  console.log(`✅ ${tours.length} tour packages seeded`);

  // ──────────────────────────────────────────
  // Outstation Destinations
  // ──────────────────────────────────────────
  const destinations = [
    {
      name: "Lucknow",
      slug: "kanpur-to-lucknow",
      description:
        "Travel from Kanpur to Lucknow, the City of Nawabs. Known for its rich culture, Nawabi heritage, magnificent monuments like Bara Imambara and Rumi Darwaza, and world-famous Awadhi cuisine.",
      distance: "~80 km",
      distanceKm: 80,
      duration: "~1.5 hours",
      highlights: [
        "Bara Imambara",
        "Rumi Darwaza",
        "Hazratganj",
        "British Residency",
        "Lucknow Zoo",
        "Awadhi Cuisine",
      ],
      hatchbackPrice: 2000,
      sedanPrice: 2500,
      suvPrice: 3500,
      tempoPrice: 5000,
      routeVia: "via NH-27 (Lucknow-Kanpur Highway)",
      tollInfo: "1-2 toll plazas, approximately ₹100-150",
      bestTime: "October to March",
      isPopular: true,
      isActive: true,
      sortOrder: 1,
      metaTitle: "Kanpur to Lucknow Cab | One-Way & Round Trip",
      metaDescription:
        "Book Kanpur to Lucknow cab starting ₹2,000. One-way and round trip. 80 km, 1.5 hours. Professional drivers, AC cars. Book now!",
    },
    {
      name: "Agra",
      slug: "kanpur-to-agra",
      description:
        "Travel from Kanpur to Agra, home of the iconic Taj Mahal. Visit one of the Seven Wonders of the World along with Agra Fort, Fatehpur Sikri, and enjoy the rich Mughal heritage.",
      distance: "~280 km",
      distanceKm: 280,
      duration: "~4.5 hours",
      highlights: [
        "Taj Mahal",
        "Agra Fort",
        "Fatehpur Sikri",
        "Mehtab Bagh",
        "Itmad-ud-Daulah",
        "Local Markets",
      ],
      hatchbackPrice: 4500,
      sedanPrice: 5500,
      suvPrice: 7500,
      tempoPrice: 10000,
      routeVia: "via NH-19 (Agra-Lucknow Expressway)",
      tollInfo: "3-4 toll plazas, approximately ₹400-500",
      bestTime: "October to March",
      isPopular: true,
      isActive: true,
      sortOrder: 2,
      metaTitle: "Kanpur to Agra Cab | Taj Mahal Trip",
      metaDescription:
        "Book Kanpur to Agra cab starting ₹4,500. Visit Taj Mahal. One-way and round trip. 280 km, 4.5 hours. Book now!",
    },
    {
      name: "Varanasi",
      slug: "kanpur-to-varanasi",
      description:
        "Travel from Kanpur to Varanasi (Banaras/Kashi), one of the oldest living cities in the world. Experience the spiritual capital of India with its famous ghats, temples, and Ganga Aarti.",
      distance: "~330 km",
      distanceKm: 330,
      duration: "~5.5 hours",
      highlights: [
        "Dashashwamedh Ghat",
        "Kashi Vishwanath Temple",
        "Ganga Aarti",
        "Assi Ghat",
        "Sarnath",
        "BHU Campus",
      ],
      hatchbackPrice: 5500,
      sedanPrice: 6500,
      suvPrice: 9000,
      tempoPrice: 12000,
      routeVia: "via NH-19 / NH-31",
      tollInfo: "4-5 toll plazas, approximately ₹500-600",
      bestTime: "October to March",
      isPopular: true,
      isActive: true,
      sortOrder: 3,
      metaTitle: "Kanpur to Varanasi Cab | Kashi Trip",
      metaDescription:
        "Book Kanpur to Varanasi cab starting ₹5,500. Visit ghats, temples. One-way and round trip. 330 km, 5.5 hours. Book now!",
    },
    {
      name: "Delhi",
      slug: "kanpur-to-delhi",
      description:
        "Travel from Kanpur to Delhi, the capital of India. Explore historical monuments, modern attractions, world-class shopping, and diverse cuisine in this vibrant metropolis.",
      distance: "~440 km",
      distanceKm: 440,
      duration: "~6.5 hours",
      highlights: [
        "India Gate",
        "Red Fort",
        "Qutub Minar",
        "Lotus Temple",
        "Chandni Chowk",
        "Connaught Place",
      ],
      hatchbackPrice: 6500,
      sedanPrice: 8000,
      suvPrice: 11000,
      tempoPrice: 15000,
      routeVia: "via NH-19 (Agra-Lucknow Expressway + Yamuna Expressway)",
      tollInfo: "5-6 toll plazas, approximately ₹700-800",
      bestTime: "October to March",
      isPopular: true,
      isActive: true,
      sortOrder: 4,
      metaTitle: "Kanpur to Delhi Cab | Capital Trip",
      metaDescription:
        "Book Kanpur to Delhi cab starting ₹6,500. One-way and round trip. 440 km, 6.5 hours. Professional drivers. Book now!",
    },
    {
      name: "Prayagraj",
      slug: "kanpur-to-prayagraj",
      description:
        "Travel from Kanpur to Prayagraj (Allahabad), the holy city at the confluence of three sacred rivers. Experience the spiritual significance of Triveni Sangam and explore historical landmarks.",
      distance: "~200 km",
      distanceKm: 200,
      duration: "~3.5 hours",
      highlights: [
        "Triveni Sangam",
        "Akshay Vat",
        "Anand Bhawan",
        "Allahabad Fort",
        "Khusro Bagh",
        "Chandrashekhar Azad Park",
      ],
      hatchbackPrice: 3500,
      sedanPrice: 4000,
      suvPrice: 5500,
      tempoPrice: 8000,
      routeVia: "via NH-19",
      tollInfo: "2-3 toll plazas, approximately ₹200-300",
      bestTime: "October to March, Magh Mela season",
      isPopular: true,
      isActive: true,
      sortOrder: 5,
      metaTitle: "Kanpur to Prayagraj Cab | Triveni Sangam Trip",
      metaDescription:
        "Book Kanpur to Prayagraj cab starting ₹3,500. Visit Triveni Sangam. One-way and round trip. 200 km, 3.5 hours.",
    },
    {
      name: "Ayodhya",
      slug: "kanpur-to-ayodhya",
      description:
        "Travel from Kanpur to Ayodhya, the birthplace of Lord Ram. Visit the magnificent Ram Mandir and other sacred temples in this holy city of great religious significance.",
      distance: "~230 km",
      distanceKm: 230,
      duration: "~4 hours",
      highlights: [
        "Ram Mandir",
        "Hanuman Garhi",
        "Kanak Bhawan",
        "Saryu River",
        "Ram Ki Paidi",
        "Nageshwarnath Temple",
      ],
      hatchbackPrice: 3800,
      sedanPrice: 4500,
      suvPrice: 6500,
      tempoPrice: 9000,
      routeVia: "via NH-27 / NH-330",
      tollInfo: "2-3 toll plazas, approximately ₹250-350",
      bestTime: "October to March, Ram Navami",
      isPopular: true,
      isActive: true,
      sortOrder: 6,
      metaTitle: "Kanpur to Ayodhya Cab | Ram Mandir Trip",
      metaDescription:
        "Book Kanpur to Ayodhya cab starting ₹3,800. Visit Ram Mandir. One-way and round trip. 230 km, 4 hours. Book now!",
    },
    {
      name: "Jaipur",
      slug: "kanpur-to-jaipur",
      description:
        "Travel from Kanpur to Jaipur, the Pink City of Rajasthan. Explore magnificent forts, palaces, colorful markets, and experience the rich Rajasthani culture and cuisine.",
      distance: "~510 km",
      distanceKm: 510,
      duration: "~8 hours",
      highlights: [
        "Amber Fort",
        "Hawa Mahal",
        "City Palace",
        "Jantar Mantar",
        "Jal Mahal",
        "Nahargarh Fort",
      ],
      hatchbackPrice: 7500,
      sedanPrice: 9000,
      suvPrice: 12500,
      tempoPrice: 17000,
      routeVia: "via NH-19 & NH-21 (via Agra)",
      tollInfo: "6-7 toll plazas, approximately ₹800-1000",
      bestTime: "October to March",
      isPopular: false,
      isActive: true,
      sortOrder: 7,
      metaTitle: "Kanpur to Jaipur Cab | Pink City Trip",
      metaDescription:
        "Book Kanpur to Jaipur cab starting ₹7,500. Visit forts & palaces. One-way and round trip. 510 km, 8 hours.",
    },
    {
      name: "Mathura-Vrindavan",
      slug: "kanpur-to-mathura",
      description:
        "Travel from Kanpur to Mathura-Vrindavan, the birthplace of Lord Krishna. Visit the holy temples, experience the divine atmosphere, and explore the rich spiritual heritage.",
      distance: "~300 km",
      distanceKm: 300,
      duration: "~5 hours",
      highlights: [
        "Krishna Janmabhoomi",
        "Banke Bihari Temple",
        "Prem Mandir",
        "ISKCON Vrindavan",
        "Govardhan Hill",
        "Yamuna Ghats",
      ],
      hatchbackPrice: 4800,
      sedanPrice: 5800,
      suvPrice: 8000,
      tempoPrice: 11000,
      routeVia: "via NH-19 (Agra-Lucknow Expressway)",
      tollInfo: "3-4 toll plazas, approximately ₹400-500",
      bestTime: "October to March, Janmashtami, Holi",
      isPopular: false,
      isActive: true,
      sortOrder: 8,
      metaTitle: "Kanpur to Mathura-Vrindavan Cab | Krishna Trip",
      metaDescription:
        "Book Kanpur to Mathura cab starting ₹4,800. Visit Krishna Janmabhoomi. One-way and round trip. 300 km, 5 hours.",
    },
    {
      name: "Chitrakoot",
      slug: "kanpur-to-chitrakoot",
      description:
        "Travel from Kanpur to Chitrakoot, a sacred pilgrimage site associated with Lord Ram's exile. Nestled in the Vindhya Range, it offers spiritual retreats and natural beauty.",
      distance: "~230 km",
      distanceKm: 230,
      duration: "~4.5 hours",
      highlights: [
        "Kamadgiri Temple",
        "Ram Ghat",
        "Hanuman Dhara",
        "Bharat Milap Temple",
        "Gupt Godavari",
        "Sati Anusuiya Ashram",
      ],
      hatchbackPrice: 3800,
      sedanPrice: 4500,
      suvPrice: 6500,
      tempoPrice: 9000,
      routeVia: "via NH-34",
      tollInfo: "1-2 toll plazas, approximately ₹100-200",
      bestTime: "October to March",
      isPopular: false,
      isActive: true,
      sortOrder: 9,
      metaTitle: "Kanpur to Chitrakoot Cab | Pilgrimage Trip",
      metaDescription:
        "Book Kanpur to Chitrakoot cab starting ₹3,800. Visit Kamadgiri Temple. One-way and round trip. 230 km, 4.5 hours.",
    },
    {
      name: "Khajuraho",
      slug: "kanpur-to-khajuraho",
      description:
        "Travel from Kanpur to Khajuraho, famous for its stunning UNESCO World Heritage temples adorned with intricate sculptures. A must-visit for art, history, and architecture enthusiasts.",
      distance: "~290 km",
      distanceKm: 290,
      duration: "~5 hours",
      highlights: [
        "Western Group of Temples",
        "Kandariya Mahadeva Temple",
        "Lakshmana Temple",
        "Eastern Group of Temples",
        "Light & Sound Show",
        "Raneh Falls",
      ],
      hatchbackPrice: 4800,
      sedanPrice: 5800,
      suvPrice: 8000,
      tempoPrice: 11000,
      routeVia: "via NH-34 / NH-75",
      tollInfo: "2-3 toll plazas, approximately ₹200-300",
      bestTime: "October to March",
      isPopular: false,
      isActive: true,
      sortOrder: 10,
      metaTitle: "Kanpur to Khajuraho Cab | UNESCO Temple Trip",
      metaDescription:
        "Book Kanpur to Khajuraho cab starting ₹4,800. Visit UNESCO temples. One-way and round trip. 290 km, 5 hours.",
    },
  ];

  for (const dest of destinations) {
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: dest,
      create: dest,
    });
  }
  console.log(`✅ ${destinations.length} destinations seeded`);

  // ──────────────────────────────────────────
  // Testimonials
  // ──────────────────────────────────────────
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Govind Nagar, Kanpur",
      rating: 5,
      review:
        "Excellent service! Booked a sedan for an outstation trip to Lucknow. The car was spotlessly clean, and the driver was very professional and punctual. Will definitely use KanpurCabs again.",
      service: "Outstation Cab",
      isApproved: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      name: "Priya Singh",
      location: "Civil Lines, Kanpur",
      rating: 5,
      review:
        "Used their airport transfer service for an early morning flight from Chakeri airport. Driver arrived 15 minutes early. Very reliable and affordable. Highly recommended!",
      service: "Airport Transfer",
      isApproved: true,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      name: "Amit Agarwal",
      location: "Swaroop Nagar, Kanpur",
      rating: 4,
      review:
        "Booked a Tempo Traveller for a family pilgrimage to Ayodhya. The vehicle was comfortable with good AC and pushback seats. Driver was knowledgeable about the route. Great value for money.",
      service: "Tour/Sightseeing",
      isApproved: true,
      isFeatured: true,
      sortOrder: 3,
    },
    {
      name: "Deepa Gupta",
      location: "Kakadeo, Kanpur",
      rating: 5,
      review:
        "We hired a car for our daughter's wedding and it was beautifully decorated. The driver was very courteous and managed the entire baraat logistics perfectly. Thank you KanpurCabs!",
      service: "Wedding Car",
      isApproved: true,
      isFeatured: true,
      sortOrder: 4,
    },
    {
      name: "Vikash Mishra",
      location: "Kidwai Nagar, Kanpur",
      rating: 5,
      review:
        "Regular customer for local car rental. Use their 8hr/80km package for business meetings across the city. Always get clean cars with well-behaved drivers. Best cab service in Kanpur!",
      service: "Local Rental",
      isApproved: true,
      isFeatured: true,
      sortOrder: 5,
    },
    {
      name: "Sangeeta Tiwari",
      location: "Harsh Nagar, Kanpur",
      rating: 4,
      review:
        "Took the Bithoor pilgrimage tour package. The driver was an excellent guide and knew all the temples and ghats well. Car was comfortable and AC worked perfectly. Very satisfied.",
      service: "Tour/Sightseeing",
      isApproved: true,
      isFeatured: false,
      sortOrder: 6,
    },
    {
      name: "Rahul Srivastava",
      location: "Kalyanpur, Kanpur",
      rating: 5,
      review:
        "Our company uses KanpurCabs for all corporate travel needs. Their billing system with GST is very professional. Drivers are always on time and well-groomed. Excellent service!",
      service: "Corporate",
      isApproved: true,
      isFeatured: false,
      sortOrder: 7,
    },
    {
      name: "Neha Sharma",
      location: "Ashok Nagar, Kanpur",
      rating: 5,
      review:
        "Booked an Innova for a family trip from Kanpur to Varanasi. The driver was very experienced and made the journey very comfortable. Fair pricing with no hidden charges. Highly recommend!",
      service: "Outstation Cab",
      isApproved: true,
      isFeatured: true,
      sortOrder: 8,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }
  console.log(`✅ ${testimonials.length} testimonials seeded`);

  // ──────────────────────────────────────────
  // FAQs
  // ──────────────────────────────────────────
  const faqs = [
    {
      question: "How do I book a car in Kanpur?",
      answer:
        "Booking a car with KanpurCabs is easy! You can book through our website by filling out the booking form, call us directly at +91 98765 43210, or send us a WhatsApp message. We also accept bookings via email at info@kanpurcabs.com.",
      category: "booking",
      isActive: true,
      sortOrder: 1,
    },
    {
      question: "What types of cars are available for rent?",
      answer:
        "We offer a wide range of vehicles including Hatchbacks (Swift, WagonR), Sedans (Dzire, Aura, Etios), SUVs (Innova Crysta, Scorpio, Creta), Luxury cars (Fortuner, Camry), and Tempo Travellers (12-seater, 17-seater). All vehicles are AC and well-maintained.",
      category: "general",
      isActive: true,
      sortOrder: 2,
    },
    {
      question: "What are the charges for outstation trips from Kanpur?",
      answer:
        "Outstation charges depend on the vehicle type and destination. For one-way trips, rates start from ₹9/km for hatchbacks and ₹16/km for SUVs. Round trips have minimum daily distance requirements (usually 250-300 km/day). The fare includes fuel, driver charges, and basic insurance. Toll charges and state taxes are extra.",
      category: "pricing",
      isActive: true,
      sortOrder: 3,
    },
    {
      question: "Do you provide airport and railway station transfers?",
      answer:
        "Yes! We provide reliable pickup and drop services to Kanpur Airport (Chakeri), Kanpur Central Railway Station, Govindpuri Railway Station, and Kanpur Anwarganj station. We offer fixed pricing with no surge charges, available 24/7.",
      category: "airport",
      isActive: true,
      sortOrder: 4,
    },
    {
      question: "Are the drivers verified and professional?",
      answer:
        "Absolutely! All our drivers undergo thorough background verification including Aadhaar check, police verification, driving license verification, and address verification. They are professionally trained, courteous, and familiar with Kanpur and surrounding areas.",
      category: "safety",
      isActive: true,
      sortOrder: 5,
    },
    {
      question: "What is included in the local rental packages?",
      answer:
        "Our local rental packages include an AC car with a professional driver, fuel charges, and driver allowance. We offer three packages: 4 Hours/40 KMs, 8 Hours/80 KMs, and 12 Hours/120 KMs. Extra hours and kilometers are charged additionally at transparent rates.",
      category: "local",
      isActive: true,
      sortOrder: 6,
    },
    {
      question: "Can I book a car for a wedding?",
      answer:
        "Yes, we offer special wedding car rental services in Kanpur. We provide luxury decorated cars for the bride and groom, baraat cars, and Tempo Travellers for guest transport. We can customize decoration and arrangements according to your requirements.",
      category: "booking",
      isActive: true,
      sortOrder: 7,
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "We offer free cancellation up to 24 hours before the scheduled pickup time. Cancellations within 24 hours may attract a nominal cancellation fee. For immediate/same-day bookings, cancellation charges may apply based on the driver's travel to the pickup location.",
      category: "booking",
      isActive: true,
      sortOrder: 8,
    },
    {
      question: "Do you provide cars for corporate/business use?",
      answer:
        "Yes, we offer comprehensive corporate car rental solutions in Kanpur. This includes employee transport, client pickups, event logistics, and monthly retainer packages. We provide GST-compliant billing, dedicated account management, and premium fleet options.",
      category: "general",
      isActive: true,
      sortOrder: 9,
    },
    {
      question: "What happens if the trip goes beyond the package limit?",
      answer:
        "If your trip exceeds the included hours or kilometers in your package, additional charges will apply. Extra km rates range from ₹9-22/km based on vehicle type, and extra hour charges from ₹250-700/hour. These rates are communicated upfront during booking.",
      category: "pricing",
      isActive: true,
      sortOrder: 10,
    },
    {
      question: "Are night charges applicable?",
      answer:
        "Yes, a nominal night driving allowance is applicable for trips between 10:00 PM and 6:00 AM. Night charges range from ₹200-400 depending on the vehicle type. This is clearly mentioned during the booking process.",
      category: "pricing",
      isActive: true,
      sortOrder: 11,
    },
    {
      question: "Do you offer multi-city or multi-day trips?",
      answer:
        "Yes, we offer multi-city and multi-day outstation trips. Popular routes include Kanpur-Lucknow-Ayodhya, Kanpur-Agra-Jaipur, and Kanpur-Varanasi-Prayagraj. Multi-day trips include a minimum daily distance requirement (usually 250-300 km/day).",
      category: "outstation",
      isActive: true,
      sortOrder: 12,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept multiple payment methods including Cash, UPI (PhonePe, Google Pay, Paytm), Bank Transfer (NEFT/IMPS), and Credit/Debit Cards. For corporate clients, we also offer monthly invoicing with credit terms.",
      category: "pricing",
      isActive: true,
      sortOrder: 13,
    },
    {
      question: "Are toll charges and parking fees included?",
      answer:
        "For local rentals, parking charges at your destinations are borne by the passenger. For outstation one-way trips, toll charges are typically included in the fare. For round trips, toll charges and state entry taxes are paid by the passenger at the toll plaza.",
      category: "outstation",
      isActive: true,
      sortOrder: 14,
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through multiple channels: Phone: +91 98765 43210 (24/7), WhatsApp: +91 98765 43210, Email: info@kanpurcabs.com, or visit our office at Civil Lines, Kanpur. We are available round the clock for your queries and bookings.",
      category: "general",
      isActive: true,
      sortOrder: 15,
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }
  console.log(`✅ ${faqs.length} FAQs seeded`);

  // ──────────────────────────────────────────
  // Site Settings
  // ──────────────────────────────────────────
  const settings = [
    {
      key: "business_name",
      value: JSON.stringify("KanpurCabs"),
    },
    {
      key: "business_phone",
      value: JSON.stringify("+91 98765 43210"),
    },
    {
      key: "business_email",
      value: JSON.stringify("info@kanpurcabs.com"),
    },
    {
      key: "business_address",
      value: JSON.stringify("Civil Lines, Kanpur, Uttar Pradesh 208001"),
    },
    {
      key: "business_whatsapp",
      value: JSON.stringify("+919876543210"),
    },
    {
      key: "social_links",
      value: JSON.stringify({
        facebook: "https://facebook.com/kanpurcabs",
        instagram: "https://instagram.com/kanpurcabs",
        twitter: "https://twitter.com/kanpurcabs",
        youtube: "https://youtube.com/@kanpurcabs",
      }),
    },
    {
      key: "working_hours",
      value: JSON.stringify("24/7 Available"),
    },
    {
      key: "meta_title_template",
      value: JSON.stringify("%s | KanpurCabs - Car Rental & Tourism in Kanpur"),
    },
    {
      key: "meta_description",
      value: JSON.stringify(
        "Book affordable car rentals, outstation cabs, airport transfers, and sightseeing tours in Kanpur. Professional drivers, well-maintained cars, 24/7 service."
      ),
    },
  ];

  for (const setting of settings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log(`✅ ${settings.length} site settings seeded`);

  console.log("\n🎉 Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
