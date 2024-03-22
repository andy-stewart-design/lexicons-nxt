import IconCard from './IconCard';
import { fetchIcons } from '@utils/prisma';
import { db } from '@/db';
import { like, or } from 'drizzle-orm';
import { iconTable, tagTable } from '@/db/schema';
import { shuffle } from '@/utils/arrays';
import type { IconData } from '@/constants/icons';
import classes from './component.module.css';

interface IconGalleryProps {
  query: string;
}

export default async function IconGallery({ query }: IconGalleryProps) {
  // const icons = await fetchIcons(query);
  const icons = await db
    .select()
    .from(iconTable)
    .where(like(iconTable.name, `%${query}%`));

  const iconsRandomized = shuffle(icons);

  return (
    <div className={classes['gallery']}>
      <div className="flex flex-align-start flex-justify-between">
        <p className="label">{icons.length} Icons</p>
        <p className="label">v0.1.1</p>
      </div>
      {iconsRandomized.map((icon, i) => (
        <IconCard key={i} icon={icon as IconData} />
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
