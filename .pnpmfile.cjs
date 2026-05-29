function readPackage(pkg) {
  if (pkg.name === 'bcrypt' || pkg.name === 'sharp') {
    // Mark as approved for builds by not returning it as ignored
    pkg.pnpm = pkg.pnpm || {}
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}

