const modulesFiles = require.context('react-syntax-highlighter/dist/esm/styles/prism', true, /.js$/)

export default modulesFiles.keys().reduce((modules, path) => {
  const module = modulesFiles(path)

  modules[path.replace(/\.(\/|js$)/g, '')] = module.default
  return modules
}, {})
