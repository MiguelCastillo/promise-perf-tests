// Load all promise impls
module.exports = {
    spromise: require('./adapters/spromise'),
    when: require('./adapters/when'),
    q: require('./adapters/q'),
    deferred: require('./adapters/deferred'),
    jquery: require('./adapters/jquery')
//    avow: require('./adapters/avow'),
//    rsvp: require('./adapters/rsvp'),
//    laissez: require('./adapters/laissez-faire')
};
