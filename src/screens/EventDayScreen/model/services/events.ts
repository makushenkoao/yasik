import axios from 'axios';
import {
  Activity,
  ActivityType,
} from '@screens/EventDayScreen/ui/EventDayScreen.tsx';

interface GetFilteredActivityArgs {
  type: ActivityType | null;
  minprice: string;
  maxprice: string;
  participants: string;
}

export async function getRandomActivity() {
  try {
    const response = await axios.get<Activity>(
      'https://www.boredapi.com/api/activity/',
    );

    return response.data;
  } catch (e) {
    console.log('Error by get activity ==>', e);
  }
}
export async function getFilteredActivity(args: GetFilteredActivityArgs) {
  const {maxprice, minprice, type, participants} = args;

  try {
    const response = await axios.get<Activity>(
      'https://www.boredapi.com/api/activity/',
      {
        params: {
          type: type ?? '',
          minprice,
          maxprice,
          participants,
        },
      },
    );

    return response.data;
  } catch (e) {
    console.log('Error while getting activity ==>', e);
  }
}
