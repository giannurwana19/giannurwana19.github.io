const scriptURL =
  'https://script.google.com/macros/s/AKfycbxzKzkne28YNnF_uMdPIwJFzKrMfhY0hjgpy7I0KgYdCLacdsCLNtUeylXsZj8GTZsU/exec';
const form = document.forms['submit-to-google-sheet'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombal kirim
  btnSubmit.classList.toggle('d-none');
  btnLoading.classList.toggle('d-none');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // tampilkan tombol kirim, hilangkan tombal loading
      btnSubmit.classList.toggle('d-none');
      btnLoading.classList.toggle('d-none');

      // tampilkan alert
      alertSuccess.classList.toggle('d-none');

      // reset form
      form.reset();
      console.log('Success!');
    })
    .catch(error => console.error('Error!', error.message));
});

// e.preventDefault();
// e.preventDefault() akan mengirimkan data dengan method get (fungsi default nya)
