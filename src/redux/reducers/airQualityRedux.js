const DEFAULT_STATE = {
  pinnedResults: [{}],
};

export default function WeatherRedux(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }
}