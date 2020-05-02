function generateMarkdown(data) {
  return `
<img alt="GitHub repo top language" src="https://img.shields.io/github/languages/top/${data.username}/${data.repoName}">

# ${data.title}

## ${data.description}

### ${data.installation}

### ${data.usage}

### ${data.contributing}

### ${data.license}

`;
}

module.exports = generateMarkdown;
