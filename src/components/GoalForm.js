// src/components/GoalForm.js
import React, { useState } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import './../styles/GoalForm.css';
import { useDispatch } from 'react-redux';
import { addGoal } from '../features/goals/goalsSlice';

const GoalForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [errors, setErrors] = useState({});
    const [formVisible, setFormVisible] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            dispatch(addGoal({ title, description, deadline }));
            setTitle('');
            setDescription('');
            setDeadline('');
            setErrors({});
            setFormVisible(false);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!title.trim()) {
            errors.title = 'El nombre de la meta es requerido';
        }
        if (!description.trim()) {
            errors.description = 'La descripción es requerida';
        }
        if (!deadline) {
            errors.deadline = 'La fecha límite es requerida';
        }
        return errors;
    };

    const handleChange = (e, setter) => {
        setter(e.target.value);
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    return (
        <>
            <Form className={`m-3 ${!formVisible ? 'mobile-hide' : ''}`} onSubmit={handleSubmit}>
                {errors.general && <Alert variant="danger">{errors.general}</Alert>}
                <Form.Group className='custom-form-group'>
                    <Form.Label className='fw-bold mt-2'>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Nombre de la meta"
                        value={title}
                        onChange={(e) => handleChange(e, setTitle)}
                        isInvalid={errors.title}
                    />
                    <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='custom-form-group'>
                    <Form.Label className='fw-bold mt-2'>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Descripción"
                        value={description}
                        onChange={(e) => handleChange(e, setDescription)}
                        isInvalid={errors.description}
                    />
                    <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='custom-form-group'>
                    <Form.Label className='fw-bold mt-2'>Fecha Límite</Form.Label>
                    <Form.Control
                        type="date"
                        name="deadline"
                        value={deadline}
                        onChange={(e) => handleChange(e, setDeadline)}
                        isInvalid={errors.deadline}
                    />
                    <Form.Control.Feedback type="invalid">{errors.deadline}</Form.Control.Feedback>
                </Form.Group>
                <div className='text-center'>
                    <Button className='mt-3 btn-violet-primary text-black' size="lg" type="submit">
                        Añadir Meta
                    </Button>
                </div>
            </Form>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir Meta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='custom-form-group'>
                            <Form.Label className='fw-bold mt-2'>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Nombre de la meta"
                                value={title}
                                onChange={(e) => handleChange(e, setTitle)}
                                isInvalid={errors.title}
                            />
                            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='custom-form-group'>
                            <Form.Label className='fw-bold mt-2'>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                placeholder="Descripción"
                                value={description}
                                onChange={(e) => handleChange(e, setDescription)}
                                isInvalid={errors.description}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='custom-form-group'>
                            <Form.Label className='fw-bold mt-2'>Fecha Límite</Form.Label>
                            <Form.Control
                                type="date"
                                name="deadline"
                                value={deadline}
                                onChange={(e) => handleChange(e, setDeadline)}
                                isInvalid={errors.deadline}
                            />
                            <Form.Control.Feedback type="invalid">{errors.deadline}</Form.Control.Feedback>
                        </Form.Group>
                        <div className='text-center'>
                            <Button className='mt-3 btn-violet-primary text-black' size="lg" type="submit">
                                Añadir Meta
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default GoalForm;
