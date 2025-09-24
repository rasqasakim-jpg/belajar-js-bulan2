## JAWAB
1. Supaya field wajib diisi. Kalau kosong,  form tidak bisa di-submit dan browser otomatis kasih pesan error.

2. Tambahkan atribut pattern ke input:
input type="text" name="email" required pattern=".+@.+"

3. - min dipakai untuk tanggal atau angka
   - minlength dipakai untuk teks

4. Tambahkan event.preventDefault();

5. - HTML = otomatis, pakai atribut (required, pattern, min, dll.), browser yang urus.

- JavaScript = manual, kita bisa bikin logika lebih fleksibel, misalnya cek format, kasih pesan custom, atau validasi ke server.