import * as fs from 'fs';

const transformFileName = (str: string) => {
  const name: string[] = str.split('.');

  const arr = (name[0] || '').split('');

  arr[0] = (arr[0] || '').toUpperCase();

  return arr.join('');
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
