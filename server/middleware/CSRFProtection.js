import csrf from 'csurf';

const CSRFProtection = csrf({ cookie: true });

export default CSRFProtection;
