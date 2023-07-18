import React from "react";
import "./ServicesPage.css";
import { useTranslation } from 'react-i18next';

function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      name: t("services.shootingPractice"),
      description: t("services.shootingPracticeDescription"),
      pricePerHour: t("services.shootingPracticePrice"),
    },
    {
      name: t("services.dribblingPractice"),
      description: t("services.dribblingPracticeDescription"),
      pricePerHour: t("services.dribblingPracticePrice"),
    },
    {
      name: t("services.passingPractice"),
      description: t("services.passingPracticeDescription"),
      pricePerHour: t("services.passingPracticePrice"),
    },
    {
      name: t("services.setPiecePractice"),
      description: t("services.setPiecePracticeDescription"),
      pricePerHour: t("services.setPiecePracticePrice"),
    },
    {
      name: t("services.defendingPractice"),
      description: t("services.defendingPracticeDescription"),
      pricePerHour: t("services.defendingPracticePrice"),
    },
    {
      name: t("services.goaliePractice"),
      description: t("services.goaliePracticeDescription"),
      pricePerHour: t("services.goaliePracticePrice"),
    },
  ];

  return (
    <div className="services-page-container">
      <h1>{t("services.title")}</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <p className="service-price">{t("services.pricePerHour")}: {service.pricePerHour}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
