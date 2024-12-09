import { format, parseISO } from 'date-fns';

export const ConvertDate = (isoString: string): string => {
  try {
    // Use parseISO to ensure proper parsing of ISO date strings
    const parsedDate = parseISO(isoString);
    return format(parsedDate, 'MMMM do, yyyy');
  } catch (error) {
    console.error('Error parsing date:', error);
    return 'Invalid Date';
  }
};