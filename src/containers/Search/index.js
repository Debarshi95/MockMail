import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MailCard from '../../components/MailCard';
import Typography from '../../components/Typography';
import { selectMailsBySearchText } from '../../store/selectors/mailsSelector';
import { getFilterText } from '../../utils';

const Search = ({ location }) => {
  const searchText = getFilterText(location.search, '=');
  const data = useSelector(selectMailsBySearchText(searchText));

  return (
    <main>
      <section className="w-full sm:max-w-3xl mx-auto">
        {data.length ? (
          data.map((mail) => <MailCard mail={mail} key={mail.id} />)
        ) : (
          <Typography variant="h2" className="text-2xl text-center my-12">
            No mails found
          </Typography>
        )}
      </section>
    </main>
  );
};

Search.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};
export default Search;
