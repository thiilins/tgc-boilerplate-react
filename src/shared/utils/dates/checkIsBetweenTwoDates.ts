import { addDays } from "date-fns";

function checkIsBetweenTwoDates(
  dateFrom?: string,
  dateTo?: string,
  dateCheck?: string
) {
  if (dateFrom === undefined || dateTo === undefined) {
    return false;
  }

  const from = new Date(dateFrom);
  const to = addDays(new Date(dateTo), 1);
  const check = dateCheck ? addDays(new Date(dateCheck), 1) : new Date();

  return check > from && check < to;
}

export default checkIsBetweenTwoDates;
