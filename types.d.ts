declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module "*.png" {
  const content: string;
  export = content;
}

declare module "*.jpg" {
  const content: string;
  export = content;
}

declare module '*.mp4' {
  const src: string;
  export = src;
}