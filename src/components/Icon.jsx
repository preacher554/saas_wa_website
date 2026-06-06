import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardList,
  Handshake,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Target,
  UserCheck,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";

const iconMap = {
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardList,
  Handshake,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Target,
  UserCheck,
  Utensils,
  Wrench,
  Zap,
};

export default function Icon({ name, className = "h-5 w-5" }) {
  const LucideIcon = iconMap[name] ?? Sparkles;
  return <LucideIcon className={className} strokeWidth={1.8} />;
}
