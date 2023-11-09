import EmailForm from "./components/EmailForm";
import NotificationCarousel from "./components/NotificationCarousel";
import TastimonialCarousel from "./components/TastimonialCarousel";

export default function Home() {
  return (
    <main className=" md:flex items-center h-screen overflow-x-hidden ">
      {/* Detail side */}
      <div className=" h-screen md:w-[55.56%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1FA911] from-[18%] via-[#2F15D0] via-[60%] to-[rgb(0,0,0)] to-[90%]">
        <div className=" flex flex-col w-full pl-[62px] pt-[100px]">
          {/* 1stsection */}
          <div className=" text-[#F2F2F2] h-[251px] flex justify-between items-center w-full">
            <div className=" text-start">
              <div>
                <img
                  src="./bell1.png"
                  alt="bell"
                  className=" h-[28px] w-[28px]"
                />
              </div>
              <h4 className=" text-[31px] leading-[37.2px] stroke-black stoke-2 my-[16px] [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
                Get notified when a highly correlated whale makes a move
              </h4>
              <p className="text-[#E5E5E6] text-[16px] leading-[19.2px]">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>

            <div className=" p-5">
              <NotificationCarousel />
            </div>
          </div>

          {/* 2ndsection */}
          <div className=" flex items-center justify-between mt-[72px] pr-[65px]">
            <div className=" h-[306px] w-[335px] overflow-hidden rounded-lg">
              <img src="./Cohorts-1.jpg" alt="img" className=" h-full w-full" />
            </div>
            <div className=" flex flex-col items-end justify-end w-[305px]  text-right">
              <img src="./eye.png" alt="eye" className=" h-auto w-[32px]" />
              <h4 className=" text-[31px] leading-[37.2px] my-[16px] text-[#F2F2F2]">
                Watch what the whales are doing
              </h4>
              <p className=" text-[16px] leading-[19.2px] text-[#E5E5E6]">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>

          {/* 3rdsection */}
          <div className="  w-full z-10">
            <p className=" leading-[30px] text-[25px] text-right text-[#F2F2F2] my-[22px] pr-[65px]">
              Testimonials
            </p>
            <div className=" border border-[#E5E5E6] h-[1px] pr-[65px]" />

            <div className=" flex justify-between  items-end gap-x-[40px] mt-[40px] h-[136px]">
              <img
                src="./lochLogo.png"
                alt="logo"
                className=" w-[60px] h-[60px] mb-4"
              />

              <TastimonialCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Email side */}
      <div className=" md:h-screen md:w-[44.44%] flex justify-center items-center">
        <div className=" w-[365px] h-[347px]">
          <div className=" p-2">
            <h3 className=" text-[39px] text-[#B0B1B3] font-medium">
              Sign up for exclusive access.
            </h3>

            <div>
              <EmailForm />
            </div>
          </div>

          <p className=" font-semibold">
            You'll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </main>
  );
}

{
  /* <div className=" flex flex-col items-center w-[678px] z-0 mx-auto">
  <div className=" flex items-center gap-x-[38px] text-start  w-full relative">
    <div className=" flex flex-col text-left text-[#F2F2F2] w-[322px]">
      <img src="./bell1.png" alt="bell" className=" h-[32px] w-[32px]" />
      <p className=" text-[31px] leading-[37.2px] stroke-black stoke-2 my-[16px] [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
        Get notified when a highly correlated whale makes a move
      </p>
      <p className=" text-[16px] leading-[19.2px] ">
        Find out when a certain whale moves more than any preset amount on-chain
        or when a dormant whale you care about becomes active.
      </p>
    </div>
    <NotificationCarousel />
  </div>

  <div className=" flex justify-center xl:gap-x-[55px] gap-x-[38px] items-center text-end mt-[72px] mb-[22px]">
    <div className=" rounded-lg overflow-hidden">
      <img src="./Cohorts-1.jpg" alt="img" className=" h-[306px] w-[335px]" />
    </div>
    <div className=" flex flex-col items-end justify-end w-[305px] text-[#F2F2F2]">
      <img src="./eye.png" alt="eye" className=" h-auto w-[32px]" />
      <h4 className=" text-[31px] leading-[37.2px] my-[16px]">
        Watch what the whales are doing
      </h4>
      <p className=" text-[16px] leading-[19.2px]">
        All whales are not equal. Know exactly what the whales impacting YOUR
        portfolio are doing.
      </p>
    </div>
  </div>

  <div className="  w-full z-10">
    <p className=" leading-[30px] text-[25px] text-right text-[#F2F2F2] my-[22px]">
      Testimonials
    </p>
    <div className=" border border-[#E5E5E6] h-[1px] " />

    <div className=" flex justify-between  items-end gap-x-[40px] mt-[40px]">
      <img src="./lochLogo.png" alt="logo" className=" w-[60px] h-[60px]" />

      <TastimonialCarousel />
    </div>
  </div>
</div>; */
}
