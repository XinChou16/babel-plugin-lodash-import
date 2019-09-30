const babel = require('@babel/core');
const types = require('@babel/types');

const visitor = {
  ImportDeclaration(path) {
    const { specifiers, source } = path.node;

    // parse
    if (!types.isImportDefaultSpecifier(specifiers[0])) {
      // modify import declaration statement
      let declarations = specifiers.map(specifier => {
        return types.ImportDeclaration(
          [types.ImportDefaultSpecifier(specifier.local)],
          types.stringLiteral(`${source.value}/${specifier.local.name}`)
        );
      })
      
      // replace
      path.replaceWithMultiple(declarations);
    }

  }
}

module.exports = function(babel) {
  return { visitor }
}