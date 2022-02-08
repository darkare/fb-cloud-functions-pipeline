module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/darkare/fb-cloud-functions-pipeline",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}