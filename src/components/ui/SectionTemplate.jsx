import Works from "./Works"
export default function SectionTemplate({
  badge,
  badgeClass="",
  title,
  titleClass="",
  highlight,
  subtitle,
  subtitleClass="",
  description,
  descriptionClass="",
  ProjectsClass="",
  image,
  imageClass="",
  centerClass="",
  mainClass="",
  profileClass="",
  divTitleClass="",
  children
}) {

return (
<div className={`${mainClass}`}>
    <div className={`flex justify-between pt-5 pl-0 sm:pl-5 md:pl-10 ${centerClass}`}>
        <div className={`flex flex-col gap-10 pt-5 pl-15 sm:pl-5 md:pl-10 lg:pl-15 ${profileClass}`}>

            <div className={`flex flex-col gap-2 ${divTitleClass}`}>

                <span className={`${badgeClass}
                    w-fitinline-flex items-center justify-center w-fit py-[1px]
                    px-[9px] text-[16px] text-[#047ff5] rounded-full border border-[#0761bb]
                `}>
                    {badge}
                </span>

                <h1 className={`
                    ${titleClass}
                `}>
                    {title}
                    <span className={`text-[#047ff5] `}>
                        {" "}{highlight}
                    </span>
                </h1>
                <span className={`
                    ${subtitleClass}
                `}>
                    {subtitle}
                </span>
                <p className={`text-[#727f8b]
                    ${descriptionClass}
                `}>
                    {description}
                </p>
                {children}
            </div>
        </div>
        <div className={` hidden lg:flex${imageClass}`}>
            <img
                className="w-xl"
                src={image?.src}
                alt=""
            />
        </div>

    </div>
    <div className={`flex pl-10 ${ProjectsClass}`}>
        <Works />
    </div>    
</div>
)

}