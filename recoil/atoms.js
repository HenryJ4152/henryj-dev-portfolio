import {
  atom,
} from 'recoil';


const portfolioState = atom({
  key: 'portfolio', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const skillsState = atom({
  key: 'skills', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const aboutState = atom({
  key: 'about', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
const contactState = atom({
  key: 'contact', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});


export { portfolioState, skillsState, aboutState, contactState }