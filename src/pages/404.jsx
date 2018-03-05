import React from 'react';
import Helmet from 'react-helmet';

import Aux from '../utils/Aux';

const NotFoundPage = () => (
  <Aux>
    <Helmet>
      <title>Page Not Found</title>
      <meta name="description" content="Page Not Found" />
    </Helmet>
    <h1>NOT FOUND</h1>
  </Aux>
);

export default NotFoundPage;
