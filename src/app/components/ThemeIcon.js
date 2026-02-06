import Image from "next/image";

const ThemeIcon = ({ lightSrc, darkSrc, alt, size = 20, sizes, className = "" }) => {
  const resolvedSizes = sizes || `${size}px`;

  return (
    <span
      className={`relative inline-block align-middle ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={lightSrc}
        alt={alt}
        width={size}
        height={size}
        sizes={resolvedSizes}
        className="absolute inset-0 theme-icon-light"
      />
      <Image
        src={darkSrc}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        sizes={resolvedSizes}
        className="absolute inset-0 theme-icon-dark"
      />
    </span>
  );
};

export default ThemeIcon;
