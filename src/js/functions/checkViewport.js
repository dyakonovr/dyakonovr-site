import vars from '../default/_vars.js';

export const isMobile = () => {
  if (window.innerWidth <= vars.breakpoints.mobile) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth > vars.breakpoints.mobile && window.innerWidth <= vars.breakpoints.tablet) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > vars.breakpoints.tablet) {
    return true;
  }

  return false;
};