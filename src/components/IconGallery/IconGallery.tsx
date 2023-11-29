import IconCard from './IconCard';
import classes from './component.module.css';
import { fetchIcons } from '@utils/prisma';

interface IconGalleryProps {
  query: string;
}

export default async function IconGallery({ query }: IconGalleryProps) {
  const icons = await fetchIcons(query);

  const icons_abc = [...icons].sort(function (a, b) {
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
  return (
    <div className={`${classes['gallery']} ${classes['loading']}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
          stroke="var(--accent-color)"
          strokeOpacity="0.2"
          strokeWidth="6"
        />
        <path d="M44 24C44 12.9543 35.0457 4 24 4" stroke="var(--accent-color)" strokeWidth="6" />
      </svg>
    </div>
  );
}
