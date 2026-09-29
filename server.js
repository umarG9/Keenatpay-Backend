const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('KeenatPay Backend is Running');
});

// NIGER PAYMENT - MyNITA & Orange Money
app.get('/api/pay/niger', (req, res) => {
  res.json({
    status: "success",
    method: "MyNITA / Orange Money Niger",
    receiver: {
      name: "Mustapha Sani",
      phone: "94977274",
      full_phone: "+22794977274"
    },
    confirmation: {
      name: "Umar Hadi Gwani",
      whatsapp: "09026133849"
    },
    instructions: "Envoyez via MyNITA a 94 97 72 74"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
