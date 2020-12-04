import ReactGA from 'react-ga';
import { useEffect } from 'react';

const useGoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-D69SQJM7RZ');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
};

export default useGoogleAnalytics;
