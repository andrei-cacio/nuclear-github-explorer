export const reposList = [
    ['repos', 'all'],
    (all) => all.map(repo => {
        return {
            name: repo.get('name'),
            language: repo.get('language'),
            url: repo.get('url'),
            id: repo.get('id'),
            description: repo.get('description')
        }
    })
];

export const searchResults = [
    ['repos', 'search'],
    ['results'],
    (results) => results.map(repo => {
        return {
            name: repo.get('name'),
            language: repo.get('language'),
            url: repo.get('url'),
            id: repo.get('id'),
            description: repo.get('description')
        }
    })
];