const notification = document.querySelector('#notification');
const mailBtns = document.querySelectorAll('#mail-btn');
const animationDuration = 3000; // в секундах

if (notification && mailBtns) {
  mailBtns.forEach(mailBtn => {
    mailBtn.addEventListener('click', function () {
      const myMail = mailBtn.getAttribute("data-mail");

      notification.classList.add('notification--active');
      navigator.clipboard.writeText(myMail);

      setTimeout(function () { notification.classList.remove('notification--active') }, animationDuration);
    });
  });
}