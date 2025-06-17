import Sidebar from "../sidebar/Sidebar";
import style from "./header.module.scss";

export default function Header() {
    return (
        <header>
            <Sidebar />
            <div className={style.topbar}>
                <span className={style.logo}><img src=" /Madonna.svg" alt="" width={150} /> <span>.Portfolio</span></span>
                <div className={style.linkes}>
                    <a href="#">
                        <img src=" /facebook.png" alt="facbock link" />
                    </a>
                    <a href="https://www.linkedin.com/in/madonna-adel-">
                        <img src=" /linkedin.png" alt="linkedin link" />
                    </a>
                    <a href="https://github.com/MadonnaAdel">
                        <img src=" /github-6980894_1280.png" alt="github link" />
                    </a>
                </div>
            </div>
        </header>
    );
}
