import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CirclesWithBar
        height="100"
        width="100"
        color="#f7f7fb"
        outerCircleColor="#3470ff"
        innerCircleColor="#3470ff"
        barColor="#f7f7fb"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
