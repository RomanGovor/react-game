import React, {Component} from 'react';
import logo from '../../assets/images/rs_school_js.svg'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={"footer wrapper"}>
                    <div className={"footer__author"}><a href={"https://github.com/RomanGovor"} target={"#"}>Author</a></div>
                    <div className={"footer__logo"}><img src={logo} alt={'rs-logo'} /></div>
                    <div className={"footer__author"}>2021</div>
                    <div className={"footer__courses"}><a href={"https://rs.school/js/"}>JS courses</a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
