import {useEffect, useState} from "react";

export function useGetDateCreate(getDate: number | string) {
    const [date, setDate] = useState('');
    useEffect(() => {
        let stringDate = String(getDate);
        stringDate = stringDate + '000';
        let numberDate = Number(stringDate);
        const dateNow = Date.now();
        let fullHour = dateNow - numberDate;
        fullHour = fullHour / 3600000;
        const integerDate = String(Math.round(fullHour))
        let hoursSlice1 = integerDate.slice(-1);
        let hoursSlice2 = integerDate.slice(-2);
        let wordHour: string;
        if (hoursSlice1 === '2' || hoursSlice1 === '3' || hoursSlice1 === '4') {
            wordHour = 'часа'
        } else {
            wordHour = 'часов'
        }
        if (hoursSlice2 === '14' || hoursSlice2 === '11' || hoursSlice2 === '12' || hoursSlice2 === '13') {
            wordHour = 'часов'
        }
        const endOutDate: string = `${integerDate} ${wordHour}`
        setDate(endOutDate)
    }, [getDate]);
    return date
}
