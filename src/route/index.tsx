import { css } from '@emotion/react';

import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { Route, Switch } from 'react-router-dom';
import Home from '../page/Home';
import index from '../page';

const Page = function () {
  const [folders, setFolders] = useState({});

  const states = {
    folders,
    setFolders,
  };
  return (
    <AppContext.Provider value={{ states }}>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </AppContext.Provider>
  );
};
export default Page;
