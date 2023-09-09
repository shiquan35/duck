import React, { useState, useEffect } from "react";
import {
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInDays,
} from "date-fns";

export interface IAppProps {}

export function Dates(props: IAppProps) {
  const [today, setToday] = useState<Date>(new Date());
  const [anni, setAnni] = useState<Date>(new Date(2022, 6, 31));
  const [anniRoundedMonths, setAnniRoundedMonths] = useState<number>();
  const [anniYears, setAnniYears] = useState<number>();

  const [wedding, setWedding] = useState<Date>(new Date(2024, 8, 21));
  const [weddingRoundedMonths, setWeddingRoundedMonths] = useState<number>();
  const [weddingYears, setWeddingYears] = useState<number>();
  const [weddingDays, setWeddingDays] = useState<number>();

  useEffect(() => {
    const differenceAnniMonths = differenceInCalendarMonths(today, anni);
    // setAnniMonths(differenceAnniMonths);
    const differenceAnniYears = Math.floor(differenceAnniMonths / 12);
    setAnniYears(differenceAnniYears);
    const differenceAnniRoundedMonths = differenceAnniMonths % 12;
    setAnniRoundedMonths(differenceAnniRoundedMonths);
    // const differenceAnniDays = differenceInDays(today, anni);
  }, [today, anni]);

  useEffect(() => {
    const differenceWeddingMonths = differenceInCalendarMonths(wedding, today);
    const differenceWeddingYears = Math.floor(differenceWeddingMonths / 12);
    setWeddingYears(differenceWeddingYears);
    const differenceWeddingRoundedMonths = differenceWeddingMonths % 12;
    setWeddingRoundedMonths(differenceWeddingRoundedMonths);

    const dateToday = today.getDate();

    setWeddingDays(21 - dateToday);
  }, [today, wedding]);

  return (
    <>
      {anniYears === 1 ? (
        <h5>
          We've been together for {anniYears} year, {anniRoundedMonths} months
        </h5>
      ) : (
        <h5>
          We've been together for {anniYears} years, {anniRoundedMonths} months
        </h5>
      )}
      <br />
      <h3>Wedding countdown:</h3>
      {weddingYears === 1 ? `${weddingYears} year,` : `${weddingYears} years,`}
      {"\u00A0"}
      {weddingRoundedMonths === 1 || weddingRoundedMonths === 0
        ? `${weddingRoundedMonths} month`
        : `${weddingRoundedMonths} months`}
      {"\u00A0"}
      {`${weddingDays} days`}
    </>
  );
}
