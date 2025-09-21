import React, { useState, useEffect } from "react";
import {
  // differenceInCalendarDays,
  // differenceInCalendarMonths,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  // parseISO,
} from "date-fns";

export interface IAppProps {}

interface HowLong {
  numYears?: number;
  numMonths?: number;
  numDays?: number;
}

export function Dates(props: IAppProps) {
  const [howLong, setHowLong] = useState<HowLong>({});

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

    setMarriage({
      numYears: yearsPassed,
      numMonths: monthsPassed,
      numDays: daysPassed,
    });
  }, []);

  return (
    <>
      <h5>
        We've been together for:
        <br />
        {howLong.numYears === 1 ? (
          <>
            <span>{howLong.numYears} year</span>
            <br />
          </>
        ) : null}
        {howLong.numYears && howLong.numYears > 1 ? (
          <>
            <span>{howLong.numYears} years</span>
            <br />
          </>
        ) : null}
        {howLong.numMonths === 1 ? (
          <>
            <span>{howLong.numMonths} month</span>
            <br />
          </>
        ) : null}
        {howLong.numMonths && howLong.numMonths > 1 ? (
          <>
            <span>{howLong.numMonths} months</span>
            <br />
          </>
        ) : null}
        {howLong.numDays === 1 ? (
          <>
            <span>{howLong.numDays} day</span>
          </>
        ) : null}
        {howLong.numDays && howLong.numDays > 1 ? (
          <>
            <span>{howLong.numDays} days</span>
          </>
        ) : null}
      </h5>

      {/* marriage counter */}
      <h5>
        We've been married for:
        <br />
        {marriage.numYears === 1 ? (
          <span>{marriage.numYears} year</span>
        ) : (
          <span>{marriage.numYears} years</span>
        )}{" "}
        <br />
        {marriage.numMonths === 1 ? (
          <span>{marriage.numMonths} month</span>
        ) : null}
        {marriage.numMonths && marriage.numMonths > 1 ? (
          <>
            <span>{marriage.numMonths} months</span>
            <br />
          </>
        ) : null}{" "}
        {marriage.numDays === 1 ? <span>{marriage.numDays} day</span> : null}
        {marriage.numDays && marriage.numDays > 1 ? (
          <>
            <span>{marriage.numDays} days</span>
          </>
        ) : null}
      </h5>
    </>
  );
}
