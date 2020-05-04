function generateMarkdown(data) {
  return `
<img alt="GitHub repo top language" src="https://img.shields.io/github/languages/top/${data.username}/${data.repoName}">

# ${data.title}

## Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### Contributing
${data.contributing}

<img alt="GitHub Profile Pic" src="${data.profilePic}">

### ${data.email || ""}

### ${data.license}
`;
}

module.exports = generateMarkdown;
