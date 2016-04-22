export const reposList = [
    ['repos'],
    (repos) => repos.map(repo => {
        return {
            name: repo.get('name'),
            language: repo.get('language'),
            url: repo.get('url'),
            id: repo.get('id')
        }
    })
];