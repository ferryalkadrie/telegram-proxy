const express = require("express");
const fetch = require("node-fetch");
const app = express();

// ==== DATA TELEGRAM KAMU ====
const TOKEN = "aWpyUS_mLaUudznqfpJFZ4";
const CHAT_ID = "234";

// ==== ENDPOINT KIRIM PESAN ====
app.get("/send", async (req, res) => {
  const msg = req.query.msg || "Pesan kosong";
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(msg)}`;
  try {
    await fetch(url);
    res.send("Pesan terkirim: " + msg);
  } catch (e) {
    res.send("Gagal: " + e.message);
  }
});

// ==== JALANKAN SERVER ====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
