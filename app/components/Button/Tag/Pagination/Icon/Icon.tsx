import style from "./Icon.module.scss";



enum colorEnum {
    primaryColor = "#5e81f4",
    primaryTextColor = "#1c1d21",
    primaryBackgroundColor = "#f6f6f6",
    strokesColor = " #f0f0f3",
    primaryHoverColor = "#1c1d2119",
    secondaryTextColor = "#8181a5",
    secondaryBackgroundColor = "#f5f5fa",
    warningColor = "#f4be5e",
    successColor = "#7ce7ac",
    errorColor = " #ff808b",
    informationColor = "#9698d6",
    lightWarningColor = "#f4be5e19",
    lightSuccessColor = " #7ce7ac19",
    lightErrorColor = " #ff808b19;",
    lightInformationColor = "#9698d619",
    lightCyan = "#40e1fa19",
  }

enum iconEnum {
  smile_Icon = "las la-smile",
  gem_Icon = "las la-gem",
}

type iconStructure = {
  icon: keyof typeof iconEnum;
  size: string | number;
  color: keyof typeof colorEnum;
};

export default (props: iconStructure) => {

  console.log( colorEnum[props.color])
  return (
    <i
      className={iconEnum[props.icon]}
      style={{
        fontSize: ${props.size}px ,
        color: colorEnum[props.color],
      }}
    ></i>
  );
};