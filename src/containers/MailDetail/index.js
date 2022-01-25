/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import MailCard from '../../components/MailCard';
import { selectMailById } from '../../store/selectors/mailsSelector';

const MailDetail = ({ match }) => {
  const { id } = match.params;
  const mail = useSelector(selectMailById(id));
  return (
    <div className="w-full sm:max-w-4xl mx-auto h-screen sm:py-6">
      <MailCard mail={mail} />
    </div>
  );
};

export default MailDetail;
