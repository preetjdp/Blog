import { format } from "date-fns";

export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);

  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`;
  }

  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`;
}

export function formatPostDate(date) {
  return format(new Date(date), "MMM d, y");
}

/**
 * Allows classNames to be joined
 *
 * @param classes The classes to be joined
 * @returns string The joined css query
 */
export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
