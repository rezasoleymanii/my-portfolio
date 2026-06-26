import SectionTemplate from "../../ui/SectionTemplate";
import SkillBar from "../../ui/SkillBar";
import profile from "../../../../public/images/back-profil.png";

export default function About({setActivePage}) {
  return (
    <SectionTemplate
      badge="About Me"
      title="My"
      titleClass="text-[40px]"
      highlight="Journey"
      subtitleClass="text-[20px]"
      descriptionClass="text-[12px]"
      profileClass="absolute z-10 "
      centerClass="flex-row-reverse"
      ProjectsClass="hidden"
      imageClass="flex order-first"
      subtitle={
        <>
          Frontend developer passionate about
          <br />
          learning and creating.
        </>
      }
      description={
        <>
          My journey started from internship and
          <br />
          continued through React, mobile and
          <br />
          UI/UX development.
        </>
      }
      image={profile}
>
      <div className="flex w-4/5 px-[20px] backdrop-blur-md shadow-lg rounded-xl ">
        <div>
          <h3 className="text-[22px] font-semibold mb-5">
            My Journey
          </h3>
          <div className="border-l border-[#0965e5] pl-5 flex flex-col gap-12 w-4/5">
            <div className="flex gap-3 cursor-pointer" 
              onClick={() => setActivePage("projects")}>
              <div className="bg-[#01112a] rounded-full h-14 p-4">
                <i className="bi bi-briefcase text-[#0174ef] text-[20px]"></i>
              </div>
              <div>
                <span className="text-[#0965e5]">
                  Max Shop
                </span>
                <p className="text-[#727f8b] text-[14px]">
                  I started my first internship in Golshahr,
                  mainly knowing HTML, CSS, microsites, and a little JavaScript,
                  and I was there for a year.
                </p>
              </div>
            </div>

            <div className="flex gap-3 cursor-pointer"
              onClick={() => setActivePage("projects")}>
              <div className="bg-[#01112a] rounded-full h-14 p-4">
                <i className="bi bi-code-slash text-[#0174ef] text-[20px]"></i>
              </div>
              <div>
                <span className="text-[#0965e5]">
                  React Journey
                </span>
                <p className="text-[#727f8b] text-[14px]">
                  Started learning React with guidance
                  and building practice projects.
                </p>
              </div>
            </div>

            <div className="flex gap-3 cursor-pointer"
              onClick={() => setActivePage("projects")}>
              <div className="bg-[#01112a] rounded-full h-14 p-4">
                <i className="bi bi-tablet text-[#0174ef] text-[20px]"></i>
              </div>
              <div>
                <span className="text-[#0965e5]">
                  React Native
                </span>

                <p className="text-[#727f8b] text-[14px]">
                  Expanded into Expo, React Native,
                  tailwindcss,sass/scss,JavaScript 
                  UI/UX and TypeScript.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div>

          <h3 className="text-[22px] font-semibold mb-5">
            Skills
          </h3>

          <SkillBar title="HTML" value={95}/>
          <SkillBar title="CSS" value={90}/>
          <SkillBar title="JavaScript" value={75}/>
          <SkillBar title="React" value={80}/>
          <SkillBar title="Tailwind" value={90}/>
          <SkillBar title="TypeScript" value={60}/>

        </div>

      </div>

    </SectionTemplate>
  );
}