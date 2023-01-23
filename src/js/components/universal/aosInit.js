import AOS from 'aos';
import 'aos/dist/aos.css';
import vars from '../../default/_vars.js';

AOS.init({ disable: window.innerWidth <= vars.breakpoints.tablet, once: true});