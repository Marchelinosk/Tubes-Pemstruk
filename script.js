const ctx = document.getElementById('chartCanvas').getContext('2d');
    let chart;

    document.getElementById('excelFile').addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length === 0) return alert('Data kosong di file!');

        // Ambil key pertama sebagai label X dan kedua sebagai nilai Y
        const keys = Object.keys(jsonData[0]);
        const labels = jsonData.map(row => row[keys[0]]);
        const values = jsonData.map(row => row[keys[1]]);

        // Render Chart.js
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: `${keys[1]} berdasarkan ${keys[0]}`,
              data: values,
              backgroundColor: 'rgba(154, 21, 59, 0.69)',
              borderColor: 'rgb(154, 21, 59)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      };
      reader.readAsArrayBuffer(file);
    });

    function downloadPNG() {
        const link = document.createElement('a');
        link.download = 'grafik-excel.png';
        link.href = document.getElementById('chartCanvas').toDataURL('image/png');
        link.click();
    }

    async function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        const canvas = document.getElementById('chartCanvas');
        const imgData = canvas.toDataURL('image/png');

        pdf.text("Visualisasi Grafik dari Excel", 10, 10);
        pdf.addImage(imgData, 'PNG', 10, 20, 180, 100);
        pdf.save('grafik-excel.pdf');
    }
