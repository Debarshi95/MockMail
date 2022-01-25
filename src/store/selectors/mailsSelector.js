import { createSelector } from '@reduxjs/toolkit';

const selectMailState = (state) => state.mails;

export const selectMails = createSelector(selectMailState, (subState) => subState.data || []);

export const selectMailByTag = (tag = 'inbox') =>
  createSelector(selectMails, (data) => {
    return tag === '' ? data : data.filter((mail) => mail.tag === tag);
  });

export const selectMailById = (mailId) =>
  createSelector(selectMails, (data) => {
    return data?.find((mail) => mail.id === +mailId);
  });

export const selectMailsBySearchText = (text = '') =>
  createSelector(selectMails, (data) => {
    let match = [];
    if (text === '') {
      return match;
    }
    const regex = new RegExp(text);

    const items = data.filter((item) =>
      Object.values(item).some((val) => {
        if (typeof val === 'number') {
          return val === +text;
        }
        return val.match(regex);
      })
    );
    match = [...items];

    return match;
  });
