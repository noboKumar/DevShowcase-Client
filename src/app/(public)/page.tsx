import CommunityStats from "@/components/sections/Communitystats";
import CtaBanner from "@/components/sections/CtaBanner";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonial";

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <Testimonial></Testimonial>
      <CommunityStats></CommunityStats>
      <CtaBanner></CtaBanner>
    </div>
  );
};

export default page;
