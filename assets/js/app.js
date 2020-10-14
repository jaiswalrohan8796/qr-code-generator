var qr;
var canva;
const downloadBtn = document.getElementById('download');
const backColor = document.getElementById('back-color');
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
    background: backColor,
    foreground: "black",
    size: 200,
    value: qrtext,
  });
  canva.style.display = 'block';
  downloadBtn.style.display = 'block';
}

 const downloadImg = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};
