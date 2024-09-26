import { Address } from 'react-daum-postcode'; // Address 타입을 가져옵니다.
import DaumPostcode from 'react-daum-postcode';

interface PostModalProps {
  handleComplete: (address: Address) => void; // Address 타입으로 변경합니다.
}

function PostModal({ handleComplete }: PostModalProps) {
  return (
    <div className="absolute top-[60px] left-0 z-40 w-full h-full bg-white">
      <div className="">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
}

export default PostModal;
