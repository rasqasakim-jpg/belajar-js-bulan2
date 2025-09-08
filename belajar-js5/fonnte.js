
const massageManager = function() {
  const messages = [];
  const API_URL = `https://api.fonnte.com/send`;
  const API_TOKEN = 'rSSgDEzigJXYq4icfvLt';
}

  const updateDisplay = () => {
    const display = document.getElementById('tag1');
    display.innerHTML = messages.length > 0 ? messages.join('<br>'): 'belom ada list pesan yang dikirim';
  };

  const add = (msg) => {
    messages.push(msg);
    updateDisplay();
  };

  const remove = (index) => {
    messages.splice(index, 1);
    updateDisplay();
  };

  const send = async () => {
    if (messages.length === 0) {
      alert('Tidak ada pesan untuk dikirim.');
      return;
    }

    const data = new FormData();
    data.append('target', '08123456789'); // Ganti dengan nomor target yang sesuai
    data.append('message', messages.join('\n'));

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: data
      });

      const result = await response.json();
      if (result.status) {
        alert('Pesan berhasil dikirim!');
        messages.length = 0; // Kosongkan pesan setelah dikirim
        updateDisplay();
      } else {
        alert(`Gagal mengirim pesan: ${result.reason}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim pesan.');
    }
  };

  return {
    add,
    remove,
    send,
    updateDisplay
  };
  



  








