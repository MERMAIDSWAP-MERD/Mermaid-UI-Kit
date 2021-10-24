import { DefaultTheme } from "styled-components";
import { CardProps } from "./types";
interface CustomCardProps extends CardProps {
    theme: DefaultTheme;
}
declare const CustomCard: import("styled-components").StyledComponent<"div", DefaultTheme, CustomCardProps, never>;
export default CustomCard;
