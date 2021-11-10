import {
  Instagram,
  Twitter,
  Facebook,
  Telegram,
  WhatsApp,
  LinkedIn,
  GitHub,
  Web,
} from "@mui/icons-material";
import { ItemTypes } from "../../../../types";

interface SocialMedia {
  title: string;
  icon: React.JSXElementConstructor<any>;
}

interface Social {
  [key: string]: SocialMedia;
}

export const types: Social = {
  [ItemTypes.instagram]: { title: ItemTypes.instagram_per, icon: Instagram },
  [ItemTypes.twitter]: { title: ItemTypes.twitter_per, icon: Twitter },
  [ItemTypes.facebook]: { title: ItemTypes.facebook_per, icon: Facebook },
  [ItemTypes.telegram]: { title: ItemTypes.telegram_per, icon: Telegram },
  [ItemTypes.whatsapp]: { title: ItemTypes.whatsapp_per, icon: WhatsApp },
  [ItemTypes.linkedin]: { title: ItemTypes.linkedin_per, icon: LinkedIn },
  [ItemTypes.github]: { title: ItemTypes.github_per, icon: GitHub },
  [ItemTypes.website]: { title: ItemTypes.website_per, icon: Web },
};

export const getIcon = (type: string) => {
  return types?.[type]?.icon;
};

export const socialTypes = Object.entries(types).map(([key, value]) => ({
  value: key,
  label: value.title,
}));
