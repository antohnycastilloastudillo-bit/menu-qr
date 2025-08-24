// Generar QR con tu link en GitHub Pages
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://antohnycastilloastudillo-bit.github.io/menu-qr/",
  width: 200,
  height: 200
});
