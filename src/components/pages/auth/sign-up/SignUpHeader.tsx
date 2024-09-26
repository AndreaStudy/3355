import React from 'react';

const SignUpHeader = ({
  steps,
  stepLevel,
}: {
  steps: string[];
  stepLevel: number;
}) => {
  let headerText;

  switch (stepLevel) {
    case 0:
      headerText = (
        <>
          <h2 className="text-2xl">
            약관에
            <br />
            동의해주세요.
          </h2>
        </>
      );
      break;
    case 1:
      headerText = (
        <>
          <h2 className="text-2xl">
            이메일을
            <br />
            입력해주세요.
          </h2>
        </>
      );
      break;
    case 2:
      headerText = (
        <>
          <h2 className="text-2xl">
            아이디를
            <br />
            입력해주세요.
          </h2>
        </>
      );
      break;
    case 3:
      headerText = (
        <>
          <h2 className="text-2xl">
            개인 정보를
            <br />
            입력해주세요.
          </h2>
        </>
      );
      break;
  }

  return (
    <>
      <div className="mt-4 flex space-x-2 justify-center items-center my-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full ${index <= stepLevel ? 'bg-starbucks-green' : 'bg-gray-300'}`}
            >
              <span className="text-base text-white font-bold">
                {index < stepLevel ? '✔' : index + 1}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-full h-1 ${index < stepLevel ? 'bg-starbucks-green' : 'bg-gray-300'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="font-bold flex flex-col items-start">{headerText}</div>
    </>
  );
};

export default SignUpHeader;
