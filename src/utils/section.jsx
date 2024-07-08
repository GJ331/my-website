import PropTypes from "prop-types";

export const Section = ({ id, bgClass, children }) => (
  <section id={id} className={`w-full h-[100%] pb-16 ${bgClass}`}>
    <div className="max-w-[1280px] mx-auto pt-44 xl:pt-52">
      {children}
    </div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};
