//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TEENTH = [13, 14, 15, 16, 17, 18, 19];
const DAYSOFWEEK = {
                      Sunday: 0,
                      Monday: 1,
                      Tuesday: 2,
                      Wednesday: 3,
                      Thursday: 4,
                      Friday: 5,
                      Saturday: 6,
                   };

export const meetup = (year, month, type, day) => {
  const weekDayIndex = DAYSOFWEEK[day];
  const monthIndex = month - 1;

  switch(type){
    case 'teenth':
      for(let i = 0; i < TEENTH.length; i++){
        const date = new Date(year, monthIndex, TEENTH[i]);
        if(date.getDay() === weekDayIndex){
          return date;
        } //end if
      } //end for
      break;
      
    case 'last':
      const lastDay = new Date(year, monthIndex + 1, 0).getDate();
      for(let i = lastDay; i >= lastDay - 6; i--){
        const date = new Date(year, monthIndex, i);
        if(date.getDay() === weekDayIndex){
          return date;
        } //end if
      } //end for      
      break;
      
    default:
      let firstWeekDay = 0;
      for(let i = 1; i <= 7; i++){
        const date = new Date(year, monthIndex, i);
        if(date.getDay() === weekDayIndex){
          firstWeekDay = i;
          break;
        } //end if
      } //end for
        
      switch(type){
        case 'first':
          return new Date(year, monthIndex, firstWeekDay);
          break;
          
        case 'second':
          return new Date(year, monthIndex, firstWeekDay + 7);
          break;
          
        case 'third':
          return new Date(year, monthIndex, firstWeekDay + 14);
          break;
          
        case 'fourth':
          return new Date(year, monthIndex, firstWeekDay + 21);
          break;
      } //end switch
  } //end switch
};
