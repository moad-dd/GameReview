/* eslint-disable @typescript-eslint/no-unused-vars */

const ImgUrl = (Url: string) => {
  const Target = "media/";
  const index = Url.indexOf(Target) + Target.length;
  const NewUrl = Url.slice(0, index) + "crop/600/400/" + Url.slice(index);
  return NewUrl;
};

export default ImgUrl;
