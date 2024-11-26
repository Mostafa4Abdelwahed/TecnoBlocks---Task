const Container = ({ children, className }) => {
  return (
    <div
      className={`mx-auto ${
        className || ""
      } px-4 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
};

export default Container;
