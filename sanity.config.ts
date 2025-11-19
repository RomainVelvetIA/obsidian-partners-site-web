import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

const projectId = '6fry4t3n';
const dataset = 'production';

export default defineConfig({
    name: 'default',
    title: 'Obsidian Partners Blog',

    projectId,
    dataset,

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
});
