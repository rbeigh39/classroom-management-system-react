import React from "react";
import dateFormater from "../utilities/dateFormater";

import classes from "../sass/components/resourceCard.module.scss";

const ResoureCard = (props) => {
  let downloadLink = null;
  let link = null;

  if (props.resource.fileName) {
    downloadLink = (
      <div className={classes["resource-card__download-container"]}>
        <img
          src="/assets/icon_download.svg"
          alt="Download Icon"
          className={classes["resource-card__download-icon"]}
        />
        <a
          href={`${process.env.REACT_APP_BACKEND_URL}/api/v1/resources/download/${props.resource.fileName}`}
          download={`Document`}
          className={classes["resource-card__download-link"]}
        >
          Download
        </a>
      </div>
    );
  }

  if (props.type === "link" && props.link) {
    link = (
      <a
        href={props.link}
        className={classes["resource-card__link"]}
        rel="noreferrer"
        target="_blank"
      >
        {props.link}
      </a>
    );
  }

  return (
    <div className={classes["resource-card__container"]}>
      <h2 className={classes["resource-card__title"]}>
        {props.resource.title}
      </h2>
      <p className={classes["resource-card__date"]}>
        {dateFormater(props.resource.createdAt)}
      </p>
      <p className={classes["resource-card__message"]}>
        {props.resource.description}
      </p>

      {downloadLink && downloadLink}
      {link && link}
    </div>
  );
};

export default ResoureCard;
