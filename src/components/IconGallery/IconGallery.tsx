import prisma from '@utils/db';
import IconCard from './IconCard';
import classes from './component.module.css';

export default async function IconGallery() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const icons = await prisma.icon.findMany({
    include: {
      tags: true,
    },
  });

  const icons_abc = icons.sort(function (a, b) {
    var textA = a.name.toLocaleLowerCase();
    var textB = b.name.toLocaleLowerCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <div className={classes['gallery']}>
      <div className="flex flex-align-start flex-justify-between">
        <p className="label">Showing {icons.length} Icons</p>
        <p className="label">v.0.1</p>
      </div>
      {icons_abc.map((icon, i) => (
        <IconCard key={i} icon={icon} />
      ))}
    </div>
  );
}

export function Loading() {
  return <div className={classes['gallery']}>Loading...</div>;
}
