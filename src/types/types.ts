export interface homeItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

export interface ISection {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string | undefined;
}
