import React, { useState } from 'react';
import MyNavbar from './components/Navbar';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const goals = useSelector(state => state.goals);
  const [view, setView] = useState('goals'); // Estado para controlar la vista entre las tasks y los goals

  const handleNavClick = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div className="App">
      <MyNavbar onViewChange={handleNavClick} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-top" style={{ top: 80 }}>
              {view === 'goals' && <GoalForm />}
              {view === 'tasks' && <TaskForm />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="goal-list-container">
              {view === 'goals' && <GoalList goals={goals} />}
              {view === 'tasks' && <TaskList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
