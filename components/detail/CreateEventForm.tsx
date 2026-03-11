'use client';

import { useState } from 'react';

export default function CreateEventForm() {
  const [eventType, setEventType] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [callStatus, setCallStatus] = useState('');
  const [visitStatus, setVisitStatus] = useState('');
  const [promiseStatus, setPromiseStatus] = useState('');
  const [eventNote, setEventNote] = useState('');

  return (
    <form
      className="form w-100 p-4 bg-gray-50 rounded-lg shadow-sm"
      method="post"
      action="/event/update?action_plan=false&neo_id=eSlUOzTPEKZyO5eIQ57piw3BG&owner_class=ModelApplication"
      autoComplete="off"
    >
      <div className="form-group mb-4">
        <label>Type</label>
        <select
          className="form-control"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">Select type</option>
          <optgroup label="Already Completed!">
            <option value="Visited Store">Walk-In</option>
            <option value="Received Call">Received Call</option>
            <option value="Placed Call">Placed Call</option>
            <option value="Sent Email">Sent Email</option>
          </optgroup>
          <optgroup label="Schedule For Future">
            <option value="Follow Up">Follow Up</option>
            <option value="Appointment">Appointment</option>
          </optgroup>
        </select>
      </div>

      <div className="form-group mb-4">
        <label>Schedule for?</label>
        <input
          className="form-control"
          type="text"
          placeholder="Select date & time"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
        />
      </div>

      <div className="form-group mb-4">
        <label>Call Outcome</label>
        <select
          className="form-control"
          value={callStatus}
          onChange={(e) => setCallStatus(e.target.value)}
        >
          <option value="">Select call outcome</option>
          <option value="Busy">Busy</option>
          <option value="Call Rejected">Call Rejected</option>
          <option value="Disconnected">Disconnected</option>
          <option value="Left VM">Left VM</option>
          <option value="No Answer">No Answer</option>
          <option value="Spoke with Customer">Spoke with Customer</option>
        </select>
      </div>

      <div className="form-group mb-4">
        <label>Visit Outcome</label>
        <select
          className="form-control"
          value={visitStatus}
          onChange={(e) => setVisitStatus(e.target.value)}
        >
          <option value="">Select visit outcome</option>
          <option value="Application Submitted">Application Submitted</option>
          <option value="Didn't Like Selection">Didn't Like Selection</option>
          <option value="Not Ready">Not Ready</option>
          <option value="Showed">Showed</option>
        </select>
      </div>

      <div className="form-group mb-4">
        <label>Promise Outcome</label>
        <select
          className="form-control"
          value={promiseStatus}
          onChange={(e) => setPromiseStatus(e.target.value)}
        >
          <option value="">Select promise outcome</option>
          <option value="Cleared">Cleared</option>
          <option value="Not Cleared">Not Cleared</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="form-group mb-4">
        <label>Event note</label>
        <textarea
          className="form-control"
          rows={5}
          value={eventNote}
          onChange={(e) => setEventNote(e.target.value)}
          placeholder="Add any notes for this event..."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
}