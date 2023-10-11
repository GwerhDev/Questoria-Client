const defaultValue = { 
  style: {
      transform: '',
      display: '',
      opacity: '', 
      filter: '', 
      scale: '', 
      overflowY: '',
      transitionDuration: '',
      transformOrigin: '',
      transformStyle: '',
      transitionTimingFunction: '',
      transformBox: '',
      transitionDelay: '',
      transitionProperty: '',
  },
  contains() {
    return;
  }
};

export const $d = (e: string) => {
  const element = document.querySelector(e) as HTMLElement;
  if (element) {
    return element;
  }
  return defaultValue;
};

export const $gId = (e: string) => {
  const element = document.getElementById(e) as HTMLElement;
  if (element) {
    return element;
  }
  return defaultValue;
};

export const $display = (e: string) => {
  const element = $d(e);
  if (element.style.display === "block") return element.style.display = "none";
  return element.style.display = "block";
};