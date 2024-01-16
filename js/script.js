function changeShape() {
  var selectedShape = document.getElementById('shapeSelect').value;
  showShapeForm(selectedShape);
}

function showShapeForm(shape) {
  // Menyembunyikan semua formulir
  document.getElementById('squareForm').classList.add('hidden');
  
  // Menampilkan formulir berdasarkan bentuk yang dipilih
  document.getElementById(shape + 'Form').classList.remove('hidden');
}

function hitungLuas(shape) {
  var side = parseFloat(document.getElementById(shape + 'Side').value);

  if (isNaN(side) || side <= 0) {
    alert("Masukkan panjang sisi yang valid!");
    return;
  }

  var result = side * side;
  document.getElementById(shape + 'ResultLuas').innerHTML = '<p>L = S x S</p>';
  document.getElementById(shape + 'ResultLuas').innerHTML += '<p>L = ' + side + ' x ' + side + '</p>';
  document.getElementById(shape + 'ResultLuas').innerHTML += '<p>L = ' + result + '</p>';
}

function hitungKeliling(shape) {
  var side = parseFloat(document.getElementById(shape + 'SideKeliling').value);

  if (isNaN(side) || side <= 0) {
    alert("Masukkan panjang sisi yang valid!");
    return;
  }

  var result = 4 * side;
  document.getElementById(shape + 'ResultKeliling').innerHTML = '<p>K = 4 x S</p>';
  document.getElementById(shape + 'ResultKeliling').innerHTML += '<p>K = 4 x ' + side + '</p>';
  document.getElementById(shape + 'ResultKeliling').innerHTML += '<p>K = ' + result + '</p>';
}

function resetForm(shape, type) {
  if (type === 'Luas') {
    // Reset bagian luas saja
    document.getElementById(shape + 'Side').value = '';
    document.getElementById(shape + 'Result' + type).innerHTML = '';
  } else if (type === 'Keliling') {
    // Reset bagian keliling saja
    document.getElementById(shape + 'SideKeliling').value = '';
    document.getElementById(shape + 'Result' + type).innerHTML = '';
  }
}

