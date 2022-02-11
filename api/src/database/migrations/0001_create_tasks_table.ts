import { Knex } from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('tasks', table => {
        table.bigIncrements('id').notNullable();

        table.string('title').notNullable();
        table.boolean('complete').notNullable().defaultTo(false);
        table.dateTime('added').notNullable().defaultTo(knex.raw('NOW()'));
        table.dateTime('completed');

        table.index('id');
        table.unique([ 'id' ], 'tasks_id_unique');
    });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('tasks');
};
