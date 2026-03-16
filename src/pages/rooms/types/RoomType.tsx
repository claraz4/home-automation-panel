import { IconType } from "react-icons";
import {
  FaKitchenSet,
  FaCouch,
  FaBed,
  FaBath,
  FaUtensils,
  FaBriefcase,
  FaCar,
  FaPersonWalking,
  FaShirt,
  FaStairs,
  FaWindows,
  FaDoorClosed,
} from "react-icons/fa6";

export type RoomType =
  | "kitchen"
  | "livingRoom"
  | "bedroom"
  | "bathroom"
  | "diningRoom"
  | "office"
  | "garage"
  | "hallway"
  | "laundryRoom"
  | "basement"
  | "attic"
  | "default";

export const roomIcons: Record<RoomType, IconType> = {
  kitchen: FaKitchenSet,
  livingRoom: FaCouch,
  bedroom: FaBed,
  bathroom: FaBath,
  diningRoom: FaUtensils,
  office: FaBriefcase,
  garage: FaCar,
  hallway: FaPersonWalking,
  laundryRoom: FaShirt,
  basement: FaStairs,
  attic: FaWindows,
  default: FaDoorClosed,
};
