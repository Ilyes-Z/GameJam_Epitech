import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ChapterOne from './Component/ChapterOne';
import Home from './Component/Home';
import Header from './Component/Header';
import ChapterTwo from './Component/ChapterTwo';
import ChapterThree from './Component/ChapterThree';
import Final from './Component/Final';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/chapterOne' component={ChapterOne}></Route>
          <Route exact path='/chapterTwo' component={ChapterTwo}></Route>
          <Route exact path='/chapterThree' component={ChapterThree}></Route>
          <Route exact path='/final' component={Final}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
