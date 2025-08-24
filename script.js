// Generar QR con la URL del menú
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: window.location.href, // Usa la URL actual del archivo
  width: 200,
  height: 200
});
