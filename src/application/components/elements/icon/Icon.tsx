import { ReactNode } from "react";
import "./styles.css";

interface IconProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name: string;
}

const iconMapper: Record<string, ReactNode> = {
  CardFront: <i className="bi bi-person-vcard"></i>,
  CardReverse: <i className="bi bi-postcard"></i>,
  Check: <i className="bi bi-check-lg"></i>,
  ChevronDown: <i className="bi bi-chevron-down icons"></i>,
  ChevronUp: <i className="bi bi-chevron-up icons"></i>,
  Close: <i className="bi bi-x-lg icons"></i>,
  Download: <i className="bi bi-download icons"></i>,
  Error: <i className="bi bi-exclamation-circle"></i>,
  FullScreen: <i className="bi bi-arrows-fullscreen icons"></i>,
  FullScreenExit: <i className="bi bi-fullscreen-exit icons"></i>,
  Hamburger: <i className="bi bi-list"></i>,
  Info: <i className="bi bi-info-circle"></i>,
  Logout: <i className="bi bi-box-arrow-left icons"></i>,
  Minus: <i className="bi bi-dash-lg icons"></i>,
  Plus: <i className="bi bi-plus-lg icons"></i>,
  Printer: <i className="bi bi-printer icons"></i>,
  Save: <i className="bi bi-floppy2-fill icons"></i>,
  Search: <i className="bi bi-search"></i>,
  Trash: <i className="bi bi-trash"></i>,
  Upload: <i className="bi bi-upload icons"></i>,
  UploadCloud: <i className="bi bi-cloud-arrow-up"></i>,
  VisibilityOn: <i className="bi bi-eye-fill icons"></i>,
  VisibilityOff: <i className="bi bi-eye-slash-fill icons"></i>,
  Warning: <i className="bi bi-exclamation-triangle"></i>,
};

export const Icon = ({ name, ...props }: IconProps) => <span {...props}>{iconMapper[name]}</span>;
