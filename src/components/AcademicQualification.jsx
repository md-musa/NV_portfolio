/* eslint-disable react/jsx-key */

import { academicQualification } from '../data';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react';

function AcademicQualification() {
  return (
    <div>
      <div className="max-w-[32rem]">
        <Timeline>
          {academicQualification.map((q, index) => (
            <TimelineItem>
              {index != academicQualification.length - 1 && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  {q.title}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography variant="small" color="gary" className="font-normal text-gray-600">
                  {q.description}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default AcademicQualification;
