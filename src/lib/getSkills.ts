import * as fs from 'fs';

const transformFileName = (str: string) => {
  const splitStr: string[] = str.split('.');

  const arr = (splitStr[0] || '').split('');

  arr[0] = (arr[0] || '').toUpperCase();

  let name = arr.join('');

  name = name.replace(/-/g, ' ');

  return name;
};

const skillsDirectory = 'public/assets/svg/skills/';

const getSkills = () => {
  const fileNames = fs.readdirSync(skillsDirectory);

  const skills: { name: string; fileName: string }[] = fileNames.map((fileName) => {
    const name = transformFileName(fileName);
    return {
      name,
      fileName,
    };
  });

  return skills;
};

export default getSkills;
