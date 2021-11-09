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

export const types = {
  instagram: { title: "اینستاگرام", icon: Instagram },
  twitter: { title: "توییتر", icon: Twitter },
  facebook: { title: "فیسبوک", icon: Facebook },
  telegram: { title: "تلگرام", icon: Telegram },
  whatsapp: { title: "واتس اپ", icon: WhatsApp },
  linkedin: { title: "لینکدین", icon: LinkedIn },
  github: { title: "گیت هاب", icon: GitHub },
  website: { title: "وب سایت", icon: Web },
};

export const getIcon = (type) => {
  return types?.[type]?.icon;
};

export const socialTypes = Object.entries(types).map(([key, value]) => ({
  value: key,
  label: value.title,
}));
