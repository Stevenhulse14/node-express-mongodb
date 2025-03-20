# Making a Rest API that will have printer data and ink data.

```

let inks = [
  { id: 101, brand: "HP", type: "LaserJet Toner Black", compatiblePrinters: [1,5,9,13,17,21,25,29,33,37], price: 45, priceTier: "Medium" },
  { id: 102, brand: "Epson", type: "EcoTank Refill Color", compatiblePrinters: [2,6,10,14,18,22,26,30,34,38], price: 35, priceTier: "Cheap" },
  { id: 103, brand: "Canon", type: "PIXMA Ink Black", compatiblePrinters: [3,7,11,15,19,23,27,31,35,39], price: 30, priceTier: "Cheap" },
  { id: 104, brand: "Brother", type: "LC3013 Ink Color", compatiblePrinters: [4,8,12,16,20,24,28,32,36,40], price: 55, priceTier: "Medium" },
  { id: 105, brand: "HP", type: "LaserJet Toner Color", compatiblePrinters: [1,5,9,13,17,21,25,29,33,37], price: 60, priceTier: "Expensive" },
  { id: 106, brand: "Epson", type: "EcoTank Refill Black", compatiblePrinters: [2,6,10,14,18,22,26,30,34,38], price: 30, priceTier: "Cheap" },
  { id: 107, brand: "Canon", type: "PIXMA Ink Color", compatiblePrinters: [3,7,11,15,19,23,27,31,35,39], price: 40, priceTier: "Medium" },
  { id: 108, brand: "Brother", type: "LC3013 Ink Black", compatiblePrinters: [4,8,12,16,20,24,28,32,36,40], price: 50, priceTier: "Medium" },
  { id: 109, brand: "Lexmark", type: "MS Toner Black", compatiblePrinters: [], price: 70, priceTier: "Expensive" },
  { id: 110, brand: "Xerox", type: "Phaser Toner Color", compatiblePrinters: [], price: 80, priceTier: "Expensive" }
];

let printers = [
  { id: 1, name: "HP LaserJet Pro", model: "MFP M227fdw", inkIds: [101,105], price: 250 },
  { id: 2, name: "Epson EcoTank", model: "ET-2720", inkIds: [102,106], price: 200 },
  { id: 3, name: "Canon PIXMA", model: "TR8520", inkIds: [103,107], price: 180 },
  { id: 4, name: "Brother MFC", model: "J895DW", inkIds: [104,108], price: 150 },
  { id: 5, name: "HP OfficeJet Pro", model: "8025", inkIds: [101,105], price: 220 },
  { id: 6, name: "Epson WorkForce", model: "WF-2830", inkIds: [102,106], price: 170 },
  { id: 7, name: "Canon MAXIFY", model: "MB2720", inkIds: [103,107], price: 210 },
  { id: 8, name: "Brother HL", model: "L2395DW", inkIds: [104,108], price: 130 },
  { id: 9, name: "HP ENVY", model: "6055", inkIds: [101,105], price: 120 },
  { id: 10, name: "Epson Expression", model: "XP-4100", inkIds: [102,106], price: 100 },
  { id: 11, name: "Canon PIXMA G-Series", model: "G6020", inkIds: [103,107], price: 250 },
  { id: 12, name: "Brother DCP", model: "L2550DW", inkIds: [104,108], price: 160 },
  { id: 13, name: "HP Tango X", model: "3DP65A", inkIds: [101,105], price: 200 },
  { id: 14, name: "Epson Artisan", model: "1430", inkIds: [102,106], price: 299 },
  { id: 15, name: "Canon imageCLASS", model: "MF267dw", inkIds: [103,107], price: 195 },
  { id: 16, name: "Brother Compact", model: "HLL2350DW", inkIds: [104,108], price: 120 },
  { id: 17, name: "HP DeskJet", model: "3755", inkIds: [101,105], price: 89 },
  { id: 18, name: "Epson SureColor", model: "P400", inkIds: [102,106], price: 599 },
  { id: 19, name: "Canon SELPHY", model: "CP1300", inkIds: [103,107], price: 129 },
  { id: 20, name: "Brother LED", model: "HL-L3210CW", inkIds: [104,108], price: 199 }
];



```

New API Endpoints
Method Route Description

GET /printers Get all printers
GET /printers/:id Get a specific printer
POST /printers Add a new printer (Admin)
GET /inks Get all ink products
GET /inks/:id Get a specific ink product
POST /inks Add a new ink product (Admin)
POST /orders Place a new order
GET /orders Get all orders
GET /orders/user/:userId Get all orders for a user
PUT /orders/:id Update order status (Admin)

DELETE (admin)
DELETE (admin)
