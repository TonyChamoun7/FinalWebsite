import React, { useState } from "react";
import "./Booking.css"; // Import CSS file for styling
import { useTranslation } from 'react-i18next'; // Add useTranslation import

function Booking() {
  const { t } = useTranslation(); // Use the t function for translation

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === "" ||
      dateTime === ""
    ) {
      alert(t('booking.requiredFields'));
      return;
    }

    // Perform submission logic or API call here
    console.log("Submitted:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedType,
      selectedField,
      selectedService,
      dateTime,
      isRecurring,
    });

    setIsSubmitted(true);
    // Clear form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedType("");
    setSelectedField("");
    setSelectedService("");
    setDateTime("");
    setIsRecurring(false);
  };

  const handleRecurringChange = (e) => {
    setIsRecurring(e.target.checked);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedField("");
    setSelectedService("");
  };

  const renderFieldOptions = () => {
    return (
      <select
        value={selectedField}
        onChange={(e) => setSelectedField(e.target.value)}
        className="form-input"
        required
      >
        <option value="">{t('booking.selectFieldOption')}</option>
        <option value="Field 1">{t('booking.field1')}</option>
        <option value="Field 2">{t('booking.field2')}</option>
        <option value="Field 3">{t('booking.field3')}</option>
        <option value="Field 4">{t('booking.field4')}</option>
      </select>
    );
  };

  const renderServiceOptions = () => {
    return (
      <select
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        className="form-input"
        required
      >
        <option value="">{t('booking.selectServiceOption')}</option>
        <option value="Shooting Practice">{t('booking.shootingPractice')}</option>
        <option value="Dribbling Practice">{t('booking.dribblingPractice')}</option>
        <option value="Passing Practice">{t('booking.passingPractice')}</option>
        <option value="Set Piece Practice">{t('booking.setPiecePractice')}</option>
        <option value="Defending Practice">{t('booking.defendingPractice')}</option>
        <option value="Goalie Practice">{t('booking.goaliePractice')}</option>
      </select>
    );
  };

  const renderConfirmation = () => {
    if (isSubmitted) {
      return (
        <div className="confirmation-message">
          <p>{t('booking.confirmation')}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="booking-container">
      <h1>{t('booking.title')}</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          {t('booking.firstname')}:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label>
          {t('booking.lastname')}:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label>
          {t('booking.email')}:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label>
          {t('booking.phone')}:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label>
          {t('booking.bookingtype')}:
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="form-input"
            required
          >
            <option value="">{t('booking.selectBookingType')}</option>
            <option value="field">{t('booking.field')}</option>
            <option value="training">{t('booking.training')}</option>
          </select>
        </label>
        {selectedType === "field" && (
          <label>
            {t('booking.selectfield')}: {renderFieldOptions()}
          </label>
        )}
        {selectedType === "training" && (
          <label>
            {t('booking.selectservice')}: {renderServiceOptions()}
          </label>
        )}
        <label>
          {t('booking.datetime')}:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label className="recurring-checkbox">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={handleRecurringChange}
            className="form-input"
          />
          <span className="recurring-checkbox-label">{t('booking.recurring')}</span>
        </label>
        <button type="submit" className="submit-button">
          {t('booking.book')}
        </button>
      </form>
      {renderConfirmation()}
    </div>
  );
}

export default Booking;
