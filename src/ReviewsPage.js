import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ReviewsPage.css';

function ReviewsPage() {
  const { t } = useTranslation();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Fadi Jarade',
      content: 'reviewsPage.review1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'reviewsPage.review2',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      content: 'reviewsPage.review3',
    },
    {
      id: 4,
      name: 'Emily Wilson',
      content: 'reviewsPage.review4',
    },
    {
      id: 5,
      name: 'David Brown',
      content: 'reviewsPage.review5',
    },
    {
      id: 6,
      name: 'Sarah Davis',
      content: 'reviewsPage.review6',
    },
  ]);

  const [newReview, setNewReview] = useState({ name: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = reviews.length + 1;
    const updatedReviews = [...reviews, { ...newReview, id }];
    setReviews(updatedReviews);
    setNewReview({ name: '', content: '' });
  };

  return (
    <div className="reviews-container">
      <h1>{t('reviewsPage.title')}</h1>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <h3 className="review-name">{review.name}</h3>
            <p className="review-content">{t(review.content)}</p>
          </div>
        ))}
      </div>
      <form className="review-form" onSubmit={handleSubmit}>
        <h2>{t('reviewsPage.writeReview')}</h2>
        <div className="form-group">
          <label htmlFor="name">{t('reviewsPage.nameLabel')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">{t('reviewsPage.reviewLabel')}</label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          {t('reviewsPage.submitButton')}
        </button>
      </form>
    </div>
  );
}

export default ReviewsPage;
