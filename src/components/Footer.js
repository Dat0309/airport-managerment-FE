import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer__container">
                    <ul className="footer__item">
                        <h3 className="footer__header">LIÊN HỆ</h3>
                        <li className="contact__item footer__text">Cảng hàng không quốc tế Nội Bài</li>
                        <li className="contact__item footer__text">xã Phú Minh - huyện Sóc Sơn - Thành phố Hà Nội</li>
                        <li className="contact__item footer__text">Hotline: 1900.636.535</li>
                        <li className="contact__item footer__text"><Link href="http://www.noibaiairport.vn">http://www.noibaiairport.vn</Link></li>
                        <li className="contact__item footer__text">Email:</li>
                        <li className="contact__item footer__text">- Ý kiến, phản hồi về chất lượng dịch vụ - Giờ hoạt động: 24/7.</li>
                        <li className="contact__item footer__text"><Link href="csc-secretariat@googlegroups.com">csc-secretariat@googlegroups.com</Link></li>
                        <li className="contact__item footer__text">- Giải đáp thông tin - Giờ hoạt động: 24/7.</li>
                        <li className="contact__item footer__text"><Link href="information.noibaiairport@gmail.com">information.noibaiairport@gmail.com</Link></li>
                        <li className="contact__item footer__text">- Công tác hành chính - Giờ hoạt động: từ 08h00 - 16h00 hàng ngày trừ thứ 7, Chủ Nhật và ngày Lễ, Tết.</li>
                        <li className="contact__item footer__text"><Link href="vanthu.han@acv.vn">vanthu.han@acv.vn</Link></li>
                    </ul>
                    <div className="footer__item">
                        <label for="form" className="feedback__form">
                            <h3 className="footer__header">PHẢN HỒI</h3>
                        </label>
                        <form action="" id="form">
                            <input type="text" placeholder="Họ và tên" className="form__Name form" />
                            <input type="text" placeholder="Email" className="form__Email form" />
                            <input type="text" placeholder="Nội dung" className="form__Context form" />
                        </form>
                    </div>
                    <ul className="footer__item">
                        <h3 className="footer__header">LINKS</h3>
                        <li className="links_item footer__text">Bộ Giao thông vận tải - Ministry of Transport</li>
                        <li className="links_item footer__text"><Link href="http://www.mt.gov.vn">http://www.mt.gov.vn</Link></li>
                        <li className="links_item footer__text">Cục Hàng không Việt Nam - Civil Aviation Authority of Vietnam</li>
                        <li className="links_item footer__text"><Link href="http://caa.gov.vn">http://caa.gov.vn</Link></li>
                        <li className="links_item footer__text">Tổng công ty Cảng hàng không Việt Nam - Airports Corporation of Vietnam</li>
                        <li className="links_item footer__text"><Link href="http://vietnamairport.vn/">http://vietnamairport.vn/</Link></li>
                        <li className="links_item footer__text">Cảng HKQT Tân Sơn Nhất - Tan Son Nhat International Airport</li>
                        <li className="links_item footer__text"><Link href="https://www.vietnamairport.vn/tansonnhatairport/">https://www.vietnamairport.vn/tansonnhatairport/</Link></li>
                        <li className="links_item footer__text">Cảng HKQT Đà Nẵng - Da Nang</li>
                        <li className="links_item footer__text">International Airport</li>
                        <li className="links_item footer__text"><Link href="https://www.vietnamairport.vn/danangairport/">https://www.vietnamairport.vn/danangairport/</Link></li>
                    </ul>
                </div>
                <h3 className="footer__copyright">Copyright @ 2020 Noibai International Airport. All Rights Reserved.</h3>
            </div>
        </>
    );
};

export default Footer;