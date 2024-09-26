import Image from 'next/image';
import React from 'react';
import CustomerServiceIcon from '/public/assets/images/icons/customerServiceIcon.svg';
import Link from 'next/link';

function Footer() {
  return (
    <section className="w-full pb-16 pt-10 bg-white">
      <div className="bg-[#777777] tracking-[-0.07rem] text-white py-[11px] px-[14px] flex justify-between">
        <div className="flex">
          <CustomerServiceIcon />
          <div className="ml-1 font-semibold text-[10px]">
            <p>SSG.COM 고객센터 / 전자금융거래 분쟁처리</p>
            <p>
              <span className="text-xs">1577-3419 / </span>
              <span>ssg@ssg.com</span>
            </p>
          </div>
        </div>
        <div className="flex gap-1 text-[10px] items-center">
          <div className="bg-[#66666D] px-[10px] py-[6px]">전화걸기</div>
          <div className="bg-[#66666D] px-[10px] py-[6px]">1:1 고객센터</div>
        </div>
      </div>
      <ul className="bg-[#DBDBE0] text-center text-[10px] py-2 text-[#565656] divide-x-2 divide-solid divide-[#B8B8BE] flex justify-between ">
        <Link href="/sign-in" className="w-1/4">
          <li>로그인</li>
        </Link>
        <Link href="/sign-up" className="w-1/4">
          <li>회원가입</li>
        </Link>
        <li className="w-1/4">앱다운로드</li>
        <li className="w-1/4">PC버전</li>
      </ul>
      <div className="flex flex-col gap-3 text-[10px] text-[#888888] p-4 tracking-tighter leading-5">
        <p>
          (주)에스에스지닷컴
          <br />
          대표자: 최훈학 | 사업자등록번호: 870-88-01143
          <br />
          통신판매업 신고번호: 제2022-서울강남-03751호 사업자 정보확인
          <br />
          개인정보보호 책임자: 김우진 | 주소: 서울특별시 강남구 테헤란로 231
          <br />
          호스팅서비스 사업자 : (주)에스에스지닷컴
          <br />
          <br />
          우리은행 채무지급보증 안내 서비스가입사실 확인 <br />
          당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증
          계약을 체결하여 안전거래를 보장하고 있습니다.
        </p>
        <ul className="text-black font-thin flex flex-wrap gap-2">
          <li>
            <a href="https://company.ssg.com/">회사소개</a>
          </li>
          <li>
            <a href="https://member.ssg.com/m/policies/terms.ssg">이용약관</a>
          </li>
          <li className="text-red-500">
            <a href="https://member.ssg.com/m/policies/privacy.ssg">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="https://member.ssg.com/m/policies/youthProtection.ssg">
              청소년보호방침
            </a>
          </li>
          <li>
            <a href="https://member.ssg.com/m/policies/consumerDispute.ssg">
              소비자분쟁해결기준
            </a>
          </li>
        </ul>
        <p>
          ㈜에스에스지닷컴은 SSG.COM 실시간 항공권 서비스의 통신판매중개자로서
          거래 당사자가 아니며, 입점 판매사가 등록한 상품 정보 및 거래에 대해
          책임을 지지 않습니다. ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보,
          컨텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는
          저작권법, 콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다. Copyright ⓒ
          SSG.COM Corp. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
