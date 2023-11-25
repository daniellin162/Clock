import dayjs from 'dayjs';
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);

const mapDays = {
    '0': 'Monday',
    '1': 'Tuesday',
    '2': 'Wednesday',
    '3': 'Thursday',
    '4': 'Friday',
    '5': 'Saturday',
    '6': 'Sunday',
};

const mapMonths = {
    '0': 'January',
    '1': 'February',
    '2': 'March',
    '3': 'April',
    '4': 'May',
    '5': 'June',
    '6': 'July',
    '7': 'August',
    '8': 'September',
    '9': 'October',
    '10': 'November',
    '11': 'December',
};

const hour = dayjs().hour();
const minute = dayjs().minute();
const second = dayjs().second();
const day = dayjs().day();
const dayOfMonth = dayjs().date();
const month = dayjs().month();
const year = dayjs().year();

// Current Time
const timeNow = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
const time = document.querySelector('#time');
time.innerText = timeNow;

// Current Date
const dateNow = `${mapDays[day]}, ${day < 10 ? '0' + day : day} ${mapMonths[month]}, ${year}`;
const date = document.querySelector('#date');
date.innerText = dateNow;


