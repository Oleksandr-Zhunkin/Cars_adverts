import firstImg from "../../image/1-car.png";
import secondImg from "../../image/2-car.png";

const HomePage = () => {
  return (
    <>
      <section className=" py-10 flex ">
        <img className="absolute left-0 mr-[150px]" src={firstImg} alt="cars" />
        <div className="py-[50px] ml-auto">
          <h1 className=" font-semibold text-[100px] text-[#121417]  ">
            <span className="text-[#3470ff]">Easy</span> <br /> Rent Car
          </h1>
          <p className="font-medium text-[24px]">
            So <span className="text-[#3470ff]">simple</span>. So{" "}
            <span className="text-[#3470ff]">chic</span>.
          </p>
        </div>
      </section>
      <section className="py-10 ">
        <h2 className="font-medium text-[32px] text-[#3470ff] text-center mb-[88px]">
          OUR MISSION
        </h2>
        <div className="flex">
          <p className="font-normal text-[24px] text-[#121417] text-opacity-50 mr-auto min-w-[570px] w-[570px]">
            At Easy Rent, we are dedicated to providing a seamless and reliable
            car rental experience. Since our inception, we have committed to
            offering a diverse fleet of well-maintained vehicles, exceptional
            customer service, and competitive pricing. We cater to all types of
            journeys, whether it's a short business trip or a family vacation.
            By continuously improving our services and embracing the latest
            technology, we strive to be the preferred choice for car rentals.
            Our goal is to make every ride safe, comfortable, and enjoyable.
          </p>
          <img
            className="absolute right-0 left-[747px]"
            src={secondImg}
            alt="car on the road"
          />
        </div>
      </section>
      <section className="py-10">
        <h2 className="font-medium text-[32px] text-[#3470ff] text-center mb-[88px]">
          FAQ
        </h2>
        <div>
          <div className="collapse collapse-plus bg-[#f7f7fb] text-[#121417] mb-5 text-[24px]">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title after:collapse-plus-top-12 p-8 px-12 font-bold text-[24px] ">
              What documents do I need to rent a car?
            </div>
            <div className="collapse-content">
              <p className="pb-7 px-7 font-normal ">
                To rent a car, you will need a valid driver's license, a credit
                card in your name, and a form of identification such as a
                passport or ID card. International renters may also need an
                International Driving Permit (IDP) depending on the country's
                regulations.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#f7f7fb] text-[#121417] mb-5 text-[24px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title after:collapse-plus-top-12 p-8 px-12 font-bold text-[24px]">
              Is there a minimum age requirement for renting a car?
            </div>
            <div className="collapse-content">
              <p className="pb-7 px-7 font-normal ">
                Yes, the minimum age to rent a car with Easy Rent is typically
                21 years old. However, drivers aged 21-24 may be subject to a
                young driver surcharge. Age requirements and surcharges can vary
                by location, so please check the specific terms for your rental
                location.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#f7f7fb] text-[#121417] mb-5 text-[24px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title after:collapse-plus-top-12 p-8 px-12 font-bold text-[24px]">
              Can I modify or cancel my reservation?
            </div>
            <div className="collapse-content">
              <p className="pb-7 px-7 font-normal ">
                Yes, you can modify or cancel your reservation through our
                website or customer service hotline. Please note that changes to
                your reservation may affect the rental rate. Cancellations made
                within 24 hours of the pick-up time may be subject to a
                cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
