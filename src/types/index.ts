export enum ItemTypes {
  instagram = "instagram",
  instagram_per = "اینستاگرام",
  twitter = "twitter",
  twitter_per = "توییتر",
  facebook = "facebook",
  facebook_per = "فیسبوک",
  telegram = "telegram",
  telegram_per = "تلگرام",
  whatsapp = "whatsapp",
  whatsapp_per = "واتس اپ",
  linkedin = "linkedin",
  linkedin_per = "لینکدین",
  github = "github",
  github_per = "گیت هاب",
  website = "website",
  website_per = "وب سایت",
}

export type Type =
  | ItemTypes.facebook
  | ItemTypes.github
  | ItemTypes.instagram
  | ItemTypes.linkedin
  | ItemTypes.telegram
  | ItemTypes.twitter
  | ItemTypes.whatsapp
  | ItemTypes.website;

export interface Item {
  id?: string;
  type: Type | null;
  username: string | null;
  link: string | null;
}
