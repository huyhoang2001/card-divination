export const TRIGRAMS = {
  1: { name: 'Càn', sign: 'Thiên', lines: [1, 1, 1], icon: '☰' },
  2: { name: 'Đoài', sign: 'Trạch', lines: [0, 1, 1], icon: '☱' },
  3: { name: 'Ly', sign: 'Hỏa', lines: [1, 0, 1], icon: '☲' },
  4: { name: 'Chấn', sign: 'Lôi', lines: [0, 0, 1], icon: '☳' },
  5: { name: 'Tốn', sign: 'Phong', lines: [1, 1, 0], icon: '☴' },
  6: { name: 'Khảm', sign: 'Thủy', lines: [0, 1, 0], icon: '☵' },
  7: { name: 'Cấn', sign: 'Sơn', lines: [1, 0, 0], icon: '☶' },
  8: { name: 'Khôn', sign: 'Địa', lines: [0, 0, 0], icon: '☷' },
};

export const HEXAGRAM_MAP = {
  // --- HẠ QUÁI: ĐỊA (KHÔN - 8) ---
  "8-8": { name: "Thuần Khôn" },
  "7-8": { name: "Sơn Địa Bác" },
  "6-8": { name: "Thủy Địa Tỷ" },
  "5-8": { name: "Phong Địa Quán" },
  "4-8": { name: "Lôi Địa Dự" },
  "3-8": { name: "Hỏa Địa Tấn" },
  "2-8": { name: "Trạch Địa Tụy" },
  "1-8": { name: "Thiên Địa Bĩ" },

  // --- HẠ QUÁI: SƠN (CẤN - 7) ---
  "8-7": { name: "Địa Sơn Khiêm" },
  "7-7": { name: "Thuần Cấn" },
  "6-7": { name: "Thủy Sơn Kiển" },
  "5-7": { name: "Phong Sơn Tiệm" },
  "4-7": { name: "Lôi Sơn Tiểu Quá" },
  "3-7": { name: "Hỏa Sơn Lữ" },
  "2-7": { name: "Trạch Sơn Hàm" },
  "1-7": { name: "Thiên Sơn Độn" },

  // --- HẠ QUÁI: THỦY (KHẢM - 6) ---
  "8-6": { name: "Địa Thủy Sư" },
  "7-6": { name: "Sơn Thủy Mông" },
  "6-6": { name: "Thuần Khảm" },
  "5-6": { name: "Phong Thủy Hoán" },
  "4-6": { name: "Lôi Thủy Giải" },
  "3-6": { name: "Hỏa Thủy Vị Tế" },
  "2-6": { name: "Trạch Thủy Khốn" },
  "1-6": { name: "Thiên Thủy Tụng" },

  // --- HẠ QUÁI: PHONG (TỐN - 5) ---
  "8-5": { name: "Địa Phong Thăng" },
  "7-5": { name: "Sơn Phong Cổ" },
  "6-5": { name: "Thủy Phong Tỉnh" },
  "5-5": { name: "Thuần Tốn" },
  "4-5": { name: "Lôi Phong Hằng" },
  "3-5": { name: "Hỏa Phong Đỉnh" },
  "2-5": { name: "Trạch Phong Đại Quá" },
  "1-5": { name: "Thiên Phong Cấu" },

  // --- HẠ QUÁI: LÔI (CHẤN - 4) ---
  "8-4": { name: "Địa Lôi Phục" },
  "7-4": { name: "Sơn Lôi Di" },
  "6-4": { name: "Thủy Lôi Truân" },
  "5-4": { name: "Phong Lôi Ích" },
  "4-4": { name: "Thuần Chấn" },
  "3-4": { name: "Hỏa Lôi Phệ Hạp" },
  "2-4": { name: "Trạch Lôi Tùy" },
  "1-4": { name: "Thiên Lôi Vô Vọng" },

  // --- HẠ QUÁI: HỎA (LY - 3) ---
  "8-3": { name: "Địa Hỏa Minh Di" },
  "7-3": { name: "Sơn Hỏa Bí" },
  "6-3": { name: "Thủy Hỏa Ký Tế" },
  "5-3": { name: "Phong Hỏa Gia Nhân" },
  "4-3": { name: "Lôi Hỏa Phong" },
  "3-3": { name: "Thuần Ly" },
  "2-3": { name: "Trạch Hỏa Cách" },
  "1-3": { name: "Thiên Hỏa Đồng Nhân" },

  // --- HẠ QUÁI: TRẠCH (ĐOÀI - 2) ---
  "8-2": { name: "Địa Trạch Lâm" },
  "7-2": { name: "Sơn Trạch Tổn" },
  "6-2": { name: "Thủy Trạch Tiết" },
  "5-2": { name: "Phong Trạch Trung Phu" },
  "4-2": { name: "Lôi Trạch Quy Muội" },
  "3-2": { name: "Hỏa Trạch Khuê" },
  "2-2": { name: "Thuần Đoài" },
  "1-2": { name: "Thiên Trạch Lý" },

  // --- HẠ QUÁI: THIÊN (CÀN - 1) ---
  "8-1": { name: "Địa Thiên Thái" },
  "7-1": { name: "Sơn Thiên Đại Súc" },
  "6-1": { name: "Thủy Thiên Nhu" },
  "5-1": { name: "Phong Thiên Tiểu Súc" },
  "4-1": { name: "Lôi Thiên Đại Tráng" },
  "3-1": { name: "Hỏa Thiên Đại Hữu" },
  "2-1": { name: "Trạch Thiên Quải" },
  "1-1": { name: "Thuần Càn" }
};

export const CARD_VALUES = {
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
};

export const SUITS = [
  { name: 'Hearts', symbol: '♥', color: 'red' },
  { name: 'Diamonds', symbol: '♦', color: 'red' },
  { name: 'Spades', symbol: '♠', color: 'black' },
  { name: 'Clubs', symbol: '♣', color: 'black' },
];