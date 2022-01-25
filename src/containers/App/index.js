import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { fetchMails } from '../../store/slices/mailSlice';
import { loadable } from '../../utils/loadable';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import routes from '../../utils/routes';

const Home = loadable(() => import('../Home'));
const MailDetail = loadable(() => import('../MailDetail'));
const Search = loadable(() => import('../Search'));

const App = () => {
  const dispatch = useDispatch();
  const tagPathNames = Object.keys(routes).map((key) => routes[key].path);
  const pathnames = ['/', ...tagPathNames];

  useEffect(() => {
    dispatch(fetchMails());
  }, [dispatch]);

  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={[...pathnames]}
              exact
              render={(props) => {
                const { search } = props.location;
                if (search) {
                  return <Search {...props} />;
                }
                return <Home {...props} />;
              }}
            />

            <Route path="/mail/:id" component={MailDetail} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
export default App;
