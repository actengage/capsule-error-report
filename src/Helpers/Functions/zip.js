export default function zip(contents, filename) {
    return new Promise((resolve, reject) => {
        import('jszip').then(module => {
            var zip = new module.default;
            
            zip.folder(filename.replace(/\.html$/, '')).file(filename, contents);
            zip.generateAsync({type: 'blob'}).then(resolve, reject);
        });
    });
}