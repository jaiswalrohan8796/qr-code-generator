var qr;
var canva;
const downloadBtn = document.getElementById("download");
const backColor = document.getElementById("back-color");
const foreColor = document.getElementById("fore-color");
const editorCheck = document.getElementById('input-check');
(function () {
  canva = document.getElementById("canvas");
  canva.style.display = "none";
  qr = new QRious({
    element: canva,
    size: 250,
    value: "",
  });
})();

function generateQRCode() {
  var qrtext = document.getElementById("input-text").value;
  qr.set({
    background: backColor.value,
    foreground: foreColor.value,
    size: 200,
    value: qrtext,
  });
  canva.style.display = "block";
  setInterval(generateQRCode,1000);
}





const downloadImg = function (el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};
