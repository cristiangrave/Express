import React from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../features/tasks/tasksSlice';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const onRemove = id => {
        dispatch(removeTask(id));
    };

    return (
        <div>
            {tasks.map(task => <Task key={task.id} {...task} onRemove={() => onRemove(task.id)} />)}
        </div>
    );
};

export default TaskList;
