module.exports = {
  MOVE_LEFT: new Buffer('1b5b3130303044', 'hex'),
  MOVE_UP: new Buffer('1b5b3141', 'hex'),
  CLEAR_LINE: new Buffer('1b5b304b', 'hex'),
  FIRST_CLEAR: '\x1bc',
  CLEAR: '\x1b[2J\x1b[0f',
}
