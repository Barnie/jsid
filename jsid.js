module.exports = ( node = 0, counter = 0 ) => {
    if ( typeof node !== "number" || node < 0 || node > 31 ) return null;
    if ( typeof counter !== "number" || counter < 0 || counter > 31 ) counter = Math.floor( Math.random() * ( 31 - 0 + 1 ) ) + 0;

    return {
        get: () => {
            // time (~2109-05-14)
            let id = ( new Date() * 1 ).toString(2);
            if ( id.length > 42 ) return null;
            id = id.padStart( 42, "0" );

            // node
            let nd = node.toString(2);
            if ( nd.length > 5 ) return null;
            nd = nd.padStart( 5, "0" );

            // counter
            counter = ( counter + 1 ) % 32;
            let cnt = counter.toString(2).padStart( 5, "0" );

            // console.log( id + nd + cnt );
            return parseInt( id + nd + cnt, 2 );
        }
    };
};
