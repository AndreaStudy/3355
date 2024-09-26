import MyPageHeader from '@/components/layouts/MyPageHeader';
import MyReviewContent from '@/components/pages/main/mypage/review/MyReviewContent';

function Page() {
  return (
    <>
      <MyPageHeader text="나의 리뷰 관리" />
      <MyReviewContent />
    </>
  );
}

export default Page;
