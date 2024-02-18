export interface RootParamList {
  Home: undefined;
  EventDay: undefined;
  MovieDetails: {id: string | number};
  ProfileEdit: undefined;
  Profile: undefined;
  Movie: {genres: (number | string)[]};
  RandomMovie: undefined;
  CreateMovieSession: undefined;
  ConnectMovieSession: undefined;
  StartSession: {sessionId: string};
  EndSession: undefined;
  SearchScreen: undefined;
  Matches: undefined;
  FilterMovies: undefined;
  MatchesDetails: undefined;
  [key: string]: any;
}
