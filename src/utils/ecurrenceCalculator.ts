// export const calculateRecurringDates = (
//   startDate: Date,
//   endDate: Date | null,
//   recurrencePattern: string,
//   recurrenceValue: number
// ): Date[] => {
//   const dates: Date[] = [];
//   const currentDate = new Date(startDate);

//   while (!endDate || currentDate <= endDate) {
//     dates.push(new Date(currentDate));

//     switch (recurrencePattern) {
//       case "daily":
//         currentDate.setDate(currentDate.getDate() + recurrenceValue);
//         break;
//       case "weekly":
//         currentDate.setDate(currentDate.getDate() + recurrenceValue * 7);
//         break;
//       case "monthly":
//         currentDate.setMonth(currentDate.getMonth() + recurrenceValue);
//         break;
//       case "yearly":
//         currentDate.setFullYear(currentDate.getFullYear() + recurrenceValue);
//         break;
//       default:
//         break;
//     }
//   }

//   return dates;
// };
