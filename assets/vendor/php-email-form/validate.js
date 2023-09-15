const form = document.querySelector('.php-email-form');
const loading = document.querySelector('.loading');
const errorMessage = document.querySelector('.error-message');
const sentMessage = document.querySelector('.sent-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Menghentikan perilaku default saat mengirim formulir

  // Menampilkan pesan "Loading" selama pengiriman
  loading.style.display = 'block';

  // Mengirim data formulir dengan metode fetch atau AJAX
  try {
    const response = await fetch('url-untuk-mengirim-formulir.php', {
      method: 'POST',
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error('Gagal mengirim formulir');
    }

    // Menghilangkan pesan "Loading" setelah pengiriman berhasil
    loading.style.display = 'none';

    // Menampilkan pesan "Your message has been sent. Thank you!"
    sentMessage.style.display = 'block';

    // Mengosongkan formulir setelah pengiriman berhasil
    form.reset();
  } catch (error) {
    // Menghilangkan pesan "Loading" jika terjadi kesalahan
    loading.style.display = 'none';

    // Menampilkan pesan kesalahan jika pengiriman gagal
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Terjadi kesalahan saat mengirim formulir.';
  }
});

