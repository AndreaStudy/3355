import MyPageHeader from '@/components/layouts/MyPageHeader';
import GiftContent from '@/components/pages/main/mypage/gift/GiftContent';
import GiftFilter from '@/components/pages/main/mypage/gift/GiftFilter';

function Page() {
  return (
    <>
      <MyPageHeader text="받은 선물함" />
      <GiftFilter />
      <GiftContent />
    </>
  );
}

export default Page;
