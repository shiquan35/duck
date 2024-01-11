import React, { useState, useEffect } from "react";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInDays,
  parseISO,
} from "date-fns";

export interface IAppProps {}

interface HowLong {
  numYears?: number;
  numMonths?: number;
  numDays?: number;
}

export function Dates(props: IAppProps) {
  const [startDate, setStartDate] = useState<any>(null);
  const [howLong, setHowLong] = useState<HowLong>({});

  const [today, setToday] = useState<Date>(new Date());
  const [wedding, setWedding] = useState<Date>(new Date(2024, 9, 21));
  const [weddingDays, setWeddingDays] = useState<number>();

  useEffect(() => {
    setStartDate(new Date("2022-07-31"));
  }, []);

  // calculate how long we've been together
  useEffect(() => {
    const today = new Date();
    if (startDate) {
    }
    const differenceInTime = today.getTime() - startDate; // Ensure startDate is not null
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = Math.floor((differenceInDays % 365) % 30);

    setHowLong({
      numYears: years,
      numMonths: months,
      numDays: days,
    });
  }, [startDate]);

  // wedding countdown
  useEffect(() => {
    const targetDate = parseISO("2024-09-21");
    const differenceWeddingDays = differenceInCalendarDays(targetDate, today);

    setWeddingDays(differenceWeddingDays);
  }, [today, wedding]);

  return (
    <>
      {howLong.numYears === 1 ? (
        <h5>
          We've been together for:
          <br />
          {howLong.numYears} Year,
          <br />
          {howLong.numMonths} Months,
          <br />
          {howLong.numDays} Days
        </h5>
      ) : (
        <h5>
          We've been together for:
          <br />
          {howLong.numYears} Years,
          <br />
          {howLong.numMonths} Months,
          <br />
          {howLong.numDays} Days
        </h5>
      )}
      <br />
      <h3>Wedding countdown:</h3>
      {`${weddingDays} days`}
    </>
  );
}
