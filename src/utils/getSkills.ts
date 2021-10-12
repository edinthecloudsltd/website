import * as fs from 'fs';

const skillsDirectory = 'public/assets/svg/skills/';

const getSkills = () => {
  const fileNames = fs.readdirSync(skillsDirectory);

  const allSkills: any = fileNames.map((fileName) => {
    return fileName;
  });

  return allSkills;
};

export default getSkills;
