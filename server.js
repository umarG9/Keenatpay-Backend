/app/pay/mynita
/api/pay/niger with receiver_niger + receiver_nigeria
app.get('/api/pay/niger') with Mustapha Sani 94977274
// NIGER PAYMENT - FINAL VERSION
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
