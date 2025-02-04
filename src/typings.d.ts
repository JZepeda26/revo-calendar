import { Component } from "react";

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

interface Events {
  name: string;
  subtitle?: string;
  date: number;
  allDay?: boolean;
  extra?: {
    icon?: string;
    text: string;
  };
  details?: []
}

export interface Props {
  style?: object;
  className?: string;
  events?: Array<Events>;
  highlightToday?: boolean;
  lang?: string;
  primaryColor?: string;
  secondaryColor?: string;
  todayColor?: string;
  textColor?: string;
  indicatorColor?: string;
  deleteBgColor?: string;
  updateBgColor?: string;
  deleteTextColor?: string;
  updateTextColor?: string;
  animationSpeed?: number;
  sidebarWidth?: number;
  detailWidth?: number;
  showDetailToggler?: boolean;
  detailDefault?: boolean;
  showSidebarToggler?: boolean;
  sidebarDefault?: boolean;
  onePanelAtATime?: boolean;
  allowDeleteEvent?: boolean;
  allowEditEvent?: boolean;
  allowAddEvent?: boolean;
  openDetailsOnDateSelection?: boolean;
  timeFormat24?: boolean;
  showAllDayLabel?: boolean;
  detailDateFormat?: string;
  languages?: Object;
  date?: Date;
  dateSelected?(date: { day: number; month: number; year: number }): void;
  eventSelected?(index: number): void;
  addEvent?(date: Date): void;
  updateEvent?(index: number): void;
  deleteEvent?(index: number): void;
  header?(month: string): React.ReactNode | undefined;
}

//Styled Component Props

export interface SidebarProps {
  sidebarOpen: boolean;
  animatingIn: boolean;
  animatingOut: boolean;
}

export interface MonthButtonProps {
  current: boolean;
}

export interface DayProps {
  firstDay: boolean;
  firstOfMonth: number;
}

export interface DayButtonProps {
  current: boolean;
  today: boolean;
  hasEvent: boolean;
}

export interface DetailsProps {
  animatingIn: boolean;
  animatingOut: boolean;
  detailsOpen: boolean;
  floatingPanels: boolean;
}

export interface CloseDetailProps {
  animatingIn: boolean;
  animatingOut: boolean;
  detailsOpen: boolean;
}
