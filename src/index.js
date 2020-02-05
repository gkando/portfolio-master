import './app.styles.scss';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

document.querySelectorAll('div.portfolio-preview').forEach(function(element) {
  element.addEventListener('click', function(e) {
    console.log(e.target.dataset.src);
    basicLightbox
      .create(
        `
    <img width="1400" height="900" src=${e.target.dataset.src}>
  `
      )
      .show();
  });
});

// document.querySelector('a.portfolio-preview').onclick = () => {

// };
