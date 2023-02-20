import { useEffect, useState } from 'react';
import { AFTERNOON_HOUR, BACKGROUND_COLORS, EVENING_HOUR, MORNING_HOUR } from '../constants/constants';

export type TimeOfDayType = 'morning' | 'afternoon' | 'evening' | 'night';

export const useBackgroundChanger = (): string => {
  const [backgroundColor, setBackgroundColor] = useState(BACKGROUND_COLORS.night);

  useEffect(() => {
    const currentHour = new Date().getHours();
    const timeOfDay =
      currentHour < MORNING_HOUR
        ? 'night'
        : currentHour < AFTERNOON_HOUR
        ? 'morning'
        : currentHour < EVENING_HOUR
        ? 'afternoon'
        : 'evening';
    setBackgroundColor(BACKGROUND_COLORS[timeOfDay]);
  }, []);

  return backgroundColor;
};
