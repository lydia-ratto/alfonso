import React, { useState } from 'react';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import QuantityInput from '../QuantityInput/QuantityInput';

interface EventData {
    eventName: string;
    location: string;
    eventType: string;
    description?: string;
    maxAttendees?: number;
}

interface EventFormProps {
    onSubmit: (data: EventData) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<EventData>({
        eventName: '',
        location: '',
        eventType: 'meetup',
        maxAttendees: 10,
        description: '',
    });

    const [errors, setErrors] = useState<Partial<EventData>>({});

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string; value: string | number } }) => {
        const { name, value } = e.target;
        const finalValue = name === 'maxAttendees' ? Number(value) : value;
        setFormData(prev => ({ ...prev, [name]: finalValue }));
    };

    const validate = (): boolean => {
        const newErrors: Partial<EventData> = {};
        if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required.';
        if (!formData.location.trim()) newErrors.location = 'Location is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };
    
    const eventTypeOptions = [
        { value: 'meetup', label: 'Meetup' },
        { value: 'webinar', label: 'Webinar' },
        { value: 'conference', label: 'Conference' },
        { value: 'workshop', label: 'Workshop' },
    ];

    return (
        <div style={{ width: '100%' }}>
            <h2 style={{ color: 'var(--strawberry)', marginBottom: '0.5rem' }}>Create New Event</h2>
            <p style={{ marginTop: 0, marginBottom: '2rem', color: '#555' }}>Fill out the details below to schedule your next event.</p>
            
            <Form onSubmit={handleSubmit}>
                <FormField htmlFor="eventName" error={errors.eventName}>
                    <Input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        placeholder="React Advanced Workshop"
                    />
                </FormField>

                <FormField htmlFor="location" error={errors.location}>
                    <Input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="London, UK or 'Online'"
                    />
                </FormField>

                <FormField label='Select Shop' htmlFor="eventType">
                    <Select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        options={eventTypeOptions}
                    />
                </FormField>

                <FormField htmlFor="description">
                <TextArea
                    name="description"
                    placeholder="Event description (optional)"
                    rows={5}
                    onChange={handleChange}
                />
                </FormField>

                <FormField label='Max Attendees' htmlFor="maxAttendees">
                    <QuantityInput
                        id="maxAttendees"
                        name="maxAttendees"
                        value={formData.maxAttendees || 10}
                        onChange={handleChange}
                        min={0}
                        max={1000}
                        step={10}
                    />
                </FormField>

                <Button type="submit">Create Event</Button>
            </Form>
        </div>
    );
};

export default EventForm;