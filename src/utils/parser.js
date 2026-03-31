const fs = require('fs');
const _ = require('lodash');

const parser = {
  parseFile: (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const resources = {};

    lines.forEach((line) => {
      if (line.trim().startsWith('resource')) {
        const match = line.match(/resource\s+([\w\-]+)\s+([\w\-]+)\s*{?/);
        if (match) {
          resources[match[2]] = {
            type: match[1],
            attributes: {},
          };
        }
      } else if (line.trim().startsWith('  ')) {
        const match = line.match(/(\w+)\s*=\s*(.*)/);
        if (match) {
          const key = match[1];
          const value = match[2];
          if (resources[_.last(Object.keys(resources))]) {
            resources[_.last(Object.keys(resources))].attributes[key] = value;
          }
        }
      }
    });

    return resources;
  },
};

module.exports = parser;