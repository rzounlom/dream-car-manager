// Import the Car type definition to ensure type safety
// This ensures all car objects in the array conform to the Car interface
import type { Car } from "../types";

// Export a constant array of car objects
// This serves as mock data for the application
// In a real application, this data would typically come from an API or database
export const cars: Car[] = [
  // Car object 1: Bugatti Chiron (2022)
  // Each car object contains all the properties defined in the Car type
  {
    year: "2022", // Manufacturing year as a string
    make: "Bugatti", // Car manufacturer/brand
    model: "Chiron", // Specific model name
    description:
      "The 2022 Chiron isn't only the ultimate Bugatti, it's the ultimate car. Period. This $3 million work of art is capable of pummeling the pavement at over 200 mph thanks to a 16-cylinder engine that features four turbochargers and cranks out at least 1500 horsepower—the more expensive Super Sport model is even more powerful. The Chiron's cabin is just as artfully designed as its exterior, and it coddles occupants in fine materials that help justify its price tag. But let's be honest, people are really paying for the performance here. Those looking for modern conveniences (think Apple CarPlay) or driver-assistance tech, they won't find them here, but after driving this monster, they likely won't care about such minor drawbacks",
    imageUrl:
      "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:good,w_1920/cms/uploads/qk0zv5w7abyztbrwn1gp", // URL to car image
    favorite: true, // Boolean indicating if this car is marked as favorite
    id: "1", // Unique identifier for this car (string format)
    createdAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was created
    updatedAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was last updated
  },

  // Car object 2: Lamborghini Huracán (2024)
  {
    year: "2024",
    make: "Lamborghini",
    model: "Huracán",
    description:
      "Overview Lamborghini is a brand known for its extroverted styling and brash performance, which is embodied perfectly by the V-10–powered Huracán supercar. With 600-plus horsepower roaring just behind the cabin, the Huracán delivers heart-pounding acceleration with a spine-tingling soundtrack to match. It's just as home on the road as it is on a race track, and in both situations it delivers the razor-sharp handling you'd expect of a six-figure sports car. To turn up the insanity even further, a rally-inspired Huracán Sterrato with a raised suspension, a roof-top snorkel air intake, and special all-terrain tires is ready to do some light off-roading—and in our experience it's hilariously fun. The same can be said of the rest of the Huracán lineup, too, and its boisterous personality and extroverted looks imbue it with a charming outrageousness that rivals from Ferrari and McLaren can't quite match.",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato127-6467c8f12dcce.jpg?crop=0.739xw:0.624xh;0.0977xw,0.351xh&resize=2048:*",
    favorite: false, // This car is not marked as favorite
    id: "2",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // Car object 3: Bugatti Chiron (2022) - Duplicate with different ID
  // Note: This car has a different createdAt/updatedAt timestamp
  // In a real application, you'd want to avoid duplicate data
  {
    id: "3", // ID is at the top in this object (order doesn't matter in JavaScript objects)
    year: "2025",
    make: "Porche",
    model: "911",
    description:
      "Few modern automobiles have mastered the art of reinvention like the Porsche 911. For over five decades, Porsche has continued to adapt, update, and finesse the rear-engine blueprint, careful never to dilute its core identity or trademark driving experience. The 2025 Porsche 911, designated 992.2 in Porsche vernacular, continues its calculated evolution with the usual mild styling revisions and power upgrades, but hybridization arrives for real in the form of the T-Hybrid powertrain in the GTS. Not only does it include an integrated starter-generator, but it also uses an electrically assisted turbocharger. The coupe remains the cornerstone of the lineup, and the cabriolet and Targa models continue to deliver the same sharp handling and visceral thrills while the sun shines in. With so many variants trading under the 911 banner—not to mention the incredible number of options and upgrades—keeping the scorecard current can be difficult. It’s for that reason we review the even more performance-focused and expensive Turbo and GT3 models separately. This review is focused on the “standard” 911, which currently encompasses the Carrera, Carrera S, Carrera T, and GTS models. Though the Carrera T is lighter in weight with a focus on track performance, this class of 911s delivers balanced performance in the vein of a grand tourer; always engaging, they can effortlessly toggle between intense and relaxed behavior, making them the most versatile 911s of the lineup. As one of our favorites in its segment, the Porsche 911 has earned a spot on our Editors’ Choice list for 2025.",
    imageUrl:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.webp",
    favorite: false,
    createdAt: "2025-03-24T23:27:10.407Z", // Different timestamp from other cars
    updatedAt: "2025-03-24T23:27:10.407Z",
  },

  // Car object 4: Lamborghini Huracán (2024) - Duplicate with different ID
  {
    year: "2024",
    make: "Lamborghini",
    model: "Huracán",
    description:
      "Overview Lamborghini is a brand known for its extroverted styling and brash performance, which is embodied perfectly by the V-10–powered Huracán supercar. With 600-plus horsepower roaring just behind the cabin, the Huracán delivers heart-pounding acceleration with a spine-tingling soundtrack to match. It's just as home on the road as it is on a race track, and in both situations it delivers the razor-sharp handling you'd expect of a six-figure sports car. To turn up the insanity even further, a rally-inspired Huracán Sterrato with a raised suspension, a roof-top snorkel air intake, and special all-terrain tires is ready to do some light off-roading—and in our experience it's hilariously fun. The same can be said of the rest of the Huracán lineup, too, and its boisterous personality and extroverted looks imbue it with a charming outrageousness that rivals from Ferrari and McLaren can't quite match.",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato127-6467c8f12dcce.jpg?crop=0.739xw:0.624xh;0.0977xw,0.351xh&resize=2048:*",
    favorite: false,
    id: "4",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // Car object 5: Bugatti Chiron (2022) - Another duplicate
  {
    year: "2022",
    make: "Bugatti",
    model: "Chiron",
    description:
      "The 2022 Chiron isn't only the ultimate Bugatti, it's the ultimate car. Period. This $3 million work of art is capable of pummeling the pavement at over 200 mph thanks to a 16-cylinder engine that features four turbochargers and cranks out at least 1500 horsepower—the more expensive Super Sport model is even more powerful. The Chiron's cabin is just as artfully designed as its exterior, and it coddles occupants in fine materials that help justify its price tag. But let's be honest, people are really paying for the performance here. Those looking for modern conveniences (think Apple CarPlay) or driver-assistance tech, they won't find them here, but after driving this monster, they likely won't care about such minor drawbacks",
    imageUrl:
      "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:good,w_1920/cms/uploads/qk0zv5w7abyztbrwn1gp",
    favorite: false,
    id: "5",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },

  // Car object 6: Lamborghini Huracán (2024) - Marked as favorite
  {
    id: "6",
    year: "2025",
    make: "Porche",
    model: "911",
    description:
      "Few modern automobiles have mastered the art of reinvention like the Porsche 911. For over five decades, Porsche has continued to adapt, update, and finesse the rear-engine blueprint, careful never to dilute its core identity or trademark driving experience. The 2025 Porsche 911, designated 992.2 in Porsche vernacular, continues its calculated evolution with the usual mild styling revisions and power upgrades, but hybridization arrives for real in the form of the T-Hybrid powertrain in the GTS. Not only does it include an integrated starter-generator, but it also uses an electrically assisted turbocharger. The coupe remains the cornerstone of the lineup, and the cabriolet and Targa models continue to deliver the same sharp handling and visceral thrills while the sun shines in. With so many variants trading under the 911 banner—not to mention the incredible number of options and upgrades—keeping the scorecard current can be difficult. It’s for that reason we review the even more performance-focused and expensive Turbo and GT3 models separately. This review is focused on the “standard” 911, which currently encompasses the Carrera, Carrera S, Carrera T, and GTS models. Though the Carrera T is lighter in weight with a focus on track performance, this class of 911s delivers balanced performance in the vein of a grand tourer; always engaging, they can effortlessly toggle between intense and relaxed behavior, making them the most versatile 911s of the lineup. As one of our favorites in its segment, the Porsche 911 has earned a spot on our Editors’ Choice list for 2025.",
    imageUrl:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.webp",
    favorite: false,
    createdAt: "2025-03-24T23:27:10.407Z", // Different timestamp from other cars
    updatedAt: "2025-03-24T23:27:10.407Z",
  },
];
