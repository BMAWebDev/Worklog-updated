type FlexAlignment = 'flex-start' | 'flex-end' | 'center';

export interface FlexProps {
  justify?: 'space-between' | 'space-evenly' | FlexAlignment;
  gap?: number;
  align?: FlexAlignment;
  alignContent?: FlexAlignment;
  direction?: 'row' | 'column';
  flex?: number | string;
  alignSelf?: FlexAlignment;
  isFullWidth?: boolean;
  wrap?: 'wrap';
}
