export const grayscale = (foto) => ({...foto, filter: "grayscale"});
export const brightness = (foto) => ({...foto, brighness: "+20"});

export default function blur(foto){return {...foto, effect: "blur"}}