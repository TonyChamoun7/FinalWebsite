import React, { useState } from "react";
import "./FieldsPage.css";
import { useTranslation } from "react-i18next";

function FieldsPage() {
  const { t } = useTranslation(); // Use the t function for translation

  const fields = [
    {
      name: "Etihad Stadium",
      description: t("fieldsPage.etihadDescription"),
      pricePerHour: "$50",
      fieldType: "11s",
      imageLink:
        "https://i.guim.co.uk/img/media/888a4d1a86c821338ae04c8af431b2d3dcb80fe6/0_346_5184_3110/master/5184.jpg?width=1200&quality=85&auto=format&fit=max&s=774f6f583792a767bcefa1abe7d000dd",
      alt:"Etihad Stadium"
    },
    {
      name: "Allianz Arena",
      description: t("fieldsPage.allianzDescription"),
      pricePerHour: "$40",
      fieldType: "7s",
      imageLink:
        "https://imgresizer.eurosport.com/unsafe/2560x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/03/23/3667700-74662928-2560-1440.jpg",
      alt:"Allianz Arena"
    },
    {
      name: "Santiago Bernabeu",
      description: t("fieldsPage.bernabeuDescription"),
      pricePerHour: "$30",
      fieldType: "11s",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Panoramic_santiago_bernabeu.jpg/1200px-Panoramic_santiago_bernabeu.jpg",
      alt: "Santiago Bernabeu"
    },
    {
      name: "Camp Nou",
      description: t("fieldsPage.campNouDescription"),
      pricePerHour: "$25",
      fieldType: "7s",
      imageLink:
        "https://cdn.sportmob.com/resource/news/20220114_980414/item_0_9879.jpg?cache=1643388441",
      alt: "Camp Nou"  
    },
  ];

  const [selectedFieldType, setSelectedFieldType] = useState("all");

  const handleFilterChange = (event) => {
    setSelectedFieldType(event.target.value);
  };

  const filteredFields =
    selectedFieldType === "all"
      ? fields
      : fields.filter((field) => field.fieldType === selectedFieldType);

  return (
    <div className="fields-page-container">
      <h1>{t("fieldsPage.title")}</h1>
      <div className="filter-container">
        <label className="filter-label">
          {t("fieldsPage.filterByFieldType")}
          <select
            value={selectedFieldType}
            onChange={handleFilterChange}
            className="field-filter"
          >
            <option value="all">{t("fieldsPage.filterAll")}</option>
            <option value="7s">{t("fieldsPage.filter7s")}</option>
            <option value="11s">{t("fieldsPage.filter11s")}</option>
          </select>
          <span className="filter-arrow"></span>
        </label>
      </div>
      <div className="fields-list">
        {filteredFields.map((field, index) => (
          <div className="field-card" key={index}>
            <div className="image-container">
              <img src={field.imageLink} alt={field.name} className="field-image" />
            </div>
            <h2 className="field-name">{field.name}</h2>
            <p className="field-description">{field.description}</p>
            <p className="field-price">{t("fieldsPage.fieldPrice")}: {field.pricePerHour}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FieldsPage;
