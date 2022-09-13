import React, { useState, useEffect } from "react";

import TabHeader from "../components/TabHeader";
import SearchBar from "../components/SearchBar";
import ResoureCard from "../components/ResourceCard";

import axios from "axios";

import classes from "../sass/pages/resources.module.scss";

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/resources`,
      withCredentials: true,
    })
      .then((res) => {
        const newResources = res.data.data.resources;
        setResources((prevState) => {
          return [...resources, ...newResources];
        });
      })
      .catch((err) => {
        console.log("error fetching resources!", err);
        window.alert("Error fetching resources!");
      });

    return () => {
      setResources({});
    };
  }, []);

  return (
    <>
      <TabHeader title="Resources" />

      <div className={classes["resources-page"]}>
        <SearchBar />

        <main className={classes["resources-container"]}>
          {resources.map((cur) => {
            return <ResoureCard resource={cur} key={cur._id} />;
          })}

          {/* <ResoureCard type="media" />
          <ResoureCard
            type="link"
            link="https://www.pubble-app.herokuapp.com/resources.html/"
          />
          <ResoureCard type="link" />
          <ResoureCard type="media" />
          <ResoureCard type="media" /> */}
        </main>
      </div>
    </>
  );
};

export default Resources;
