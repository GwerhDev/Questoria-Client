const defaultValue = { 
  style: {
      transform: '', 
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
  contains
};

function contains() {
  return;
}

export const $d = (e: string) => {
  return document.querySelector(e) || defaultValue
};

export const $gId = (e: string) => {
  return document.getElementById(e) || defaultValue
};

export const $display = (e: string) => {
  if ($d(e).style.display === "block") return $d(e).style.display = "none";
  return $d(e).style.display = "block";
}