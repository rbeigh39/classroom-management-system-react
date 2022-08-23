import React from "react";

import classes from "../sass/components/resourceCard.module.scss";

const ResoureCard = (props) => {
  let downloadLink = null;
  let link = null;

  if (props.type === "media") {
    downloadLink = (
      <div className={classes["resource-card__download-container"]}>
        <img
          src="/assets/icon_download.svg"
          alt="Download Icon"
          className={classes["resource-card__download-icon"]}
        />
        <a href="/#" className={classes["resource-card__download-link"]}>
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
      <h2 className={classes["resource-card__title"]}>Assignment Guidelines</h2>
      <p className={classes["resource-card__date"]}>22-12-2022</p>
      <p className={classes["resource-card__message"]}>
        The assignment guidelines are attached to this card. Please download it
        and follow it.
      </p>

      {downloadLink && downloadLink}
      {link && link}
    </div>
  );
};

export default ResoureCard;
