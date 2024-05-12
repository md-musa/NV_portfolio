import { Button } from '@material-tailwind/react';
import profileImg from './assets/images/profile.png';
import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AcademicQualification from './components/AcademicQualification';
import PreviousEmployment from './components/PreviousEmployment';

function App() {
  const [view, setView] = useState({
    personalInfo: true,
    academicQualification: false,
    trainingExperience: false,
    professionalExperience: false,
    award: false,
    previousEmployment: false,
  });
  function setFalse(name) {
    setView({
      personalInfo: false,
      academicQualification: false,
      trainingExperience: false,
      professionalExperience: false,
      award: false,
      previousEmployment: false,
      [name]: true,
    });
  }

  return (
    <main className="max-w-screen-xl min-h-[100vh] bg-[white] shadow-md overflow-hidden rounded-md border mx-auto md:my-2 flex flex-col">
      <div className="bg-teal-700 h-12 text-center flex justify-center items-center px-4 md:py-4">
        <h1 className="text-white font-bold text-xl mt-4 md:mt-0">Engineer Md. Nazrul Islam</h1>
      </div>

      <div className="flex-1 md:grid grid-cols-[1fr_3fr] ">
        {/* Left section */}
        <div className="p-6 md:p-0 md:pl-6 space-y-3 flex flex-col bg-teal-700 drop-shadow-lg h-full">
          <div className="h-44 flex items-center py-2">
            <img
              className="h-full ring-4 ring-offset-teal-500 shadow-xl rounded-full mx-auto"
              src={profileImg}
              alt=""
            />
          </div>

          <div className="flex-1 flex flex-col space-y-3">
            <button
              className={view.personalInfo ? 'selected-btn' : 'common-btn'}
              onClick={() => setFalse('personalInfo')}
            >
              Personal Information
            </button>
            <button
              className={view.academicQualification ? 'selected-btn' : 'common-btn'}
              onClick={() => setFalse('academicQualification')}
            >
              Academic Qualification
            </button>
            <button
              className={view.previousEmployment ? 'selected-btn' : 'common-btn'}
              onClick={() => setFalse('previousEmployment')}
            >
              Previous Employment
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex-1 overflow-auto">
          <div className="py-5">
            <h3 className="text-lg ml-6 my-1 text-gray-800 font-semibold">Engr. Md. Nazrul Islam</h3>
            <hr className="bg-gray-500 h-[3px] rounded-full" />
          </div>

          <div className="px-10">
            {view.personalInfo && <PersonalInfo />}
            {view.academicQualification && <AcademicQualification />}
            {view.previousEmployment && <PreviousEmployment />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
