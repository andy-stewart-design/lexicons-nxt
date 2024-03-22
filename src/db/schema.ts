import { relations } from 'drizzle-orm';
import { text, sqliteTable, primaryKey } from 'drizzle-orm/sqlite-core';

export const iconTable = sqliteTable('Icon', {
  id: text('id').primaryKey().notNull(),
  name: text('name').unique().notNull(),
  display_name: text('display_name').unique().notNull(),
  path_monoline: text('path_monoline'),
  path_two_tone: text('path_two_tone'),
  path_solid: text('path_solid').notNull(),
});

export const iconRelations = relations(iconTable, ({ many }) => ({
  iconsToTags: many(iconsToTagsTable),
}));

export const tagTable = sqliteTable('Tag', {
  id: text('id').primaryKey().notNull(),
  name: text('name').unique().notNull(),
  display_name: text('display_name').unique().notNull(),
});

export const tagRelations = relations(iconTable, ({ many }) => ({
  iconsToTags: many(iconsToTagsTable),
}));

export const iconsToTagsTable = sqliteTable(
  'IconsToTags',
  {
    icon_id: text('iconId')
      .notNull()
      .references(() => iconTable.id),
    tag_id: text('tagId')
      .notNull()
      .references(() => tagTable.id),
  },
  (currentTable) => ({
    pk: primaryKey({ name: 'composite_key', columns: [currentTable.icon_id, currentTable.tag_id] }),
  })
);

export const usersToGroupsRelations = relations(iconsToTagsTable, ({ one }) => ({
  icon: one(iconTable, {
    fields: [iconsToTagsTable.icon_id],
    references: [iconTable.id],
  }),
  tag: one(tagTable, {
    fields: [iconsToTagsTable.tag_id],
    references: [tagTable.id],
  }),
}));
