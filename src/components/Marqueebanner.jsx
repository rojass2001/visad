import Marquee from "react-fast-marquee";

export default function MarqueeBanner() {
  return (
    <Marquee className="w-full text-xl pb-1 font-bold text-white" gradient={false} speed={50}>
      🚀 Welcome to the Dashboard &nbsp;&nbsp; | &nbsp;&nbsp; New updates available &nbsp;&nbsp; | &nbsp;&nbsp; Stay tuned! 🚀
    </Marquee>
  );
}
