const fileStructure = {
    name: 'src',
    isFolder: true,
    items: [
        {
            name: 'components',
            isFolder: true,
            items: [
                {
                    name: 'App',
                    isFolder: true,
                    items: [
                        {
                            name: 'App.css',
                            isFolder: false,
                        },
                        {
                            name: 'App.js',
                            isFolder: false,
                        }
                    ]
                },
                {
                    name: 'Folder',
                    isFolder: true,
                    items: [
                        {
                            name: 'Folder.css',
                            isFolder: false,
                        },
                        {
                            name: 'Folder.js',
                            isFolder: false,
                        }
                    ]
                },
            ]
        },
        {
            name: 'data',
            isFolder: true,
            items: [
                {
                    name: 'structure.js',
                    isFolder: false,
                }
            ]
        },
        {
            name: 'index.css',
            isFolder: false,
        },
        {
            name: 'index.js',
            isFolder: false,
        }
    ]
}


export default fileStructure;