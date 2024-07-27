import { months, days } from "~/constants/date";

export const getCurrencySymbol = (currencyName: string) => {
  switch (currencyName) {
    case "USD":
      return "$";
    default:
      return currencyName;
  }
};

// Function to get from 2017-06-29 to 29/06/2017
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Function to get from 2017-06-29 to 29/06
export const formatSmallDate = (dateString: string) => {
  const parts = dateString.split("-");

  const day = parts[2];
  const month = parts[1];

  return `${day}/${month}`;
};

// Function to get from 2017-06-29 to 06 / Июн / 2017
export const formatDateWithMonth = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  const monthName = months[parseInt(month, 10) - 1];
  return `${month} / ${monthName} / ${year}`;
};

// Function to format time to HH:MM
export const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

// Function to get the day of the week
export const getDayName = (date: Date) => {
  return days[date.getDay()];
};

// Function to get from real date to 06 / Июн / 2017
export const formatRealDateWithMonth = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};
