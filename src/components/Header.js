/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import { HeaderTopLeft } from "../styled/header";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      {/* 레이아웃 : div */}
      <div className="header-inner">
        <div className="header-top">
          <HeaderTopLeft className="header-top-left" w="625" h="50">
            <a className="logo" href="index.html"></a>
            <div className="header-search">
              <form className="search-form">
                <input type="text" className="search-word" />
                <input type="button" value="검색" className="search-bt" />
              </form>
            </div>
          </HeaderTopLeft>
          <div className="header-top-right">
            <ul className="member-menu">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#" className="mypage-bt" id="mypage-bt">
                  마이페이지
                  <img src="/images/icon_arrow.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          {/* 카테고리 메뉴 */}
          <ul className="header-cate">
            <li>
              <a href="#">
                <img src="images/icon_tour.png" alt="" />
                투어
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_ticket.png" alt="" />
                티켓
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_shopping.png" alt="" />
                쇼핑
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_book.png" alt="" />
                도서
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_triple.png" alt="" />
                트리플
              </a>
            </li>
            <li>
              <a href="#" className="icon-hot">
                <img src="images/icon_special.png" alt="" />
                여행초특가
              </a>
            </li>
          </ul>
          {/* 오늘의 이벤트 메뉴 */}
          <ul className="header-today-menu">
            <li>
              <a href="#">
                <img src="images/icon_gnb_nol.png" alt="" />
                항공 즉시할인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
