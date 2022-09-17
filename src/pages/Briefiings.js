import React, { useState, useEffect } from "react";
import axios from "axios";

import TabHeader from "../components/TabHeader";

import classes from "../sass/pages/briefings.module.scss";

const Briefings = () => {
  const [timeTable, setTimeTable] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/timeTable`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.data.timeTable[0].classes) {
          setTimeTable(() => [...res.data.data.timeTable[0].classes]);
        }
      })
      .catch((err) => {
        window.alert("something went wrong fetching time-table!");
      });
  }, []);

  return (
    <>
      <TabHeader title="Briefings" />

      {timeTable.map((cur) => {
        return (
          <div className={classes["time-table__container"]} key={cur._id}>
            <h4 className={classes["time-table__subject"]}>{cur.subject}</h4>
            <p className={classes["time-table__time"]}>
              Starts at: {cur.startTime}
            </p>
            <p className={classes["time-table__time"]}>
              Ends at: {cur.endTime}
            </p>
          </div>
        );
      })}

      {/* <WorkInProgress /> */}
    </>
  );
};

export default Briefings;
