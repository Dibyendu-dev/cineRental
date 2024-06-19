import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg"
import ShoppingCart from "./assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext , ThemeContext } from "./context";

export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const { cardData } = useContext(MovieContext);
  const {darkMode,setDarkMode} = useContext(ThemeContext);

  function handleCradShow() {
    setShowCard(true);
  }

  return (
    <div>
      <header>
        {showCard && <CardDetails onClose={() => setShowCard(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#" onClick={()=> setDarkMode(darkMode => ! darkMode)}
              >
                <img src={darkMode ? Sun :Moon} width="24" height="24" alt="Moon" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCradShow}
              >
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="ShoppingCart"
                />
                {cardData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cardData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
