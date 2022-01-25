import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography';

const MailCard = ({ mail, ...props }) => {
  return (
    <div
      className="bg-zinc-50 text-zinc-700 px-6 py-4 sm:h-36 border-2 border-slate-200 rounded mb-4"
      {...props}
    >
      <Link to={`/mail/${mail.id}`}>
        <Typography variant="h5">
          Subject: <span className="font-semibold">{mail.subject}</span>
        </Typography>
        <Typography variant="h6" className="my-2">
          {mail.body}
        </Typography>
      </Link>
    </div>
  );
};

MailCard.propTypes = {
  mail: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    subject: PropTypes.string,
    body: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};

export default memo(MailCard);
