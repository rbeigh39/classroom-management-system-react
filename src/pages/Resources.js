import React from "react";

import TabHeader from "../components/TabHeader";
import SearchBar from "../components/SearchBar";
import ResoureCard from "../components/ResourceCard";

import classes from "../sass/pages/resources.module.scss";

const Resources = () => {
  return (
    <>
      <TabHeader title="Resources" />

      <div className={classes["resources-page"]}>
        <SearchBar />

        <main className={classes["resources-container"]}>
          <ResoureCard type="media" />
          <ResoureCard
            type="link"
            link="https://www.pubble-app.herokuapp.com/resources.html/"
          />
          <ResoureCard type="link" />
          <ResoureCard type="media" />
          <ResoureCard type="media" />
        </main>
      </div>
    </>
  );
};

export default Resources;
