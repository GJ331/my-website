import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="text-2xl font-medium">Dave</div>
        <ul
          className={`flex items-center gap-6`}
          // ref={menuRef}
          // style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties" className="hover:text-secondary">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-secondary">
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-secondary">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#people" className="hover:text-secondary">
              Testimonials
            </a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className="md:hidden"
          // onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
  );
}

export default Header