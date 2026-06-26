import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon
}) {

const styles = {
    primary:
    "bg-[linear-gradient(to_left,#0241c1,#0965e5)] py-[12px] px-[20px] rounded-lg border border-[#0761bb]",

    outline:
    "py-[12px] px-[20px] rounded-lg border border-[#454f64]",

    click:"text-center bg-[linear-gradient(to_left,#0241c1,#0965e5)] py-[12px] px-[20px] rounded-lg border border-[#454f64]",

    header:
    "py-[5px] px-[18px] text-[#047ff5] rounded-lg border border-[#0761bb]"
}

if(href){
    return(
        <Link
            href={href}
            className={styles[variant]}
        >
            {children}
            {icon}
        </Link>
    )
}

return(
    <button
        onClick={onClick}
        className={styles[variant]}
    >
        {children}
        {icon}
    </button>
)
}