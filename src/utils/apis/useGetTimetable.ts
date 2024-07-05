import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { DURATION, PLACE } from 'pages/selectSchedule/utils';
import { useNavigate } from 'react-router-dom';

import { client } from './axios';

interface Date {
  month: string;
  day: string;
  dayOfWeek: string;
}
interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface getTimetableResponse {
  data: {
    duration: keyof typeof DURATION;
    place: keyof typeof PLACE;
    placeDetail: string;
    availableDates: Date[];
    preferTimes: TimeSlot[];
  };
}

const getTimetable = async (meetingId: string) => {
  try {
    const res = await client.get<getTimetableResponse>(`/meeting/${meetingId}/schedule`);
    return res.data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      const errCode = err.response.status;
      throw { errCode };
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};

interface ErrorType extends Error {
  errCode: number;
}

export const useGetTimetable = (meetingId?: string) => {
  const navigate = useNavigate();
  if (meetingId === undefined) {
    navigate('/error');
    throw new Error('잘못된 회의 아이디입니다.');
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ['getTimetable', meetingId],
    queryFn: () => getTimetable(meetingId),
    retry: 0,
  });

  useEffect(
    () => {
      if (error && (error as ErrorType).errCode === 409) {
        navigate(`/q-card/${meetingId}`);
      }
    },
    [error, navigate, meetingId],
  );

  return { data, isLoading, error };
};
