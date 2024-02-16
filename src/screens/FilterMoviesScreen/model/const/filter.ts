export interface SortByItem {
  value: string;
  label: string;
}

export const sortByItems: SortByItem[] = [
  {label: 'Title (asc)', value: 'title.asc'},
  {label: 'Title (desc)', value: 'title.desc'},
  {label: 'Popularity (asc)', value: 'popularity.asc'},
  {label: 'Popularity (desc)', value: 'popularity.desc'},
  {label: 'Vote Average (asc)', value: 'vote_average.asc'},
  {label: 'Vote Average (desc)', value: 'vote_average.desc'},
  {label: 'Release Date (asc)', value: 'primary_release_date.asc'},
  {label: 'Release Date (desc)', value: 'primary_release_date.desc'},
];

export const sortByPlaceholder: SortByItem = {
  value: 'default',
  label: 'Default',
};
