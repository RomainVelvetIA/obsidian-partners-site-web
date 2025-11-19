import { defineCliConfig } from 'sanity/cli';

const projectId = '6fry4t3n';
const dataset = 'production';

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    },
});
