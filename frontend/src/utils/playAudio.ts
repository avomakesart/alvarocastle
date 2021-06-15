export const playAudio = (path: string | undefined) => {
  let audioFile = new Audio(path);
  audioFile.play();
};
