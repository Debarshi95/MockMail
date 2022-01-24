import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { fetchMails } from '../../store/slices/mailSlice';
import { loadable } from '../../utils/loadable';
import routes from '../../utils/routes';

const TaggedMail = loadable(() => import('../TaggedMail'));
const Home = loadable(() => import('../Home'));
const MailDetail = loadable(() => import('../MailDetail'));

const App = () => {
  const dispatch = useDispatch();
  const pathArr = Object.keys(routes).map((key) => routes[key].path);

  useEffect(() => {
    dispatch(fetchMails());
  }, [dispatch]);

  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path={pathArr} exact component={TaggedMail} />
            <Route path="/mail/:id" component={MailDetail} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
