export interface TextProps {
  family?: string;
  color?: string;
  isUnderline?: boolean;
  size?: number;
  isPointer?: boolean;
  align?: "left" | "center" | "right" | "justify";
  isFullWidth?: boolean;
  alignSelf?: "center" | "end" | "start";
}
