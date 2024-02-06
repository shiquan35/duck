import React, { useState, useEffect } from "react";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";

export interface IAppProps {}

interface HowLong {
  numYears?: number;
  numMonths?: number;
  numDays?: number;
}

export function Dates(props: IAppProps) {
  const [howLong, setHowLong] = useState<HowLong>({});

  const [today, setToday] = useState<Date>(new Date());
  const [wedding, setWedding] = useState<Date>(new Date(2024, 9, 21));
  const [weddingDays, setWeddingDays] = useState<number>();

  const [marriage, setMarriage] = useState<HowLong>({});

  // how long we've been together v2
  useEffect(() => {
    const startDate = new Date(2022, 6, 31);

    const currentDate = new Date();

    // Calculate the differences
    const yearsPassed = differenceInYears(currentDate, startDate);
    const monthsPassed =
      differenceInMonths(currentDate, startDate) - yearsPassed * 12;

    // Get the remaining days after subtracting the years and months
    const startDatePlusYearsMonths = new Date(startDate);
    startDatePlusYearsMonths.setFullYear(
      startDatePlusYearsMonths.getFullYear() + yearsPassed
    );
    startDatePlusYearsMonths.setMonth(
      startDatePlusYearsMonths.getMonth() + monthsPassed
    );
    const daysPassed = differenceInDays(currentDate, startDatePlusYearsMonths);

    // console.log(`Years passed: ${yearsPassed}`);
    // console.log(`Months passed: ${monthsPassed}`);
    // console.log(`Days passed: ${daysPassed}`);

    setHowLong({
      numYears: yearsPassed,
      numMonths: monthsPassed,
      numDays: daysPassed,
    });
  }, []);

  // wedding countdown
  useEffect(() => {
    const targetDate = parseISO("2024-09-21");
    const differenceWeddingDays = differenceInCalendarDays(targetDate, today);

    setWeddingDays(differenceWeddingDays);
  }, [today, wedding]);

  // how long we've been married
  useEffect(() => {
    const startDate = new Date(2024, 8, 21);

    const currentDate = new Date();

    // Calculate the differences
    const yearsPassed = differenceInYears(currentDate, startDate);
    const monthsPassed =
      differenceInMonths(currentDate, startDate) - yearsPassed * 12;

    // Get the remaining days after subtracting the years and months
    const startDatePlusYearsMonths = new Date(startDate);
    startDatePlusYearsMonths.setFullYear(
      startDatePlusYearsMonths.getFullYear() + yearsPassed
    );
    startDatePlusYearsMonths.setMonth(
      startDatePlusYearsMonths.getMonth() + monthsPassed
    );
    const daysPassed = differenceInDays(currentDate, startDatePlusYearsMonths);

    console.log(`Years passed: ${yearsPassed}`);
    console.log(`Months passed: ${monthsPassed}`);
    console.log(`Days passed: ${daysPassed}`);

    setMarriage({
      numYears: yearsPassed,
      numMonths: monthsPassed,
      numDays: daysPassed,
    });
  }, []);

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
      {/* wedding days or day */}
      {weddingDays && weddingDays > 0 ? (
        <>
          {weddingDays === 1 ? (
            <>
              <h3>
                Wedding countdown:
                <br />
                {`${weddingDays} day`}
              </h3>
            </>
          ) : (
            <>
              <h3>
                Wedding countdown:
                <br />
                {`${weddingDays} days`}
              </h3>
            </>
          )}
        </>
      ) : null}

      {/* wedding day */}
      {weddingDays === 0 ? <h3>We're married!</h3> : null}

      {/* marriage counter */}
      {marriage.numDays && marriage.numDays > 0 ? (
        <>
          <h5>
            We've been married for:
            <br />
            {marriage.numYears} Years,
            <br />
            {marriage.numMonths} Months,
            <br />
            {marriage.numDays} Days
          </h5>
        </>
      ) : null}
    </>
  );
}
