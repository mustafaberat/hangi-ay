import { compareTwoStrings } from 'string-similarity';

// List of months with normalized names for matching
const months = [
  { number: 1, names: ["January", "Ocak"] },
  { number: 2, names: ["February", "Şubat"] },
  { number: 3, names: ["March", "Mart"] },
  { number: 4, names: ["April", "Nisan"] },
  { number: 5, names: ["May", "Mayıs"] },
  { number: 6, names: ["June", "Haziran"] },
  { number: 7, names: ["July", "Temmuz"] },
  { number: 8, names: ["August", "Ağustos"] },
  { number: 9, names: ["September", "Eylül"] },
  { number: 10, names: ["October", "Ekim"] },
  { number: 11, names: ["November", "Kasım"] },
  { number: 12, names: ["December", "Aralık"] }
];

// Normalize input to handle Turkish characters and general normalization
const normalizeString = (str: string) => {
  // Convert Turkish characters to their closest English equivalents
  const turkishToEnglishMap: { [key: string]: string } = {
    "ı": "i", "ç": "c", "ş": "s", "ğ": "g", "ü": "u", "ö": "o",
    "İ": "I", "Ç": "C", "Ş": "S", "Ğ": "G", "Ü": "U", "Ö": "O"
  };

  let normalized = str.toLowerCase().trim();
  normalized = normalized.replace(/[ıiçşğüö]/g, char => turkishToEnglishMap[char] || char);
  
  return normalized;
};

// Capitalize only the first letter of a string
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getMonthByNumber = (number: number): string => {
  const month = months.find(m => m.number === number);
  return month ? `${number} - ${capitalizeFirstLetter(month.names[0])} - ${capitalizeFirstLetter(month.names[1])}` : "";
};

export const getMonthByName = (name: string): string => {
  const normalizedInput = normalizeString(name);
  let bestMatch = { score: 0, month: null as any };

  months.forEach(month => {
    month.names.forEach(monthName => {
      const normalizedMonthName = normalizeString(monthName);
      const score = compareTwoStrings(normalizedInput, normalizedMonthName);
      if (score > bestMatch.score) {
        bestMatch = { score, month };
      }
    });
  });

  return bestMatch.score > 0.8 ? `${bestMatch.month.number} - ${capitalizeFirstLetter(bestMatch.month.names[0])} - ${capitalizeFirstLetter(bestMatch.month.names[1])}` : "";
};
