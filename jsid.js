// create a TSID-like key using JavaScript. This key is generated to fit JavaScript's integer range.
// 	Time component (42 bits) : ~ 2109-05-14
// 	Node ID (5 bits) : 0 ~ 31
// 	Counter (5 bits) : 0 ~ 31
export default class Jsid {
	#counter;
	#node;

	constructor( node = 0, counter ) {
		if ( typeof node !== "number" || node < 0 || node > 31 ) {
			this.#node = 0;
		} else {
			this.#node = node;
		}
		if ( typeof counter !== "number" || counter < 0 || counter > 31 ) {
			this.#counter = Math.floor( Math.random() * ( 31 - 0 + 1 ) ) + 0;
		} else {
			this.#counter = counter;
		}
	}

	// jsid 계산
	#calc( type = "int" ) {
		try {
			// time (~2109-05-14)
			let id = ( new Date() * 1 ).toString( 2 );
			if ( id.length > 42 ) return null;
			id = id.padStart( 42, "0" );

			// node
			let nd = this.#node.toString( 2 );
			if ( nd.length > 5 ) return null;
			nd = nd.padStart( 5, "0" );

			// counter
			this.#counter = ( this.#counter + 1 ) % 32;
			let cnt = this.#counter.toString( 2 ).padStart( 5, "0" );

			if ( type === "bin" || type === "binary" || type === 2 ) {
				return id + nd + cnt;
			} else {
				return parseInt( id + nd + cnt, 2 );
			}
		} catch( err ) {
			console.error( "[Plain.CLASS.Jsid].#calc", err );
			return null;
		}
	}

	// jsid 얻기
	get( type = "int" ) {
		if ( type === "bin" || type === "binary" || type === 2 ) {
			return this.getBin();
		} else {
			return this.getInt();
		}
	}

	// jsid 얻기 (binary)
	getBin() {
		return this.#calc( "bin" );
	}

	// jsid 얻기 (int)
	getInt() {
		return this.#calc( "int" );
	}
}
