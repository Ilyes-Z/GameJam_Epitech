import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterOne from './Component/ChapterOne';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/chapterOne' component={ChapterOne}></Route>
          <Route exact path='/chapterTwo'></Route>
          <Route exact path='/chapterThree'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
