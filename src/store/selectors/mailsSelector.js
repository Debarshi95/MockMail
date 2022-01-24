import { createSelector } from '@reduxjs/toolkit';

const selectMailState = (state) => state.mails;

export const selectMails = createSelector(selectMailState, (subState) => subState.data || []);

export const selectMailByTag = (tag = 'inbox') =>
  createSelector(selectMails, (data) => {
    const mails = data.filter((mail) => mail.tag === tag);
    return mails;
  });
export const selectMailById = (mailId) =>
  createSelector(selectMails, (data) => {
    const selectedMail = data?.find((mail) => mail.id === +mailId);
    return selectedMail;
  });
