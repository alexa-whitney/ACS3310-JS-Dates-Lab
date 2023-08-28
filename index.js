// What is a date? 

// Make a Date
const today = new Date() // Gets the time now
// Print the date
console.log(today, '<- Today')
// It's really a number
console.log(today.getTime(), '<- Time')

// It's really the number of milliseconds since 1970
// get the number of years since 1970
console.log('Years since 1970')
console.log(today / 1000 / 60 / 60 / 24 / 365.25)
// Divide by 1000 to get seconds divide by 60 to get minutes
// divide by 60 to get hours, divide by 24 to get days, 
// divide by 365.25 to get years

// or divide by 86,400 seconds
console.log(today / 86400 / 1000 / 365.25)

console.log('-------- Age --------')

// You can make a date from almost any 
// human readable string for example: 
const bday = new Date('April 6, 1987')
// Challenge: Calculate your age with JS
const ageInMs = today - bday
console.log(ageInMs, '<- Age in ms')
// Challenge: Calculate your age in secs, mins, hrs, days, years
const ageInSeconds = ageInMs / 1000;
console.log(ageInSeconds, '<- Age in secs')
const ageInMinutes = ageInSeconds / 60;
console.log(ageInMinutes, '<- Age in mins')
const ageInHours = ageInMinutes / 60;
console.log(ageInHours, '<- Age in hrs')
const ageInDays = ageInHours / 24;
console.log(ageInDays, '<- Age in days')
const ageInYears = ageInDays / 365.25;
console.log(ageInYears, '<- Age in years')

console.log('-------- BDay --------')

// You can also initialize a date with 
// year, month, date, hours, mins, secs, ms
// (month is 0 indexed Jan == 0)

// const newYear = new Date(2021, 0, 1)
// Get the components from a date
// console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
// To get the month by name you might: 
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// Shows the month for new years
// console.log(months[newYear.getMonth()])
// Challenge: Show the month of your birthday
const newYear = new Date(2023, 0, 1)
console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
const bdayAW = new Date('April 6, 1987')
const bdayMonth = bdayAW.getMonth()
console.log(months[bdayMonth])

// Days of the week are also 0 indexed 0:Sun - 6:Sat 
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
// Challenge: Show the day of the week of your birthday
const dayOfWeek = bdayAW.getDay();
console.log(`My birthday in 1987 was on a ${days[dayOfWeek]}.`);

console.log('-------- Data Offsets --------')

// Date offsets show the difference between two dates

const date = new Date()          // Start with a date 
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date

// Start date is 7 days ago
// Use setDate to modify the start date subtract 7 days
startDate.setDate(date.getDate() - 7) // 7/20

// Due date is 3 days from now
// Use setDate to modify the end date add 3 days
dueDate.setDate(date.getDate() + 3) // 7/30

console.log(startDate.getDate(), dueDate.getDate())
console.log(startDate, dueDate)
// Check these dates they should be 7 days ago and 3 days from now
// **Yes, that is correct! Today is the 28th, and the output shows 21st (7 days ago) and 31st (3 days from now)

// Try these problems 

console.log('--------- Problem 1 --------')
// Schedule future dates - Given a date return a list of 
// dates separated by a days offset
// date is a Date object
// repeat is a number, the number of repeats 
// offset is the number days between each of the dates returned

function consecutiveDates(date, repeat, offset) {
  let dates = [];
  for (let i = 0; i < repeat; i++) {
    dates.push(new Date(date.getTime() + (i * offset * 86400000)));
  }
  // Log each date in the desired format
  dates.forEach(date => {
    console.log(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  });
}

// Starting date 1/1/2019, repeat 4 times, return dates 
// 3 days apart
consecutiveDates(new Date(2019, 0, 1), 4, 3)

// Should return an array with dates:
// 1. 1/1/2019 <- Starting date
// 2. 1/4/2019 <- Each date 3 days apart
// 3. 1/7/2019
// 4. 1/10/2019

// Stretch goals 
// add a unit for time:
// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'year')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019
// 2. 1/1/2020
// 3. 1/1/2021

// function consecutiveDates(date, repeat, offset, unit = 'day') {
// 
// }

console.log('--------- Problem 2 --------')

// Write a function to order dates
// Takes an array of dates, returns an array of ordered dates
// Important! Array.sort() will sort alphabetically without a sorting function
// const nums = [5555, 888, 77, 2222, 1111, 3333]
// nums.sort() -> [1111, 2222, 3333, 5555, 888, 77]
// nums.sort((a,b) => a - b) -> [77, 888, 1111, 2222, 5555]

function orderDates(dates) {
  // orders the dates 
  // returns a new array of ordered dates
  const orderedDates = dates.sort((a, b) => a - b).map(date => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  console.log(`[${orderedDates.join(', ')}]`);
}

const todayDate = new Date();
const freya = new Date(2022, 1, 1);
const anniversary = new Date(2021, 11, 21);
const christmasDecadeAgo = new Date(2013, 11, 25);
const husbandBday =  new Date (1987, 3, 6);

orderDates([todayDate, freya, anniversary, christmasDecadeAgo, husbandBday])

// [bday, startdate, duedate, newyear]

// Stretch: Return an object containing three keys each holding an array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - furture: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }

console.log('--------- Problem 3 --------')

// Given an array of dates find the date that will happen next. 
// You need to find the date that is closetest to today
// but not before!

function nextDate(dates) {
  // find the date that will happen next in dates
  // return the next date
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to midnight

  // Filter out dates that are before today and sort the remaining dates
  const futureDates = dates.filter(date => date > currentDate).sort((a, b) => a - b);

  if (!futureDates.length) {
    console.log("No upcoming dates");
    return;
  }

  // Calculate the days difference
  const oneDay = 86400000;
  const daysDifference = Math.round(Math.abs((futureDates[0] - currentDate) / oneDay));

  // Print the result
  console.log(`Your next event is ${daysDifference} days from now, on ${futureDates[0].getMonth() + 1}/${futureDates[0].getDate()}/${futureDates[0].getFullYear()}.`);
}

const inLawsVisit = new Date(2023, 8, 14);  
const halloween = new Date(2023, 9, 31);
const graduationDay = new Date(2025, 4, 25);
const cruiseTime = new Date(2024, 2, 10);
const nextHoliday = new Date(2023, 8, 4);

nextDate([inLawsVisit, halloween, graduationDay, nextHoliday, cruiseTime]);

// Stretch Goal: Return a human readable string: 
// Your next event is 3 days from now. 
// Done!

console.log('--------- Problem 4 --------')

// Birthday planner. Write a function that takes a date (your birthday) 
// and a year, and returns the day of the week for that date in that year. 

function whensYourParty(date, year) {
  // Find the day of the year for your birthday
}

whensYourParty(bday, 2022)

// Stretch Goal: Return an array listing all 
// the days when your birthday occured since 
// you were born. 
