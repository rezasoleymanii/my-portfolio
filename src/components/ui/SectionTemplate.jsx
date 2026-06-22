export default function SectionTemplate({
  badge,
  badgeClass="",
  badge2,
  badge2Class="",
  title,
  titleClass="",
  highlight,
  subtitle,
  subtitleClass="",
  description,
  descriptionClass="",
  image,
  imageClass="",
  centerClass="",
  profileClass="",
    divTitleClass="",
  children
}) {

return (
<div className={`${centerClass}`}>
    <div className={`flex justify-between pt-5 pl-10`}>
        <div className={`flex flex-col gap-10 pt-5 pl-15 ${profileClass}`}>

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
        <div className={`${imageClass}`}>
            <img
                className="w-xl"
                src={image?.src}
                alt=""
            />
        </div>

    </div>
    <div className="hidden">
        <div>
            <span className={`${badge2Class}
                w-fitinline-flex items-center justify-center w-fit py-[1px]
                px-[9px] text-[16px] text-[#047ff5] rounded-full border border-[#0761bb]`}>
                {badge2}
            </span>
            <div>
                <img
                    className="w-xl"
                    src={imageProjects?.src}
                    alt=""
                />
                <p></p>
                <button></button>
            </div>
        </div>
    </div>    
</div>
)

}