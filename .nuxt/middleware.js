const middleware = {}

middleware['isAdmin'] = require('..\\middleware\\isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isRegistered'] = require('..\\middleware\\isRegistered.js')
middleware['isRegistered'] = middleware['isRegistered'].default || middleware['isRegistered']

export default middleware
