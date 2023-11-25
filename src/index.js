import dayjs from 'dayjs'
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);

const hour = dayjs().hour();
const minute = dayjs().minute();
const second = dayjs().second();

function getTime() {
    const time = document.querySelector('#time');

    const now = `${hour}:${minute}:${second}`;
    time.innerHTML = now

    return time;
}

document.body.appendChild(getTime());
