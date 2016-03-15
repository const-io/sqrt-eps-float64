'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var sqrt = require( 'math-sqrt' );
var SQRT_EPSILON = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof SQRT_EPSILON, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the square root of the difference between one and the smallest value greater than one which is representable as a double (2**-52)', function test( t ) {
	var expected = sqrt( pow( 2, -52 ) );
	t.equal( SQRT_EPSILON, expected, 'equals sqrt(2**-52)' );
	t.end();
});
