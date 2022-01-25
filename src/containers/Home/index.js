import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MailCard from '../../components/MailCard';
import Typography from '../../components/Typography';
import { selectMailByTag } from '../../store/selectors/mailsSelector';
import { getFilterText } from '../../utils';
import routes from '../../utils/routes';

const Home = ({ location }) => {
  const tag = getFilterText(location.pathname, '/') || '';
  const data = useSelector(selectMailByTag(tag));

  return (
    <main>
      <section className="w-full sm:max-w-3xl mx-auto">
        <div className="flex my-3 text-white text-sm font-medium">
          {Object.keys(routes).map((key) => {
            const { path } = routes[key];
            const pathName = key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <NavLink
                key={key}
                to={path}
                activeClassName="bg-blue-600"
                className="px-6 py-1 bg-blue-500 hover:bg-blue-600 rounded-2xl mx-2 sm:mr-4"
              >
                <Typography variant="h6">{pathName}</Typography>
              </NavLink>
            );
          })}
        </div>
        {data?.map((mail) => (
          <MailCard mail={mail} key={mail.id} />
        ))}
      </section>
    </main>
  );
};

Home.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
export default memo(Home);
