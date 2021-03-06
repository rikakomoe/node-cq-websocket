class CQTag {
  constructor (type, meta = {}) {
    this.type = type
    this.meta = meta
  }

  equals (another) {
    if (typeof another === 'string') {
      // to solve circular dependencies
      [ another ] = require('./cq-utils').parse(another)
    }

    if (!(another instanceof CQTag)) return false

    return this.toString() === another.toString()
  }

  valueOf () {
    return this.toString()
  }

  toString () {
    const optStr = Object.keys(this.meta)
      .sort()
      .map(k => `${k}=${this.meta[k]}`).join(',')

    return `[CQ:${this.type}${optStr ? ',' : ''}${optStr}]`
  }
}

module.exports = CQTag
