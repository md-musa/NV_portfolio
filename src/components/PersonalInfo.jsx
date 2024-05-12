import React from 'react';
import { personalInfo } from '../data';

function PersonalInfo() {
  return (
    <div>
      <div className="relative">
        {Object.entries(personalInfo).map(([key, value], index) => (
          <div
            className={`${
              index % 2 == 0 ? 'bg-[#faf4fa]' : 'bg-[#fbfff6]'
            } grid grid-cols-[1fr_3fr] space-x-3 text-lg py-1`}
          >
            <div className="text-right capitalize text-base pr-2 ">{key + ' '}</div>
            <div className="text-left text-base">{value}</div>
          </div>
        ))}
        <div class="vertical-line absolute top-0 left-[25%] rounded-full overflow-hidden"></div>
      </div>
    </div>
  );
}

export default PersonalInfo;
