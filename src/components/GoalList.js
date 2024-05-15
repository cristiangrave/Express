import React from 'react';
import Goal from './Goal';
import { useSelector, useDispatch } from 'react-redux';
import { removeGoal } from '../features/goals/goalsSlice';

const GoalList = () => {
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch();

    const onDone = id => {
        dispatch(removeGoal(id));
    };

    return (
        <div>
            {goals.map(goal => <Goal key={goal.id} {...goal} onDone={() => onDone(goal.id)} />)}
        </div>
    );
};

export default GoalList;