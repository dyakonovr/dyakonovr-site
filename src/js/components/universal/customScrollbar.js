import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

OverlayScrollbars(document.querySelector('body'), {
  overflow: {
    x: 'hidden',
  },
  scrollbars: {
    theme: 'os-theme-light',
  },
});