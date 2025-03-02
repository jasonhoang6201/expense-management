import Router from '@src/router';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// temporary fix for reanimated warning of react-native-draggable-flatlist
configureReanimatedLogger({
  level: ReanimatedLogLevel.error,
  strict: true,
});

function App() {
  return <Router />;
}

export default App;
