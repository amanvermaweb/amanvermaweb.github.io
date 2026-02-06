import Link from "next/link";
import Image from "next/image";
import ThemeIcon from "./ThemeIcon";

const SharedIconLink = ({
  href,
  label,
  icon,
  iconLight,
  iconDark,
  iconNode,
  className = "",
  iconSize = 16,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const hasThemeIcon = iconLight && iconDark;
  const iconAlt = `${label} Logo`;
  const hasCustomNode = Boolean(iconNode);

  return (
    <Link href={href} className={className} target={target} rel={rel}>
      <span className="flex gap-1 cursor-pointer items-center">
        {hasCustomNode ? (
          iconNode
        ) : hasThemeIcon ? (
          <ThemeIcon
            lightSrc={iconLight}
            darkSrc={iconDark}
            alt={iconAlt}
            size={iconSize}
          />
        ) : (
          <Image
            src={icon}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
            sizes={`${iconSize}px`}
          />
        )}
        <span className="text-sm">{label}</span>
      </span>
    </Link>
  );
};

export default SharedIconLink;
