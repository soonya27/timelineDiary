import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

export function parseDate(date) {
  register("ko", koLocale);

  return format(date, "ko");
}

/**
 * yyyy-mm-dd
 * @param {*} date
 * @returns
 */
export function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}
