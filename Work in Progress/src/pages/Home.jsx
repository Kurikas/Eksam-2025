import React from 'react';
import './Home.css';

const Home = () => {
  return (
    // This structure is based on your index.html
    <div className="desktop-3">
        {/* The <Header> is handled by App.jsx, so we start from the main content */}
        
        <img className="tuulik-taust-icon" alt="Taustapilt tuulikust" src="/assets/Tuulik-taust.png" />
        
        <div className="peetri-tuulik-parent">
            <b className="peetri-tuulik">Peetri Tuulik</b>
            <div className="silmi-vlunud-aastast">Silmi võlunud aastast 1892</div>
        </div>
        <b className="ajalugu">Ajalugu</b>
        <div className="desktop-3-inner" />
        <div className="rectangle-div" />
        <img className="tuuli-ajalugu-1-icon" alt="Vana pilt tuulikust" src="/assets/Tuuli-ajalugu-1.png" />

        <div className="desktop-3-child1" />

        {/* This content is now in the Footer.jsx component, but kept here if you want the original page-specific layout */}
        <div className="telefoni-abiliin">Telefoni abiliin</div>
        <div className="copyright-2024-peetri-tuulik">
            <span>@</span>
            <span className="copyright-2024-peetri-tuulik1">copyright-2025-Peetri Tuulik</span>
        </div>
        <div className="line-div" />
        <div className="desktop-3-child2" />
        <div className="e-r-900-1700">E-R 9:00-17:00</div>
        <div className="div">+372 5555 6666</div>
        <div className="jlgi-meid">Jälgi meid</div>
        <div className="sotsiaal-meedia">Sotsiaal Meedia</div>
        <div className="frame-parent">
            <img className="frame-icon" alt="Sotsiaalmeedia ikoon" src="/assets/Frame 1.svg" />
            <img className="frame-icon1" alt="Sotsiaalmeedia ikoon" src="/assets/Frame 2.svg" />
            <img className="frame-icon2" alt="Sotsiaalmeedia ikoon" src="/assets/Frame.svg" />
        </div>
        
        <img className="tuulik-nimed-2-icon" alt="Pilt tuulikust ja inimestest" src="/assets/Tuulik-nimed-2.png" />
        <img className="tuulik-nimed-1-icon" alt="Pilt inimestest tuuliku juures" src="/assets/Tuulik-nimed-1.png" />
        
        <div className="tuuliku-peremees-jaan-container">
            <p className="tuuliku-peremees-jaan-jaan-ol">
                <b className="tuuliku-peremees-jaan">Tuuliku peremees Jaan</b>
                <span>: Jaan oli noor ja energiline mees, kes võttis tuuliku üle oma isalt. Ta oli tuntud oma oskuse poolest tuulikut juhtida ja tema jahvatatud jahu oli piirkonnas väga hinnatud.</span>
            </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">&nbsp;</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">
                <b className="tuuliku-peremees-jaan">Meister Andrus</b>
                <span>: Andrus oli osav käsitööline, kes valmistas tuuliku jaoks vajalikke tööriistu ja varuosi. Tema täpsus ja pühendumus tagasid tuuliku sujuva toimimise.</span>
            </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">&nbsp;</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">
                <b className="tuuliku-peremees-jaan">Küla vanem Toomas</b>
                <span>: Toomas oli tark ja austatud mees, kes aitas korraldada tuuliku ehitust ja tagas selle, et tuulik teeniks kogu küla vajadusi.</span>
            </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">&nbsp;</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">
                <b className="tuuliku-peremees-jaan">Noor õpipoiss Peeter</b>
                <span>: Peeter oli entusiastlik nooruk, kes õppis tuuliku saladusi Jaanilt. Tema huvi ja pühendumus näitasid, et tuuliku traditsioon jätkub ka tulevikus.</span>
            </p>
        </div>
        <b className="tuntumad-nimed">Tuntumad Nimed</b>
        <div className="loe-rohkem-wrapper">
            <div className="loe-rohkem">Loe Rohkem</div>
        </div>
        <div className="desktop-3-child3" />
        <img className="tuulik-ekursioon-1-icon" alt="Ekskursioon tuuliku juures" src="/assets/Tuulik-ekursioon-1.png" />

        <div className="ekskursioonid">Ekskursioonid</div>
        <div className="broneeri-wrapper">
            <div className="broneeri">Broneeri</div>
        </div>
        <div className="desktop-3-child4" />
        <div className="avasta-peetri-tuuliku-container">
            <p className="tuuliku-peremees-jaan-jaan-ol">Avasta Peetri Tuuliku põnevat ajalugu giidiga ekskursioonidel,</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">kus sukeldud pukktuuliku saladustesse ja jahvatamise traditsioonidesse. </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">See on ainulaadne võimalus kogeda Eesti maaelu pärandit ja broneerida elav ajalooreis.</p>
        </div>
        <div className="rectangle-parent">
            <div className="group-child" />
            <img className="tuulik-perepev-1-icon" alt="Perepäev tuuliku juures" src="/assets/tuulik-perepäev-1.png" />

            <div className="perepev-tuulikuga">Perepäev tuulikuga</div>
            <div className="broneeri-container">
                <div className="broneeri">Broneeri</div>
            </div>
            <div className="kutsume-teid-veetma">Kutsume teid veetma meeleolukat perepäeva Peetri Tuuliku kaunis ümbruses, kus pakume tegevusi ja rõõmu kogu perele. Nautige loodust, osalege lõbusates töötubades ja looge unustamatuid mälestusi selles ajaloolises paigas.</div>
        </div>
        <div className="vaata-meie-ajagraafik">Vaata meie ajagraafikut</div>
        <div className="desktop-3-child5" />
        <div className="juuni-2020-04">12 Juuni 2025. 04 00 PM</div>
        <img className="keyboard-arrow-right-24dp-5f63-icon" alt="Nool paremale" src="/assets/keyboard_arrow_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.svg" />

        <div className="icons8-facebook-1-parent">
            <img className="icons8-facebook-1" alt="Facebooki ikoon" src="/assets/icons8-facebook 1.svg" />
            <img className="icons8-youtube-1" alt="Youtube ikoon" src="/assets/icons8-youtube 1.svg" />
        </div>
        <div className="giidiga-ekskursioon"> Giidiga ekskursioon</div>
        <div className="desktop-3-child6" />
        <div className="juuni-2020-041">12 Juuni 2025. 04 00 PM</div>
        <img className="keyboard-arrow-right-24dp-5f63-icon1" alt="Nool paremale" src="/assets/keyboard_arrow_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.svg" />

        <div className="icons8-facebook-1-group">
            <img className="icons8-facebook-1" alt="Facebooki ikoon" src="/assets/icons8-facebook 1.svg" />
            <img className="icons8-youtube-1" alt="Youtube ikoon" src="/assets/icons8-youtube 1.svg" />
        </div>
        <div className="perepev-tuulikukohin">Perepäev "Tuulikukohin"</div>
        <div className="peetri-tuulik-container">
            <div className="peetri-tuulik2">PEETRI TUULIK</div>
            <img className="icons8-windmill-100-2-1" alt="Tuuliku logo" src="/assets/icons8-windmill-100 (2) 1.png" />
        </div>
        <div className="rectangle-group">
            <div className="group-item" />
            <div className="ksit-tuulik-1-parent">
                <img className="ksit-tuulik-1-icon" alt="Käsitöö tuulik" src="/assets/Käsitöö-tuulik-1.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö tuulik" src="/assets/Käsitöö-tuulik-2.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö vaip" src="/assets/Käsitöö-vaip-1.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö pott" src="/assets/Käsitöö-pott-1.png" />
            </div>
        </div>
        <div className="desktop-3-child7" />
        <div className="desktop-3-child8" />
        <div className="broneeri-frame">
            <div className="broneeri">Broneeri</div>
        </div>
        <div className="frame-div">
            <div className="broneeri">Broneeri</div>
        </div>
        <img className="tuulik-ajalugu-2-icon" alt="Vana pilt tuulikust" src="/assets/tuulik-ajalugu-2.png" />
        <div className="loe-rohkem-container">
            <div className="loe-rohkem">Loe Rohkem</div>
        </div>
        <div className="peetri-tuulik-on-container">
            <p className="tuuliku-peremees-jaan-jaan-ol">Peetri tuulik on oluline ajalooline ja kultuuriline mälestis, mis jutustab lugu möödunud aegadest ja eesti talurahva elust.</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">&nbsp;</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">See pukktuulik, mis kunagi jahvatas vilja, on tänapäeval taastatud ja renoveeritud tänu pühendunud inimeste jõupingutustele. </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">Tuulik oli kogukonnale eluliselt tähtis, tagades leiva lauale ja olles seltskondlik koht. </p>
            <p className="tuuliku-peremees-jaan-jaan-ol">&nbsp;</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">Tänapäeval on Peetri pukktuulik populaarne turismiatraktsioon, pakkudes võimaluse heita pilk minevikku ja</p>
            <p className="tuuliku-peremees-jaan-jaan-ol">nautida Eesti maastikku, olles elav tõestus meie ajaloo ja kultuuri rikkusest.</p>
        </div>
    </div>
  );
};

export default Home;