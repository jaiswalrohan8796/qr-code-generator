var qr;
var canva;
(function () {
     canva = document.getElementById('canvas');
     canva.style.display = 'none'
    qr = new QRious({
    element: canva,
    size: 250,
    value: "",
  });
})();

function generateQRCode() {
  var qrtext = document.getElementById("input-text").value;
  qr.set({
    foreground: "black",
    size: 200,
    value: qrtext,
  });
  canva.style.display = 'block';
}
