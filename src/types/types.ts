export interface homeItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
}

export interface ISection {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string | undefined;
}

export interface IShopData {
  id: number;
  title: string;
  routeName: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export interface previewSectionProps {
  id: number;
  idx: number;
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export interface previewItemProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}
