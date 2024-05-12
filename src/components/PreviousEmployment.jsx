import { previousEmployment } from '../data';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react';

function PreviousEmployment() {
  return (
    <div>
      <div className="max-w-[32rem]">
        <Timeline>
          {previousEmployment.map((pe, index) => (
            <TimelineItem>
              {index != previousEmployment.length - 1 && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  {pe.duration}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <p className="font-semibold text-sm py-[2px]">{pe.title + ', ' + pe.organization}</p>
                {/* <p className="mb-2 font-semibold text-base text-gray-800">{pe.organization}</p> */}

                <Typography variant="small" color="gary" className="font-normal text-gray-600">
                  {pe.description}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default PreviousEmployment;
